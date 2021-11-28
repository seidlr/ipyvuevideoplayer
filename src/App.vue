<template>
  <div id="app">
    <VueVideoPlayer/>
  </div>
</template>

<script>

// import Player from './components/Player2.vue' 
import VueVideoPlayer from './components/Player.vue' 

export default {
  name: 'App',
  components: {
    VueVideoPlayer
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
  margin-top: 60px;
}
</style>
