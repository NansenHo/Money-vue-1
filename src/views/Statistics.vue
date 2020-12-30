<template>
  <layout>
    <Tabs class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      type: {{ type }}
      <br/>
      interval: {{ interval }}
    </div>
    <div>
      <ol>
        <li v-for="item in result" :key="item.id">{{ item }}</li>
      </ol>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs},
})
export default class Statistics extends Vue {
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const {recordList} = this;
    const hashTable = {};
    for (let i = 0; i < recordList.length; i++) {
      console.log(recordList[i].createdAt);
    }
    return [];
  }

  mounted() {
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
    height: 44px;
  }
}
</style>