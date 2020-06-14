<template>
  <div id="app">
    <Navigation id="navigation"/>
    <div id="content">
      <About id="about"/>
      <div id="panels">
        <Skills/>
        <Projects/>
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


</style>
