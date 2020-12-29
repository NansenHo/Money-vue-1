<template>
    <layout>
      <Types class-prefix="zzz" :value.sync="yyy"/>
      <Tabs :data-source="array" :value.sync="hhh"/>
    </layout>
</template>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

::v-deep .zzz-item {
  background: white;
  border: 1px solid red;

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
  yyy = '-';
  hhh = 'day';
  array = [{text: '按天', value: 'day'},
    {text: '按周', value: 'week'},
    {text: '按月', value: 'month'}]
};
</script>
