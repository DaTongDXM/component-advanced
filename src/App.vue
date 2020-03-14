<template>
  <div id="app">

    <router-link to="/form">Form</router-link>
    <router-link to="/checkbox">Checkbox</router-link>
    <router-link to="/display">Display</router-link>
    <router-link to="/alert">Alert</router-link>
    <router-link to="/table-render">Table-render</router-link>
    <router-link to="/table-slot">Table-slot</router-link>
    <router-link to="/tree-index">Tree</router-link>
    <router-link to="/other">Other</router-link>

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
