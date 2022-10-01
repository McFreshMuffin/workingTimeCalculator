<template>
  <div class="navbar items-center justify-center">
    <router-link to="/" class="text-white text-xl ml-6">Arbeitszeiten Rechner</router-link>
    <div class="ml-auto mr-7 text-2xl" @click="document.getElementById('overlayMenu').style.display = 'block'"><i class="fas fa-ellipsis-vertical"></i></div>
    <div id="overlayMenu" class="hidden fixed right-3 bg-white text-black p-3 overlay-top rounded-md">
      <ul class="flex flex-col items-start">
        <li><router-link to="about">Über AZ-Rechner</router-link></li>
        <li><router-link to="setting">Einstellungen</router-link></li>
        <li><router-link to="privacyPolicy">Datenschutz</router-link></li>
        <li><router-link to="impressum">Impressum</router-link></li>
      </ul>
    </div>
  </div>
  <!-- <b-navbar fixed="top" class="bg-blue" type="dark">
    <b-navbar-brand class="ml-5" href="/">Arbeitszeiten Rechner</b-navbar-brand>
    <div class="ml-auto mr-3">
      <b-dropdown
        no-caret
        right
        class="m-0 p-0 w-8 bg-blue"
        toggle-class="btn-secondary-new"
      >
        <template #button-content>
          <b-icon
            icon="three-dots-vertical"
            class="w-6 h-6 text-white bg-blue"
          ></b-icon>
        </template>
        <b-dropdown-item @click="$router.push('/about')"
          >Über AZ-Rechner</b-dropdown-item
        >
        <b-dropdown-item @click="$router.push('/settings')">Einstellungen</b-dropdown-item>
        <b-dropdown-item @click="$router.push('/privacyPolicy')"
          >Datenschutz</b-dropdown-item
        >
        <b-dropdown-item @click="$router.push('/impressum')"
          >Impressum</b-dropdown-item
        >
      </b-dropdown>
    </div>
  </b-navbar> -->
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      displayMenu: 'hidden'
    }
  }
};
</script>

<style>
.navbar {
  display: flex;
  /* position: fixed; */
  top: 0px;
  left: 0px;
  right: 0px;
  /* padding-top: 8px;
  padding-bottom: 8px; */
  height: 56px;
  background: #00669b;
}
.overlay-top {
  top: 45px;
}
.btn-secondary-new:hover {
  background-color: unset !important;
}
.btn-secondary-new {
  background-color: unset !important;
  border: unset !important;
  padding: unset !important;
  background-color: #00669b !important;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
  top: 100%;
}
</style>