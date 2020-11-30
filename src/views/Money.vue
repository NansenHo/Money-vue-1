<template>
    <layout>
        <div>
            <ul class="types">
                <li class="selected">支出</li>
                <li class="">收入</li>
            </ul>
        </div>
        <div class="label">
            <ul class="label-current">
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ul>
            <div class="label-new">
                <button>新增标签</button>
            </div>
        </div>
        <div>
            <label class="remarks">
                <span class="remarks-name">备注：</span>
                <input type="text" placeholder="点击写备注...">
            </label>
        </div>
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
                <button>-</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button class="ok">ok</button>
                <button>0</button>
                <button>.</button>
            </div>
        </div>
    </layout>
</template>

<script lang="ts">
    export default {
        name: 'Money',
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .types {
        background-color: $color-highlight;
        display: flex;
        text-align: center;
        flex-direction: row;
        font-size: 24px;
        > li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &.selected{
                /* border-bottom: 4px solid; 不能用 border 因为会影响字所占的空间 */
                &::after{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background-color: #333333;
                }
            }
        }
        > button {

        }
    }

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

    .label {
        padding: 16px;
        font-size: 14px;

        > .label-current {

            display: flex;

            > li {
                background-color: $color-assist;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                color: #333;
            }
        }

        .label-new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                border-bottom: 1px solid; /* 不设置颜色，其颜色会与字体颜色保持一致 */
                color: #333;
                padding: 0 4px;
            }
        }
    }

    .number-pad{
        .number-pad-output{
            font-size: 36px;
            font-family: Consolas, monospace; /* 先指定一个字体，如果用户电脑上没有该字体，就随便用一个等宽字体 */
            padding: 9px 16px;
            text-align: right;
        }
        .number-pad-buttons{
            display: flex;
            flex-wrap: wrap;
            > button{
                width: 25%;
                height: 64px;
            }
        }
    }
</style>