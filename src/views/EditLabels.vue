<template>
  <layout>
    <div class="navBar">
      <Icon class="left-icon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="right-icon"/>
    </div>
    <div class="remarks-wrapper">
      <Remarks :value="currentLabel.name"
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
import Remarks from '@/components/Money/Remarks.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, Remarks}
})
export default class EditLabels extends Vue {
  get currentLabel() {
    return this.$store.state.currentLabel;
  }

  created() {
    const id = this.$route.params.id;
    // console.log(id);
    this.$store.commit('fetchLabels');
    this.$store.commit('setCurrentLabel', id);
    if (!this.currentLabel) {
      // console.log('no tag');
      this.$router.replace('/404'); // 防止用户无法回退，不用 push 用 replace
    }else{
      // console.log('has tag');
    }
  }

  update(name: string) {
    // console.log(name);
    if (this.currentLabel) {
      if (this.currentLabel) {
        this.$store.commit('updateLabel', {
          id: this.currentLabel.id, name
        });
      }
    }
  }

  remove() {
    console.log('remove')
    if (this.currentLabel) {
      this.$store.commit('removeLabel', this.currentLabel.id);
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