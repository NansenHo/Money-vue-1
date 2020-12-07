<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "~@/assets/style/helper.scss";
    @import "~@/assets/style/reset.scss";
    body {
    }
    #app {
        /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        line-height: 1.5; /* 默认行高 */
        font-size: 16px;
        font-family: $font-hei;
        background-color: rgb(245,245,245);
    }
</style>
