<template>
    <div id="content">
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

</style>