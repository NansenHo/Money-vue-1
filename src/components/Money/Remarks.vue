<template>
    <div>
        <label class="remarks">
            <span class="remarks-name">备注：</span>
            <input type="text"
                   v-model="value"
                   placeholder="点击写备注...">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';

    @Component
    export default class Remarks extends Vue {
        value = '';
        @Watch('value')
        onValueChange(value: string){
            this.$emit('update:value',value);
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .remarks {
        background-color: $color-assist;
        display: block;
        font-size: 14px;
        padding-left: 16px; /* 所有的高度用 input 来撑 */
        display: flex;
        align-items: center;

        .remarks-name {
        }

        input {
            padding: 10px 0;
            flex-grow: 1;
            background-color: transparent;
            border: none;
            padding-right: 16px;
        }
    }
</style>