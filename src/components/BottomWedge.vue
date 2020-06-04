<template>
    <div class="shape">
        <div class="triangleUpper"></div>
        <div class="triangleLower"></div>
    </div>
</template>

<script>
    export default {
        name: "BottomWedge"
    }
</script>

<style scoped>
    .triangleUpper {
        width: 0;
        height: 0;
        border-top: 250px solid transparent;
        border-left: 100vw solid #344cd0;
        overflow:hidden;
    }

    .triangleLower {
        width: 0;
        height: 0;
        border-top: 250px solid #344cd0;
        border-left: 100vw solid transparent;
    }

</style>