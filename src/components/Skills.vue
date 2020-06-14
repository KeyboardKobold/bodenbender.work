<template>
    <div class="content">
        <h2>Technical Skills</h2>

        <div class="skills">
            <div class="skill">
                <img height="40" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/java.svg" />
                <p>Java, JEE</p>
            </div>
            <div class="skill">

            </div>
        </div>

        <h2>Experience</h2>
        <div class="skills">
            <!-- stuff like agile, scrum, kanban etc, logoless text -->
            <!-- div class="skill">
                <img height="40" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/java.svg" />
                <p>Java</p>
            </div-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Skills"
    }
</script>

<style scoped>

.skills {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin: 2em 0 0 0;
}

.skill {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    font-size: 2em;
}

.skill img {
    flex-grow: 1;
}

.skill p {
    flex-grow: 8;
}

.skills >>> img{
    filter: invert(1);
}

h2 {
    text-decoration: underline;
}


</style>