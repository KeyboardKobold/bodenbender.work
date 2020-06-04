<template>
  <div id="app">
    <CV/>
  </div>
</template>

<script>
import CV from "@/components/CV";

export default {
  name: 'App',
  components: {
    CV,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
