<template>
    <div class="content">
        <About id="about"/>
        <hr>
        <div id="panels">
            <Skills/>
        </div>
    </div>
</template>

<script>
    import About from "@/components/About";
    import Skills from "@/components/Skills";
    export default {
        name: "Home",
        components: {Skills, About}
    }
</script>

<style scoped>

    #panels {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
    }

</style>