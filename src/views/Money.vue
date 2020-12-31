<template>
  <layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Remarks field-name="备注："
             placeholder="点击写备注..."
             @update:value="onUpdateRemarks"
    />
    <Label/>
    <Tabs class-prefix="types"
          :data-source="recordTypeList"
          :value.sync="record.type" />
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Remarks from '@/components/Money/Remarks.vue';
import Label from '@/components/Money/Label.vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';
// import store2 from '@/store/index2';
//
// console.log(store === store2);

@Component({
  components: {Label, Remarks, NumberPad, Tabs},
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;

  record: RecordItem = {labels: [], remarks: '', type: '-', amount: 0};

  created() {
    this.$store.commit('fetchRecords');
  }

  onUpdateRemarks(value: string) {
    this.record.remarks = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
  }
}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>