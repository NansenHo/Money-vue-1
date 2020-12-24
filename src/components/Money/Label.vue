<template>
  <div class="label">
    <div class="label-new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="label-current">
      <li v-for="label in labelList" :key="label.id"
          :class="{selected: selectedLabels.indexOf(label)>=0}"
          @click="toggle(label)">{{ label.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import store from '@/store/index2';

@Component // @Component 可以省略括号；@Prop 不能省略括号
export default class Label extends Vue {
  labelList = store.fetchLabels();
  selectedLabels: string[] = [];

  toggle(label: string) {
    const index = this.selectedLabels.indexOf(label);
    if (index >= 0) {
      this.selectedLabels.splice(index, 1);
    } else {
      this.selectedLabels.push(label);
    }
    this.$emit('update:value', this.selectedLabels);
  }

  create() {
    const name = window.prompt('请输入标签名');
    if (!name) {return window.alert('标签名不能为空');}
    store.createLabel(name);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.label {
  background-color: white;
  flex-grow: 1;
  padding: 16px;
  font-size: 14px;
  display: flex;
  flex-direction: column-reverse;

  > .label-current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background-color: $color-assist;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      color: #333;
      margin-top: 6px;

      &.selected {
        background: $color-brand;
      }
    }
  }

  .label-new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid; /* 不设置颜色，其颜色会与字体颜色保持一致 */
      color: #333;
      padding: 0 4px;
    }
  }
}
</style>