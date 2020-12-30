<template>
  <layout>
    <Tabs class-prefix="types" :data-source="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      type: {{type}}
      <br/>
      interval: {{interval}}
    </div>
  </layout>
</template>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

::v-deep .types-tabs-item {
  background: white;

  &.selected {
    background: $color-brand;

    &::after {
      display: none
    }
  }
}


</style>

<script lang="ts">
import Types from '@/components/Money/Types.vue';
import Vue from 'vue';
import Component from 'vue-class-component';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tabs, Types},
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = [{text: '按天', value: 'day'},
    {text: '按周', value: 'week'},
    {text: '按月', value: 'month'}];
  typeList = [
    {text: '支出', value: '-'},
    {text: '收入', value: '+'}
  ]
};
</script>
