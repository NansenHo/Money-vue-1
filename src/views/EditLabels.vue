<template>
    <layout>
      <div>
        <Icon name="left" />
        <sp4an>编辑标签</sp4an>
      </div>
      <Remarks field-name="标签名：" placeholder="请输入标签名"/>
    </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {labelListModel} from '@/models/labelList-model';
import Remarks from '@/components/Money/Remarks.vue';
@Component({
  components: {Remarks}
})
export default class EditLabels extends Vue{
  created(){
    const id = this.$route.params.id;
    labelListModel.fetch();
    const labels = labelListModel.data;
    const label = labels.filter(l => l.id === id)[0] // filter 返回一个数组
    if(label){
      console.log(label)
    }else{
      this.$router.replace('/404') // 防止用户无法回退，不用 push 用 replace

    }
  }
}
</script>

<style lang="scss" scoped>

</style>