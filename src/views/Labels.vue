<template>
    <layout>
        <ol class="remarks">
            <li v-for="label in labels" :key="label.id">
              <span>{{label.name}}</span>
                <Icon name="right"/>
            </li>
        </ol>
        <div class="createLabel-wrapper">
            <button class="createLabel" @click="createLabel">新建标签</button>
        </div>
    </layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import {labelListModel} from '@/models/labelLIst-model';

    labelListModel.fetch();
    @Component
    export default class Labels extends Vue {
        labels = labelListModel.data;

        createLabel() {
            const name = window.prompt('请输入标签名');
            if (name) {
                const message = labelListModel.create(name);
                if(message === 'duplicated'){
                    window.alert('标签名重复了')
                }else{
                    window.alert('添加成功')
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .remarks {
        background-color: white;
        font-size: 16px;
        padding-left: 16px;

        > li {
            min-height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e6e6e6;

            svg {
                width: 16px;
                height: 16px;
                color: #666;
                margin-right: 16px;
            }
        }
    }

    .createLabel {
        background-color: rgb(174, 174, 174);
        color: white;
        border: none;
        border-radius: 4px;
        height: 40px;
        padding: 0 16px;

        &-wrapper {
            text-align: center;
            padding: 16px;
            margin-top: 44-16px;
        }
    }

</style>