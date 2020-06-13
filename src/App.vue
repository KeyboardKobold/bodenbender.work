<template>
  <div id="app">
    <div id="content">
      <Navigation/>
      <div id="panels">
        <Skills/>
        <Projects/>
        <!-- Demos-->
        <div/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default {
  name: 'App',
  components: {
    Projects,
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
  text-align: center;
  background-color: #272727;
}

#panels {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  margin: 0 20% 0 20%;
}

#panels *{
  size: auto;
  border: 1px solid;
  border-color: black;
  flex-grow: 1;
  flex-basis: 0;
}


</style>
