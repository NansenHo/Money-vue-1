<template>
  <layout>
    <Tabs class-prefix="types" :data-source="recordTypeList" :value.sync="type"/>
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
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs, Types},
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
};
</script>
