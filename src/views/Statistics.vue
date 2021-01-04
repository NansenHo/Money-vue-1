<template>
  <layout>
    <Tabs class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>

    <ol>
      <li v-for="(group, index) in groupList" :key="index">
        <h3 class="title">{{ beautify(group.title) }}<span>￥{{ group.total }}</span></h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record"
          >
            <span>{{ labelString(item.labels) }}</span>
            <span class="notes">{{ item.remarks }}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';

@Component({
  components: {Tabs},
})
export default class Statistics extends Vue {
  labelString(labels: Label[]) {
    return labels.length === 0 ? '无' : labels.map(l => l.name).join('，');
  }

  beautify(string: string) {
    const day = dayjs(string);
    const today = dayjs();
    console.log(today.subtract(1, 'day').toDate());
    // console.log(today.subtract(1, 'day'));
    if (day.isSame(today, 'day')) {
      return '今天';
    } else if (day.isSame(today.subtract(1, 'day'), 'day')) {
      console.log('hi');
      return '昨天';
    } else if (day.isSame(today.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(today, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get groupList() {
    const {recordList} = this;
    const newList = clone(recordList)
        .filter(r => r.type === this.type)
        .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    if (newList.length === 0) {
      return [];
    }
    type HashTableValue = { title: string, items: RecordItem[] }
    type Result = { title: string, total?: number, items: RecordItem[] }[]
    const result: Result = [{
      title: dayjs(recordList[0].createdAt).format('YYYY-M-D'),
      items: newList[0] ? [newList[0]] : []
    }];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-M-D'), items: [current]});
      }
    }
    // console.log(result);
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        console.log(sum);
        console.log(item);
        return sum + item.amount;
      }, 0);
    });
    return result;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  interval = 'day';
  recordTypeList = recordTypeList;
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

::v-deep {
  .types-tabs-item {
    background: white;

    &.selected {
      background: $color-brand;

      &::after {
        display: none
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  @extend %item;
}

.record {
  @extend %item;
  background: white;
}

.notes {
  flex: 1;
  margin-right: 16px;
  margin-left: 16px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
