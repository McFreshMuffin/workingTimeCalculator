<template>
  <div class="flex flex-col items-center">
    <div>
      Willkommen zum mobilen Arbeitszeitenrechner. Im folgenden können Sie Ihre
      Überstunden sowie ihr Abmeldezeit berechnen.
    </div>

    <div class="w-full px-5">
      <div
        class="flex w-full flex-row mt-2"
        v-for="item in items"
        :key="item.id"
      >
        <div class="flex w-1/2 items-center justify-end mr-2">
          {{ item.label }}
        </div>
        <div class="ml-2 w-1/2">
          <b-input
            :type="item.type"
            v-model="item.value"
            :step="item.step"
          ></b-input>
        </div>
      </div>
    </div>

    <br />
    <b-table :items="getCalculatedValues" :fields="fields">
      <template #cell(label)="data">
        <div class="font-bold">{{ data.value }}</div>
      </template>
    </b-table>
  </div>
</template>

<script>
import * as transform from "../util/transformators.js";
import standardTime from "../util/timeFunctions.js"
export default {
  name: "Home",
  data() {
    return {
      items: [
        { id: 1, label: "Arbeitsbeginn", type: "time", value: "07:00" },
        {
          id: 2,
          label: "Aktuelle Überstunden",
          type: "number",
          value: 0,
          step: "0.25",
        },
        {
          id: 3,
          label: "Netto-Arbeitszeit (Wöchentlich, Soll)",
          type: "number",
          value: 40,
          step: "0.5",
          min: "1",
          max: "48"
        },
        { id: 4, label: "Pause", type: "time", value: "00:30" },
        {
          id: 6,
          label: "Gewünschte Abmeldezeit",
          type: "time",
          value: "16:30",
        },
      ],
      fields: [
        { key: "label", label: "" },
        { key: "value1", label: "Angaben" },
        // { key: "value2", label: "45 Min Pause" },
        // { key: "value3", label: "15 Min Pause" },
        // { key: "value4", label: "Keine Pause" },
      ],
    };
  },
  computed: {
    getCalculatedValues: function () {
      const standard = new standardTime(this.items[0].value, this.items[1].value, this.items[2].value, this.items[3].value, this.items[4].value)
      return [
        { label: "Arbeitsbeginn", value1: standard.startTime },
        { label: "Aktuelle Überstunden", value1: standard.actualOvertime },
        {
          label: "Netto-Arbeitszeit (Täglich, Soll)",
          value1: standard.workingTimeDailySoll,
        },
        {
          label: "Netto-Arbeitszeit (Täglich, Ist)",
          value1: standard.workingTimeDailyIstNetto,
          value2: 0,
          value3: 0,
          value4: 0,
        },
        {
          label: "Pausenzeit",
          value1: standard.pause,
          value2: 0,
          value3: 0,
          value4: 0,
        },
        {
          label: "Geleistete Überstunden",
          value1: 0,
          value2: 0,
          value3: 0,
          value4: 0,
        },
        {
          label: "Arbeitsende",
          value1: this.items[4].value,
          value2: 0,
          value3: 0,
          value4: 0,
        },
        {
          label: "Endstand der Überstunden",
          value1: 0,
          value2: 0,
          value3: 0,
          value4: 0,
        },
      ];
    },
  },
  methods: {
    // Functions for calculating values
    getWorkingTimePerDaySoll: function () {
      return this.items[2].value / 5;
    },
    getWorkingTimePerDayIst: function () {
      const start = transform.timeToNumber(this.items[0].value);
      const pause = transform.timeToNumber(this.items[3].value);
      const end = transform.timeToNumber(this.items[4].value);
      return (end - start - pause).toFixed(2);
    },
  },
};
</script>