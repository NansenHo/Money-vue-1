<template>
    <div class="number-pad">
        <div class="number-pad-output">100</div>
        <div class="number-pad-buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="ok">ok</button>
            <button class="zero">0</button>
            <button>.</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'NumberPad'
    };
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