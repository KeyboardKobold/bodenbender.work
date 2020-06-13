<template>
  <div id="app">
    <Navigation id="navigation"/>
    <div id="content">
      <About id="about"/>
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
import About from "@/components/About";

export default {
  name: 'App',
  components: {
    About,
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
  color: #fff;
}

#content {
  margin: 0 15% 0 15%;
}

#about {
  margin: 2em 10% 2em 10%;
}

#panels {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

#panels *{
  size: auto;
  border: 1px solid;
  border-color: black;
  flex-grow: 1;
  flex-basis: 0;
}


</style>
