<template>
    <div class="content">

        <div class="image">
            <img src="../assets/profile.jpg"/>
        </div>

        <div class="text">
            <h1>Christian Bodenbender</h1>

            <h2>Software Development with &#10084;</h2>
            <h2>in Marburg</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

.content {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

.text {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    flex-grow: 3;
}

.image {
    margin: 0 2em 0 2em;
    flex-grow: 1;
}

.image img {
    height: 12em;
    border-radius: 50%;
}

</style>