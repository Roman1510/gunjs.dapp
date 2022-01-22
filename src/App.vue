<template>
  <div class="app">
    <Header />
    <Chat />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Chat from './components/Chat.vue'
export default {
  name: 'App',
  components: {
    Header,
    Chat
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
}
</style>
