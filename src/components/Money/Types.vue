<template>
    <div>
        <ul class="types">
            <li :class="type === '-' && 'selected'"
                @click="selectType('-')">支出
            </li>
            <!-- 如果 type 等于 - ，那 class 为 selected -->
            <li :class="type === '+' && 'selected'"
                @click="selectType('+')">收入
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator'; // 尽管这个库不是 Vue 官方的 TS 支持库，但这个库更好用。
    @Component // 装饰器（@ 开头的） @Component帮我做一些必要的处理，就是我们比 js 少写的那些部分
    export default class Types extends Vue {
        type: string = '-'; // - 表示支出，+ 表示收入
        // 我们在 js 里写的赋值语句，在 ts 里面直接写就会自动变成实例的属性。

        selectType(type: string) { // type 只能是 - 或者 + ，要说明 type 的类型，写好参数的类型
            if (type !== '-' && type !== '+') {
                throw new Error('type is unknown');
            }
            this.type = type;
            // 没有写 return ，那返回值就是 undefined ，ts 也知道
        }
    }
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

            &.selected {
                /* border-bottom: 4px solid; 不能用 border 因为会影响字所占的空间 */
                &::after {
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
</style>