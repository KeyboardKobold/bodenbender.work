<template>
    <div class="content">
        <TopWedge/>
        <Experience/>
        <Projects/>
        <Education/>
        <Skills/>
        <Contact/>
    </div>
</template>

<script>
    import Experience from "@/components/Experience";
    import Projects from "@/components/Projects";
    import Education from "@/components/Education";
    import Skills from "@/components/Skills";
    import Contact from "@/components/Contact";
    import TopWedge from "@/components/TopWedge";
    export default {
        name: "CV",
        components: {TopWedge, Contact, Skills, Education, Projects, Experience}
    }
</script>

<style scoped>

</style>