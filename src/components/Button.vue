<template>
  <button class="button"
          @click="$emit('click', $event)">
    <!--  button 被点击了 就触发 Button 的点击事件  -->
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class Button extends Vue{

}
</script>

<style lang="scss" scoped>
.button {
  background-color: rgb(174, 174, 174);
  color: white;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>