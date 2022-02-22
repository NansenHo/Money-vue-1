<template>
    <nav>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="labels"/>
            标签
        </router-link>
        <router-link to="/money" class="item money" active-class="selected"> <!-- router 并不是一个标签，所以我们添加一个类来给其加CSS -->
            <Icon name="money"/>
            记账
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics"/>
            统计
        </router-link>
    </nav>
</template>

<script lang="ts">
    export default {
        name: 'Nav'
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    nav {
        @extend %outerShadow;
        display: flex;
        flex-direction: row;
        font-size: 12px;

        > .item { /* SCSS 的写法 */
            padding: 2px 0;
            width: 33.33333%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .icon {
                width: 32px;
                height: 32px;
            }
        }

        > .item.selected {
            .icon {
                color: $color-brand;
            }
        }

    }


</style>