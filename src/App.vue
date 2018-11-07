<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '../src/components/navbar.vue'
import offers from '../src/components/offers.vue'

export default {
  name: 'App',
  components: {
    navbar,
    offers
  }
}
</script>

<style>
html{
  margin: 0 auto;
  padding: 0;
  width: 100%;
}
body{
  margin: 0 auto;
  padding: 0;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
</style>
