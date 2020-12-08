<template>
    <layout>
      编辑标签
    </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class EditLabels extends Vue{
  created(){
    console.log(this.$route.params);
  }
}
</script>

<style lang="scss" scoped>

</style>