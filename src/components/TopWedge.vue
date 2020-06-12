<template>
    <wedge>
        <div class="content">
            <!-- TODO add links to xing, linkedin, resume pdf? -->
            <div class="contact">
                <b-row>
                    <b-col lg="4" class="pb-2"><b-button size="sm">Small Button</b-button></b-col>
                    <b-col lg="4" class="pb-2"><b-button>Default Button</b-button></b-col>
                    <b-col lg="4" class="pb-2"><b-button size="lg">Large Button</b-button></b-col>
                </b-row>
            </div>
            <div class="avatar">

                <h1>Christian Bodenbender</h1>

                <img src="../assets/profile.jpg"/>

                <h2>Software Development with &#10084;</h2>
                <h2>in Marburg</h2>
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

    .content {
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
        padding-left: 60vw;
    }

    .avatar img {
        height: 8vw;
        border-radius: 50%;
    }
</style>