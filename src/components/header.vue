<template>
  <b-navbar fixed="top" class="bg-blue" type="dark">
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
        <b-dropdown-item @click="$router.push('/privacyPolicy')"
          >Datenschutz</b-dropdown-item
        >
        <b-dropdown-item @click="$router.push('/impressum')">Impressum</b-dropdown-item>
        <b-dropdown-item @click="$router.push('/about')"
          >Über AZ-Rechner</b-dropdown-item
        >
      </b-dropdown>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.btn {
  border: unset !important;
  padding: unset !important;
}
.btn-secondary-new:hover {
  background-color: unset !important;
}
.btn-secondary-new {
  background-color: unset !important;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
  top: 100%;
}
</style>