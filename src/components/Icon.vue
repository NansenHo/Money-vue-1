<template>
    <svg class="icon" @click="$emit('click', $event)">
        <use v-bind:xlink:href="'#'+ name"/>
    </svg>
</template>

<script lang="ts">
    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {
        importAll(require.context('../assets/icons', true, /\.svg$/)); // context 指定要去哪个目录
    } catch (error) {
        console.log(error);
    }
    // 可以实现将任意文件中的同一后缀的文件引入
    // 加上 try catch
    export default {
        props: ['name'],
        name: 'Icon'
    };
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>