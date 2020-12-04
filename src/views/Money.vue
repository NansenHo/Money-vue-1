<template>
    <layout class-prefix="layout">
        <NumberPad @update:value="onUpdateAmount"/>
        <Remarks @update:value="onUpdateRemarks"/>
        <Label :value="record.type" :data-source.sync="labels" @update:value="onUpdateLabels"/>
        <Types :value.sync="record.type" />
    </layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Remarks from '@/components/Money/Remarks.vue';
    import Label from '@/components/Money/Label.vue';
    import {Component} from 'vue-property-decorator';

    type Record = { // ts 类型声明
        labels: string[],
        remarks: string,
        type: string,
        amount: number
    }

    @Component({
        components: {Label, Remarks, Types, NumberPad},
    })
    export default class Money extends Vue {
        labels = ['衣', '食', '住', '行', 'Subscribe'];

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
    };
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>