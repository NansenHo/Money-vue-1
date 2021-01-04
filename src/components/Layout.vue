<template>
    <div class="layout-wrapper">
        <div class="content" :class=" classPrefix && `${classPrefix}-content`"> <!-- 字符串要加上单引号，这里的双引号并不属于js ，只有单引号属于 -->
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        props: ['classPrefix'],
        name: 'Layout'
    };
</script>

<style lang="scss" scoped>
    .layout-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .content {
        overflow: auto;
        flex-grow: 1;
    }
</style>