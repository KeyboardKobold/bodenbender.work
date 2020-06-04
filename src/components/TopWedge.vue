<template>
    <wedge>
        <div class="header">
            <div class="content">
                <h1>Curriculum Vitae of Christian Bodenbender</h1>

                <img src="../assets/profile.jpg" class="avatar"/>

                <h2>Software Development with &#10084;</h2>
            </div>
        </div>
        <div class="triangleLower"></div>
    </wedge>
</template>

<script>
    export default {
        name: "TopWedge"
    }
</script>

<style scoped>

    .header {
        background-color: #000000;
        color: white;
    }

    h1 {
        padding: 60px 0 0 0;
    }

    h2 {
        margin: 20px 0 0 0;
    }

    .triangleLower {
        width: 0;
        height: 0;
        border-top: 150px solid #000000;
        border-left: 100vw solid transparent;
    }

    .avatar {
        height: 10vw;
        border-radius: 50%;
    }

    .content {
        padding-left: 60vw;
    }


</style>