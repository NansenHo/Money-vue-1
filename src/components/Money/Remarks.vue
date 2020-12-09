<template>
    <div>
        <label class="remarks">
            <span class="remarks-name">{{this.fieldName}}</span>
            <input type="text"
                   :value="value"
                   @input="onValueChange($event.target.value)"
                   placeholder="点击写备注..."
                   :placeholder="this.placeholder">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';

    @Component
    export default class Remarks extends Vue {
        @Prop({default: ''}) readonly value!: string

        @Prop({required: true}) fieldName!: string; // required: true 表示必填
        @Prop({default:''}) placeholder?: string; // ? 表示 placeholder 有可能不存在

        @Watch('value')
        onValueChange(value: string){
            this.$emit('update:value',value);
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .remarks {
        display: block;
        font-size: 14px;
        padding-left: 16px; /* 所有的高度用 input 来撑 */
        display: flex;
        align-items: center;

        .remarks-name {
          padding-right: 16px;
        }

        input {
            height: 40px;
            flex-grow: 1;
            background-color: transparent;
            border: none;
            padding-right: 16px;
        }
    }
</style>