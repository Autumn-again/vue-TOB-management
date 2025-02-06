<template>
    <div class="home">
        Vue 3
        <div class="home_index"></div>
    </div>
</template>
<script setup lang='ts'>
</script>
<style scoped lang="less">
.home {
    color: red;
    &_index {
        width: 200px;
        height: 50px;
        background: blue;
    }
}
</style>