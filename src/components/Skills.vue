<template>
    <div class="content">

        <div class="intro toplevel">
          <h2>Hi!</h2>
          <p>
            I am a software developer capable of writing and maintaining a wide array of software. <br>
            My main language is Java, although I have various experience in other programming languages. <br>
            I pride myself on writing code that is both testable and efficient, using modern technologies and best practices to deliver quality software. <br>
            Take a look at my skills below. <br>
            Interested? Don't hesitate to contact me using the socials linked above!
          </p>
        </div>

        <div class="skills toplevel">
          <h2>Professional Skills</h2>

          <div class="skills-table">
            <div class="skill-list">
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
            <div class="skill-list">
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

        <div class="work toplevel">
          <h2>Employment</h2>
          <p>Graduated <a href="https://www.thm.de/">TH Mittelhessen University of Applied Sciences</a> in March of 2019, attaining a Bachelor of Science in Computer Science.</p>
          <ul class="no-bullets">
            <li>
              <p>
                04/19 to today - Software Developer, Tallence AG<br>
                Development of software in customer projects and in products
              </p>
            </li>
            <li>
              <p>
                08/17 to 03/19 - Student Trainee Developer, IoT Analytics Real-time Insights, Software AG<br>
                Development of analytics software in the R&D IoT Analytics department
              </p>
            </li>
            <li>
              <p>
                10/15 to 08/17 - Student Developer, AG Softwaretechnik, Philipps-University-Marburg<br>
                Development and maintenance of the Eclipse plugin 'Henshin'
              </p>
            </li>
            <li>
              <p>
                04/12 to 07/13 - Student Developer, weclapp SE<br>
                Development of automated Test-Framework and expansion of several software instances
              </p>
            </li>
          </ul>
        </div>

        <div class="edu toplevel">
            <h2>Education</h2>
            <p>Graduated <a href="https://www.thm.de/">TH Mittelhessen University of Applied Sciences</a> in March of 2019, attaining a Bachelor of Science in Computer Science.</p>
        </div>

        <div class="preferences toplevel">
            <h2>My Preferences</h2>
            <ul>
                <li><p>Social: Teamwork</p></li>
                <li><p>Workflow: Agile</p></li>
                <li><p>OS: Linux or Windows 10 with WSL & WSL2</p></li>
                <li><p>CVS: Git</p></li>
                <li><p>CI/CD: GitLab CI</p></li>
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
    justify-content: flex-start;
}

.skill-list {
  margin: 1em 2em
}

.toplevel {
    margin: 2em 0 0 0;
}

h2 {
    align-content: flex-start;
    margin: 0 0 1em 0;
}

ul.no-bullets {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul.no-bullets > li {
  margin: 2em 2em;
}

</style>