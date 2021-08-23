<template>
    <div class="content">
        <h1>Imprint</h1>

        <div class="contact">
            <h2>Contact</h2>
            <p>Christian Bodenbender</p>
            <p>Hinterfeld 18, D-35043 Marburg</p>
            <p>Contact can be established via email to <a class="mail" href="mailto:bodenbender@protonmail.com">bodenbender at protonmail.com</a></p>
        </div>

        <div class="tech">
            <h2>Technical Details</h2>
            <br>
            <h3>Source</h3>
            <p>Source code of this site is available on <a href="https://github.com/KeyboardKobold/bodenbender.work">GitHub</a>.</p>

            <h3>Cookie Policy</h3>
            <p>This website currently makes no use of cookies.</p>

            <h3>License Information</h3>
            <p>This website makes use of:</p>
            <ul>
                <li>Vue.js licensed under MIT</li>
                <li>core-js licensed under MIT</li>
                <li>BootstrapVue licensed under MIT</li>
                <li>vue-router licensed under MIT</li>
                <li>simpleicons.org licensed under CC0</li>
            </ul>
            <a href="https://opensource.org/licenses/MIT">MIT License Information</a>.
        </div>
    </div>
</template>

<script>
    export default {
        name: "Imprint"
    }
</script>

<style scoped>

.content {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    padding: 5em 10em 2em 10em;
}

.contact {
    margin: 2em 0 0 2em;
}

.tech {
    margin: 2em 0 0 2em;
}

p {
    margin: 1em 0 1em 2em;
}

ul {
    margin: 1em 0 1em 2em;
}

h1 {
    text-decoration: underline;
}

@media screen and (max-width: 1024px) {
    .content {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        padding: 5em 1em 2em 1em;
        text-align: center;
    }

    .contact {
        margin: 0;
    }

    .tech {
        margin: 0;
    }

    p {
        margin: 0 0 2em 0;
    }

    ul {
        margin: 0;
    }

    h1 {
        margin: 1em 0 1em 0;
    }
}

</style>