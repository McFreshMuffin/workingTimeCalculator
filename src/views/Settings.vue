<template>
  <div class="settings">
    <div class="font-bold text-xl mt-3 underline">Einstellungen</div>
    <div class="mt-2 flex flex-col">
      <div class="text-justify centered"></div>
      <div
        class="flex flex-row justify-center items-center"
        v-b-tooltip:hover
        title="Stellen Sie hier ein, ob Ihre eingegebenen Werte für zukünftige
        Berechnungen bereitstehen sollen."
      >
        <input
          class=""
          type="checkbox"
          @click="setStatus"
          v-model="valuesSaveStatus"
        />
        <div class="ml-2">Daten auf Endgerät speichern</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      valuesSaveStatus: false,
    };
  },
  beforeMount() {
    this.valuesSaveStatus = this.$store.state.valuesSaveStatus;
  },
  methods: {
    setStatus: function () {
      this.$store.commit("setValuesSaveStatus", !this.valuesSaveStatus);
    },
  },
};
</script>
<style scoped>
input[type="checkbox"] {
  -ms-transform: scale(1.3); /* IE */
  -moz-transform: scale(1.3); /* FF */
  -webkit-transform: scale(1.3); /* Safari and Chrome */
  -o-transform: scale(1.3); /* Opera */
  transform: scale(1.3);
}
.centered {
  margin-right: 10%;
  margin-left: 10%;
}
</style>