<template>
  <layout>
    <div class="remarks">
      <router-link class="label"
                   v-for="label in labels" :key="label.id"
                   :to="`/labels/edit/${label.id}`">
        <span>{{ label.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createLabel-wrapper">
      <Button class="createLabel" @click="createLabel">新建标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import {mixins} from "vue-class-component";
import LabelHelper from "@/mixins/LabelHelper";

@Component({
  components: {Button},
  computed: {
    labels() {
      return this.$store.state.labelList;
    }
  }
})
export default class Labels extends mixins(LabelHelper) {
  beforeCreate() {
    this.$store.commit('fetchLabels')
  }
}
</script>

<style lang="scss" scoped>
.remarks {
  background-color: white;
  font-size: 16px;
  padding-left: 16px;
  margin: 3%;

  > .label {
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 16px;
      height: 16px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createLabel {
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