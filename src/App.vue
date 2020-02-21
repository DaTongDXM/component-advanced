<template>
  <div id="app">
    <img src="./assets/logo.png">
     <router-link to="/form">form</router-link>
    <router-link to="/checkbox">checkbox</router-link>
    <router-view/>
  </div>
</template>

<script>
import Emiter from './assets/js/emiter.js'
export default {
  name: 'App',
  mixins: [Emiter]
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
