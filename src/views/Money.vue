<template>
    <layout class-prefix="layout">
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <Remarks field-name="备注："
                 placeholder="点击写备注..."
                 @update:value="onUpdateRemarks"/>
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
    import {Component, Watch} from 'vue-property-decorator';
    import {recordListModel} from '@/models/recordList-model';
    import {labelListModel} from '@/models/labelList-model';

    const recordList = recordListModel.fetch();
    const labelList = labelListModel.fetch();

    @Component({
        components: {Label, Remarks, Types, NumberPad},
    })
    export default class Money extends Vue {
        labels = labelList;
        recordList: RecordItem[] = recordList;

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
            const record2: RecordItem = recordListModel.clone(this.record);
            record2.createdAt = new Date();
            this.recordList.push(record2);
        }

        @Watch('recordList')
        onRecordListChange() {
            recordListModel.save(this.recordList);
        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>