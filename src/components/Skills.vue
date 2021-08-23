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
              <h3>Languages</h3>
              <ul>
                <li>Java</li>
                <li>Kotlin</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div class="skill-list">
              <h3>Development environments</h3>
              <ul>
                <li>IntelliJ</li>
                <li>Eclipse</li>
                <li>PyCharm</li>
                <li>Visual Studio Code</li>
                <li>Vim</li>
                <li>Notepad++</li>
                <li>WebStorm</li>
              </ul>
            </div>
            <div class="skill-list">
              <h3>VCS</h3>
              <ul>
                <li>Git</li>
                <li>SVN</li>
                <li>Perforce</li>
              </ul>
            </div>
            <div class="skill-list">
              <h3>Tooling</h3>
              <ul>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Maven</li>
                <li>Gradle</li>
                <li>Gitlab CI</li>
                <li>Jenkins</li>
                <li>WSL</li>
                <li>WSL2</li>
              </ul>
            </div>
            <div class="skill-list">
              <h3>Others</h3>
              <ul>
                <li>NoSQL</li>
                <li>JUnit</li>
                <li>VertX</li>
                <li>Testcontainers</li>
                <li>WebDriver</li>
                <li>JSON</li>
                <li>HTML</li>
                <li>XML</li>
                <li>Postman</li>
                <li>VueJS</li>
                <li>AWS</li>
                <li>Azure</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="work toplevel">
          <h2>Employment History</h2>
          <ul class="no-bullets">
            <li>
              <p>
                04/19 to today - Software Developer, <a href="https://tallence.com/">Tallence AG</a><br>
                Development of software in customer projects and in products
              </p>
            </li>
            <li>
              <p>
                08/17 to 03/19 - Student Trainee Developer, IoT Analytics Real-time Insights, <a href="https://www.softwareag.com/">Software AG</a><br>
                Development of analytics software in the R&D IoT Analytics department
              </p>
            </li>
            <li>
              <p>
                10/15 to 08/17 - Student Developer, AG Softwaretechnik, <a href="https://www.uni-marburg.de/en">Philipps-University-Marburg</a><br>
                Development and maintenance of the Eclipse plugin 'Henshin'
              </p>
            </li>
            <li>
              <p>
                04/12 to 07/13 - Student Developer, <a href="https://www.weclapp.com/en/">weclapp SE</a><br>
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