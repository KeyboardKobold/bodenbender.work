<template>
    <div class="content">
        <div class="left-nav">
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
            <a class="mail" href="mailto:christian@bodenbender.work">
                <img height="26" src="https://cdn.jsdelivr.net/npm/simple-icons@v2/icons/mail-dot-ru.svg" />
            </a>
            <b-button class="cv" size="sm" variant="outline-light" disabled >Resumé</b-button>
        </div>
        <div class="right-nav">
            <b-button class="home" size="sm" variant="outline-light" :to="{ name: 'home'}">Home</b-button>
            <b-button class="legal" size="sm" variant="outline-light" :to="{ name: 'imprint'}">Imprint</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
    }
</script>

<style scoped>

.content {
    display: flex;
    justify-content: space-between;
}

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

.right-nav {
    padding: 5px 0 5px 5px;
    display: flex;
    justify-content: flex-end;
}

.right-nav * {
    margin: 5px;
}

.right-nav >>> .router-link-exact-active {
    display: none;
}

.cv {
    display: none;
}

</style>