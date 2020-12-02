<template>
    <div>
        <label class="remarks">
            <span class="remarks-name">备注：</span>
            <input type="text" :value="value"
                   @input="onInput"
                   placeholder="点击写备注...">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Remarks extends Vue {
        value: string = '';

        onInput(event: KeyboardEvent) {
            const input = event.target as HTMLInputElement;
            this.value = input.value;
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