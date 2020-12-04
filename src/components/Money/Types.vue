<template>
    <div>
        <ul class="types">
            <li :class="value === '-' && 'selected'"
                @click="selectType('-')">支出
            </li>
            <!-- 如果 type 等于 - ，那 class 为 selected -->
            <li :class="value === '+' && 'selected'"
                @click="selectType('+')">收入
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator'; // 尽管这个库不是 Vue 官方的 TS 支持库，但这个库更好用。
    @Component // 装饰器（@ 开头的） @Component帮我做一些必要的处理，就是我们比 js 少写的那些部分
    export default class Types extends Vue {
        @Prop() readonly value!: string;

        // - 表示支出，+ 表示收入
        selectType(type: string) { // type 只能是 - 或者 + ，要说明 type 的类型，写好参数的类型
            if (type !== '-' && type !== '+') {
                throw new Error('type is unknown');
            }
            this.$emit('update:value', type);
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .types {
        background-color: $color-brand;
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