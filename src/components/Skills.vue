<template>
    <div class="content">

        <div class="edu toplevel">
            <h2>Education</h2>
            <p>Graduated <a href="https://www.thm.de/">TH Mittelhessen University of Applied Sciences</a> in March of 2019, attaining a Bachelor of Science in Computer Science.</p>
        </div>

        <div class="skills toplevel">
            <h2>Professional Skills</h2>

            <div class="skills-table">
                <div class="prog">
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>Java, JEE</li>
                        <li>Kotlin</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>Basic</li>
                        <li>SQL</li>
                        <li>Javascript</li>
                        <li>HTML/CSS</li>
                    </ul>
                </div>
                <div class="frame">
                    <h3>Frameworks and Tooling</h3>
                    <ul>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>GitLab CI/CD</li>
                        <li>Maven</li>
                        <li>Gradle</li>
                        <li>Git</li>
                        <li>Perforce</li>
                        <li>Vertx</li>
                        <li>MongoDB</li>
                        <li>MySQL, PostgreSQL</li>
                        <li>VueJS</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="preferences toplevel">
            <h2>My Preferences</h2>
            <ul>
                <li><p>Workflow: Agile</p></li>
                <li><p>OS: Linux or Windows 10 with WSL</p></li>
                <li><p>CVS: Git</p></li>
                <li><p>CI/CD: GitLab</p></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Skills"
    }
</script>

<style scoped>

.content {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    margin: 0 15% 3em 15%;
}

.skills-table {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}

.toplevel {
    margin: 2em 0 0 0;
}

h2 {
    align-content: flex-start;
    margin: 0 0 1em 0;
}

</style>