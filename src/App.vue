<template>
  <div id="app">
    <Navigation id="navigation"/>
    <div id="content">
      <router-view></router-view>
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
  background-color: #1A1A1A;
  min-height: 100vh;
  color: #fff;
  padding: 0 0 5em 0;
}

#content {
  margin: 0 15% 0 15%;
  background-color: #272727;
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
