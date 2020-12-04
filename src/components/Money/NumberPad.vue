<template>
    <div class="number-pad">
        <div class="number-pad-output">{{output || '0.00'}}</div>
        <!-- 给一个保底值，不让输入框塌下去 -->
        <div class="number-pad-buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="remove">删除</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="clear">清空</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button @click="ok" class="ok">完成</button>
            <button class="zero" @click="inputContent">0</button>
            <button @click="inputContent">.</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class NumberPad extends Vue {
        output: string = '0.00';

        inputContent(event: MouseEvent) {
            const button = (event.target as HTMLButtonElement);
            const input = button.textContent as string;
            //OR const input = button.textContent! // 感叹号就是排除空，其他保留的意思
            if (this.output.length === 8) {
                return;
            }
            if (this.output === '0.00') {
                if ('0123456789'.indexOf(input) >= 0) {
                    this.output = input;
                } else {
                    this.output = '0.';
                }
                return;
            }
            if (this.output.indexOf('.') >= 0 && input === '.') {
                return;
            }
            this.output += input;
        }

        remove() {
            this.output = this.output.slice(0, -1);
        }

        clear() {
            this.output = this.output.substr(0, -1);
        }

        ok() {
            this.$emit('update:value', this.output);
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .number-pad {
        .number-pad-output {
            @extend %clearFix;
            @extend %innerShadow;
            font-size: 36px;
            font-family: Consolas, monospace; /* 先指定一个字体，如果用户电脑上没有该字体，就随便用一个等宽字体 */
            padding: 9px 16px;
            text-align: right;
        }

        .number-pad-buttons {
            > button {
                @extend %clearFix;
                width: 25%;
                height: 64px;
                float: left;
                background-color: transparent;
                border: none;

                &.ok {
                    height: 64px*2;
                    float: right;
                }

                &.zero {
                    width: 25%*2;
                }

                $bg: #f2f2f2;

                &:nth-child(1) {
                    background: $bg;
                }

                &:nth-child(2), &:nth-child(5) { /* 第二个和第五个 */
                    background-color: darken($bg, 4%); /* 每个都比 $bg 变暗 4% */
                }

                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background-color: darken($bg, 4*2%);
                }

                &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                    background-color: darken($bg, 4*3%);
                }

                &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                    background-color: darken($bg, 4*4%);
                }

                &:nth-child(14) {
                    background-color: darken($bg, 4*5%);
                }

                &:nth-child(12) {
                    background-color: darken($bg, 4*6%);
                }
            }
        }
    }
</style>