<template>
  <div id="app">
    <div id="content">
      <Navigation class="navigation"></Navigation>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: 'App',
  components: {
    Navigation,
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #272727;
}

.navigation {

}

</style>
