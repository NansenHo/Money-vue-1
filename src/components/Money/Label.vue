<template>
    <div class="label">
        <div class="label-new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="label-current">
            <li v-for="label in dataSource" :key="label"
                :class="{selected: selectedLabels.indexOf(label)>=0}"
                @click="select(label)">{{label}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component // @Component 可以省略括号；@Prop 不能省略括号
    export default class Label extends Vue {
        @Prop(Array) readonly dataSource: string[] | undefined; // :string[] 表明是一个字符串数组
        // 写 Array 是因为只能写全局的构造函数，别的 Vue & JS 不认识。只有冒号后面的 TS 部分才认识 string[]
        // 括号里也可以什么都不写
        selectedLabels: string[] = [];

        select(label: string) {
            const index = this.selectedLabels.indexOf(label);
            if (index > 0) {
                this.selectedLabels.splice(index, 1);
            } else {
                this.selectedLabels.push(label);
            }
            this.$emit('update:value', this.selectedLabels)
        }

        create() {
            const name = window.prompt('请输入标签名');
            if (name === '') {
                window.alert('标签名不能为空');
            } else {
                if(this.dataSource){
                    this.$emit('update:dataSource', [...this.dataSource, name])
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .label {
        flex-grow: 1;
        padding: 16px;
        font-size: 14px;
        display: flex;
        flex-direction: column-reverse;

        > .label-current {
            display: flex;
            flex-wrap: wrap;

            > li {
                background-color: $color-assist;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                color: #333;
                margin-top: 6px;

                &.selected {
                    background: $color-brand;
                }
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
</style>