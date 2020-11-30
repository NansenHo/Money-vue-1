<template>
    <nav> <!-- <div class="nav"> 错！ <nav> 对！ -->
        <router-link to="/money" class="item"> <!-- router 并不是一个标签，所以我们添加一个类来给其加CSS -->
            <Icon name="money"/>
            记账
        </router-link>
        <router-link to="/labels" class="item">
            <Icon name="labels"/>
            标签
        </router-link>
        <router-link to="/statistics" class="item">
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
    nav {
        display: flex;
        box-shadow: 0 0 3px rgba(0,0,0,0.25);
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


    }


</style>