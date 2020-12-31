<template>
  <layout>
    <Tabs class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <ol>
      <li v-for="group in result" :key="group.title">
        <h3 class="title">{{ beautify(group.title) }}</h3>
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
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
import dayjs from 'dayjs';

@Component({
  components: {Tabs},
})
export default class Statistics extends Vue {
  labelString(labels: Label[]) {
    return labels.length === 0 ? '无' : labels.join(',');
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

  get result() {
    const {recordList} = this;
    type HashTableValue = { title: string, items: RecordList[] }

    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split('T');
      hashTable[date] = hashTable[date] || {title: date, items: []};

      hashTable[date].items.push(recordList[i]);
    }
    // console.log(hashTable);
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  interval = 'day';
  intervalList = intervalList;
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
