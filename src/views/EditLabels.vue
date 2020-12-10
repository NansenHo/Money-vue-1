<template>
  <layout>
    <div class="navBar">
      <Icon class="left-icon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="right-icon"></span>
    </div>
    <div class="remarks-wrapper">
      <Remarks :value="label.name"
               @update:value="update"
               field-name="标签名：" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {labelListModel} from '@/models/labelList-model';
import Remarks from '@/components/Money/Remarks.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, Remarks}
})
export default class EditLabels extends Vue {
  label?: { id: string, name: string } = undefined; // label 初始值为 undefined

  created() {
    const id = this.$route.params.id;
    labelListModel.fetch();
    const labels = labelListModel.data;
    const label = labels.filter(l => l.id === id)[0]; // filter 返回一个数组
    if (label) {
      this.label = label;
    } else {
      this.$router.replace('/404'); // 防止用户无法回退，不用 push 用 replace
    }
  }

  update(name: string) {
    if (this.label) {
      labelListModel.update(this.label.id, name);
    }
  }

  remove() {
    if (this.label) {
      if (labelListModel.remove(this.label.id)) {
        this.$router.back();
      } else {
        window.alert('删除失败');
      }
    }
  }

  goBack() {
    this.$router.back();
  }
}

</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .left-icon {
    width: 16px;
    height: 16px;
  }

  > .right-icon {
    width: 16px;
    height: 16px;
  }

  > .title {

  }
}

.remarks-wrapper {
  margin-top: 8px;
  background-color: white;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>