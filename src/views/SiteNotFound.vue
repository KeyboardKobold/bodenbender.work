<template>
    <div class="content">
        <p class="code">404 Not Found</p>
        <p class="description">The site you were looking for was not found on this server.</p>
    </div>
</template>

<script>
    export default {
        name: "SiteNotFound"
    }
</script>

<style scoped>

.content {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 6em 0 6em 0;
}

.code {
    font-size: 5em;
}

.description {
    font-size: 2em;
}
</style>