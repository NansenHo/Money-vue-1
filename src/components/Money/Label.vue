<template>
  <div class="label">
    <div class="label-new">
      <button @click="createLabel">新增标签</button>
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
import {Component} from 'vue-property-decorator';
import {mixins} from "vue-class-component";
import LabelHelper from "@/mixins/LabelHelper";

@Component
export default class Label extends mixins(LabelHelper) {
  selectedLabels: string[] = [];

  get labelList(){
    return this.$store.state.labelList;
  }

  created() {
    this.$store.commit('fetchLabels');
  }

  toggle(label: string) {
    const index = this.selectedLabels.indexOf(label);
    if (index >= 0) {
      this.selectedLabels.splice(index, 1);
    } else {
      this.selectedLabels.push(label);
    }
    this.$emit('update:value', this.selectedLabels);
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