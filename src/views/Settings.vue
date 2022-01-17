<template>
  <div class="settings mx-10">
    <div class="font-bold text-xl mt-3 mb-3 underline">Einstellungen</div>
    <div class="flex flex-col">
      <div>
        <div class="mt-2 mb-2 font-bold">Datenspeicherung</div>
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
      <!-- -->
      <div class="h-px bg-white w-full my-3"></div>
      <div>
        <div class="mt-2 mb-2 font-bold">Zeit-Formate</div>
        <div
          class="flex flex-row justify-center items-center"
          v-b-tooltip:hover
          title="Stellen Sie hier ein, ob in der Tabelle das Zeitformat (hh:mm) anstatt des Dezimalformates verwendet werden soll."
        >
          <input
            class=""
            type="checkbox"
            @click="changeTimeFormat('tableTimeFormat')"
            v-model="useTimeFormat.tableTimeFormat"
          />
          <div class="ml-2">
            Zeitformat (hh:mm) für die Tabellen-Anzeige verwenden
          </div>
        </div>
        <div
          class="flex flex-row justify-center items-center"
          v-b-tooltip:hover
          title="Verwenden Sie standardmäßig das Zeitformat für die Eingabe der aktuellen Überstunden."
        >
          <input
            class=""
            type="checkbox"
            @click="changeTimeFormat('actualOvertimeTimeFormat')"
            v-model="useTimeFormat.actualOvertimeTimeFormat"
          />
          <div class="ml-2">
            Zeitformat (hh:mm) für die aktuellen Überstunden verwenden
          </div>
        </div>
        <div
          class="flex flex-row justify-center items-center"
          v-b-tooltip:hover
          title="Verwenden Sie standardmäßig das Zeitformat für die Eingabe der Pause."
        >
          <input
            class=""
            type="checkbox"
            @click="changeTimeFormat('pauseTimeFormat')"
            v-model="fPauseTimeFormat"
          />
          <div class="ml-2">
            Zeitformat (hh:mm) für die Pausenzeit verwenden
          </div>
        </div>
        <div
          class="flex flex-row justify-center items-center"
          v-b-tooltip:hover
          title="Verwenden Sie standardmäßig das Zeitformat für die Eingabe der gewünschten Überstunden."
        >
          <input
            class=""
            type="checkbox"
            @click="changeTimeFormat('overTimeTimeFormat')"
            v-model="useTimeFormat.overTimeTimeFormat"
          />
          <div class="ml-2">
            Zeitformat (hh:mm) für die gewünschten Überstunden verwenden
          </div>
        </div>
      </div>
      <!-- -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      valuesSaveStatus: false,
      useTimeFormat: {
        tableTimeFormat: false,
        actualOvertimeTimeFormat: false,
        pauseTimeFormat: false,
        overTimeTimeFormat: false,
      },
    };
  },
  beforeMount() {
    this.valuesSaveStatus = this.$store.state.valuesSaveStatus;
    this.useTimeFormat = this.$store.state.useTimeFormat;
  },
  methods: {
    setStatus: function () {
      this.$store.commit("setValuesSaveStatus", !this.valuesSaveStatus);
    },
    changeTimeFormat: function (changeKey) {
      this.$store.commit("changeTimeFormat", {
        key: changeKey,
        value: !this.useTimeFormat[changeKey],
      });
    },
  },
  computed: {
    fPauseTimeFormat: {
      get() {
        return !this.useTimeFormat.pauseTimeFormat
      },
      set(value) {
        this.useTimeFormat.pauseTimeFormat = !value
      }
    }
  }
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
</style>