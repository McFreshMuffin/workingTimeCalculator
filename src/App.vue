<template>
  <div id="app">
    <navbar/>
    <div id="main">
      <home/>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import Home from './views/Home.vue'
export default {
  name: 'App',
  components: {
    navbar,
    Home
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#main {
  top: 66px;
  position: relative;
  padding-top: 2%;
  width: 100%;
  height: calc(100% - 66px - 110px);
}

td {
  text-align: center;
  vertical-align: middle;
}

@media screen and (min-width: 768px) {
  #main {
    height: calc(100% - 66px - 86px);
  }
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* Hide arrows by input type=number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
