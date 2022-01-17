<template>
  <div id="arbeitszeiten" class="flex flex-col items-center">
    <div id="input" class="max-w-2xl w-full px-3">
      <div
        v-for="item in items"
        :key="item.id"
      >
      <time-input :item="item"></time-input></div>
    </div>

    <br />
    <div id="output" class="max-w-2xl w-full px-3">
      <b-table
        :items="getCalculatedValues"
        :fields="fields"
        small
        table-class="white"
      >
        <template v-slot:head()="data">
          <div v-b-tooltip.left.hover :title="data.field.tooltip">
            {{ data.label }}
          </div>
        </template>
        <template v-slot:cell(newLabel)="data">
          <div class="font-bold" v-b-tooltip.hover :title="data.item.tooltip">
            {{ data.item.label }}
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import calculatedOverTime from "../util/calculateOverTime.js";
import calculatedEndTime from "../util/calculateEndTime.js";
import TimeInput from '../components/timeInput.vue';
export default {
  name: "Home",
  components: {
    TimeInput
  },
  data() {
    return {
      items: [
        {
          id: 0,
          label: "Arbeitsbeginn",
          key: 'startTime',
          type: "time",
          value: "07:00",
          useFormatter: false,
        },
        {
          id: 1,
          label: "Aktuelle Überstunden",
          key: 'actualOvertime',
          tooltip:
            "Die Anzahl an Überstunden, die man zu Beginn des Tages gesammelt hat.",
          type: "number",
          value: null,
          placeholder: "0",
          useFormatter: true,
        },
        {
          id: 2,
          label: "Soll-Arbeitszeit (Wöchentlich)",
          key: 'workingTimeDailySoll',
          tooltip: "Netto-Arbeitszeit (Wöchentlich, Soll)",
          type: "number",
          value: 40,
          placeholder: "38,5",
          step: "0.5",
          min: "1",
          max: "48",
          useFormatter: false,
        },
        {
          id: 3,
          label: "Pause",
          key: 'pause',
          type: "time",
          value: "00:30",
          placeholder: "0,5",
          useFormatter: true,
        },
        { id: 4, useFormatter: false },
        {
          id: 5,
          label: "Gewünschtes Arbeitsende",
          key: 'endTime',
          type: "time",
          value: "16:30",
          useFormatter: false,
        },
        {
          id: 6,
          label: "Gewünschte Überstunden",
          key: 'overTime',
          type: "number",
          value: null,
          placeholder: "0",
          useFormatter: true,
        },
      ],
      fields: [
        { key: "newLabel", label: "" },
        {
          key: "value1",
          label: "Überstunden",
          tooltip:
            "Die Überstunden werden anhand des gewünschten Arbeitsende berechnet.",
        },
        {
          key: "value2",
          label: "Abmelden",
          tooltip:
            "Das Arbeitsende wird anhand der gewünschten Überstunden berechnet.",
        },
      ],
    };
  },
  computed: {
    getCalculatedValues: function () {
      if (this.$store.state.valuesSaveStatus) {
        this.setValues();
      }
      const overTime = new calculatedOverTime(
        this.items[0].value,
        this.items[1].value,
        this.items[2].value,
        this.items[3].value,
        this.items[5].value
      );
      const endTime = new calculatedEndTime(
        this.items[0].value,
        this.items[1].value,
        this.items[2].value,
        this.items[3].value,
        this.items[6].value
      );
      return [
        { label: "Arbeitsbeginn", value1: overTime.startTime },
        {
          label: "Aktuelle Überstunden",
          tooltip:
            "Die Anzahl an Überstunden, die man zu Beginn des Tages gesammelt hat.",
          value1: overTime.actualOvertime,
        },
        {
          label: "Soll-Arbeitszeit",
          tooltip: "Netto-Arbeitszeit (Täglich, Soll)",
          value1: overTime.workingTimeDailySoll,
        },
        {
          label: "Ist-Arbeitszeit",
          tooltip: "Netto-Arbeitszeit (Täglich, Ist)",
          value1: overTime.workingTimeDailyIstNetto,
          value2: endTime.workingTimeDailyIstNetto,
        },
        {
          label: "Pausenzeit",
          value1: overTime.pause,
          value2: endTime.pause,
          _cellVariants: {
            value1: overTime.pauseVariant,
            value2: endTime.pauseVariant,
          },
        },
        {
          label: "Überstunden",
          tooltip: "Die Überstunden, die heute geleistet wurden.",
          value1: overTime.doneOvertime,
          value2: endTime.doneOvertime,
          _cellVariants: { value1: "success" },
        },
        {
          label: "Arbeitsende",
          value1: overTime.endTime,
          value2: endTime.endTime,
          _cellVariants: { value2: "success" },
        },
        {
          label: "Gesamte Überstunden",
          value1: overTime.overTime,
          value2: endTime.overTime,
        },
      ];
    },
  },
  beforeMount() {
    if (this.$store.state.valuesSaveStatus) {
      this.items[0].value = this.$store.state.saveState.startTime;
      this.items[1].value = this.$store.state.saveState.actualOvertime;
      this.items[2].value = this.$store.state.saveState.workingTimeWeekly;
      this.items[3].value = this.$store.state.saveState.pauseInput;
      this.items[5].value = this.$store.state.saveState.endTime;
      this.items[6].value = this.$store.state.saveState.doneOvertime;
    }
  },
  methods: {
    setValues: function () {
      if (this.$store.state.valuesSaveStatus) {
        this.$store.commit("setSaveState", {
          startTime: this.items[0].value,
          actualOvertime: this.items[1].value,
          workingTimeWeekly: this.items[2].value,
          pauseInput: this.items[3].value,
          endTime: this.items[5].value,
          doneOvertime: this.items[6].value,
        });
      }
    },
  },
};
</script>