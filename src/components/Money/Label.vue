<template>
    <div class="label">
        <div class="label-new">
            <button>新增标签</button>
        </div>
        <ul class="label-current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Label'
    };
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