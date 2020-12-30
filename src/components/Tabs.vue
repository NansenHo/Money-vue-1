<template>
  <ul class="tabs" :class="{[classPrefix + '-tabs']: classPrefix}">
    <li v-for="item in dataSource" :key="item.value"
        class="tabs-item" :class="liClass(item)" @click="select(item)">{{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string, value: string }

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  liClass(item: DataSourceItem){
    return {
      [this.classPrefix + '-tabs-item']: this.classPrefix,
      selected: item.value === this.value
    }
  }

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tabs {
  background-color: $color-brand;
  display: flex;
  text-align: center;
  flex-direction: row;
  font-size: 24px;

  &-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected {
      /* border-bottom: 4px solid; 不能用 border 因为会影响字所占的空间 */
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #333333;
      }
    }
  }

  > button {

  }
}
</style>