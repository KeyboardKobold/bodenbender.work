<template>
    <div class="content">
        <!-- TODO add sidebar links for xing, linkedin, resume pdf, other webapps -->
        <div class="left-nav">
            <ul>
                <a class="github" href="https://github.com/KeyboardKobold">
                    <img height="26" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/github.svg" />
                </a>
                <a class="gitlab" href="https://gitlab.com/KeyboardKobold">
                    <img height="26" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/gitlab.svg" />
                </a>
                <a class="linkedin" href="https://www.linkedin.com/in/christianbodenbender">
                    <img height="26" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/linkedin.svg" />
                </a>
                <a class="xing" href="https://www.xing.com/profile/Christian_Bodenbender">
                    <img height="26" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/xing.svg" />
                </a>

                <b-button class="cv" size="sm" variant="outline-light" disabled >Resumé</b-button>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

.left-nav {
    padding: 5px 0 5px 5px;
    display: flex;
    justify-content: flex-start;
}

.left-nav * {
    margin: 5px;
}

.left-nav >>> img{
    filter: invert(1);
}

</style>