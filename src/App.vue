<template>
  <div id="app">
    <Navigation id="navigation"/>
    <div id="content">
      <About id="about"/>
      <hr>
      <div id="panels">
        <Skills/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default {
  name: 'App',
  components: {
    About,
    Skills,
    Navigation,
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1A1A1A;
  min-height: 100vh;
  color: #fff;
}

#content {
  margin: 0 15% 0 15%;
  background-color: #272727;
}

#panels {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
}

#navigation {
  background-color: #14A76C;
}

hr {
  height: 1px;
  width: 80%;
  color: #747474;
  background-color: #747474;
}


</style>
