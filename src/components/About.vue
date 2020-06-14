<template>
    <div class="content">
        <div class="image">
            <img src="../assets/profile.jpg"/>
        </div>

        <div class="text">
            <h1>Christian Bodenbender</h1>

            <h2>Software Development with &#10084;</h2>
            <h2 class="center">in Marburg</h2>
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
    padding: 5em 10em 2em 10em;
}

.text {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin: 0 3em 0 3em;
}

.image {
    margin: 0 3em 0 3em;
}

.image img {
    height: 12em;
    border-radius: 50%;
}

.center {
    text-align: center;
}

@media screen and (max-width: 720px) {
    .content {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        padding: 5em 1em 2em 1em;
        text-align: center;
    }

    .image img {
        height: 70vw;
        border-radius: 50%;
        margin: 0 0 2em 0;
    }
}

</style>