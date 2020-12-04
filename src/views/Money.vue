<template>
    <layout class-prefix="layout">
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <Remarks @update:value="onUpdateRemarks"/>
        <Label :value="record.type" :data-source.sync="labels" @update:value="onUpdateLabels"/>
        <Types :value.sync="record.type"/>
        {{recordList}}
    </layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Remarks from '@/components/Money/Remarks.vue';
    import Label from '@/components/Money/Label.vue';
    import {Component, Watch} from 'vue-property-decorator';

    window.localStorage.setItem('version', '0.0.1'); // 数据库版本

    type Record = { // ts 类型声明
        labels: string[],
        remarks: string,
        type: string,
        amount: number,
        createdAt?: Date
        //OR createdAt: Date | undefined
    }

    @Component({
        components: {Label, Remarks, Types, NumberPad},
    })
    export default class Money extends Vue {
        labels = ['衣', '食', '住', '行', 'Subscribe'];
        recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

        record: Record = {labels: [], remarks: '', type: '-', amount: 0};

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
            const record2: Record = JSON.parse(JSON.stringify(this.record));
            record2.createdAt = new Date();
            this.recordList.push(record2);
        }

        @Watch('recordList')
        onRecordListChange() {
            window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>