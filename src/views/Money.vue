<template>
  <layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Remarks field-name="备注："
             placeholder="点击写备注..."
             @update:value="onUpdateRemarks"
    />
    <Label :value="record.type" :data-source.sync="labels" @update:value="onUpdateLabels"/>
    <Types :value.sync="record.type"/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Remarks from '@/components/Money/Remarks.vue';
import Label from '@/components/Money/Label.vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index2';

@Component({
  components: {Label, Remarks, Types, NumberPad},
})
export default class Money extends Vue {
  labels = store.labelList;
  recordList = store.recordList;

  record: RecordItem = {labels: [], remarks: '', type: '-', amount: 0};

  onUpdateLabels(value: string[]) {
    this.record.labels = value;
  }

  onUpdateRemarks(value: string) {
    this.record.remarks = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    store.createRecord(this.record);
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>