<template>
    <div class="nav-wrapper">
        <div class="content">
            the Dog named Money
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Money',
    };
</script>

<style lang="scss" scoped>
    .nav-wrapper{
        border: 1px solid green;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        overflow: auto;
        /*
        content 内容过多会自己变成滚动，
        这样，即使 content 里内容很多，但其高度也始终 = 100vh - nav 的高度
        */
        flex-grow: 1;
    }
</style>