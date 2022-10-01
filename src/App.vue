<template>
  <div id="app">
    <Header />
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  background-color: #2c3e50;
  color: white;
  margin: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#main {
  top: 56px;
  position: relative;
  padding-top: 1.5%;
  width: 100%;
  height: calc(100% - 56px);
}

/* td {
  text-align: center;
  vertical-align: middle;
} */

@media screen and (min-width: 768px) {
  #main {
    height: calc(100% - 56px);
  }
}

/* Hide arrows by input type=number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

/* Overwriting CSS from table-Element from BootstrapVue Table */
.white {
  color: white !important;
}
</style>
