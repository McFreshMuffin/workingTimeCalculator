<template>
  <div class="flex flex-col items-center">
    <div>
      Willkommen zum mobilen Arbeitszeitenrechner. Im folgenden können Sie Ihre
      Überstunden sowie ihr Abmeldezeit berechnen.
    </div>

    <div>
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
export default {
  name: "Home",
  data() {
    return {
      items: [
        { id: 1, label: "Arbeitsbeginn", type: "time", value: "08:00" },
        {
          id: 2,
          label: "Aktuelle Überstunden",
          type: "number",
          value: 0,
          step: "0.25",
        },
        {
          id: 3,
          label: "Arbeitszeit Wöchentlich, Soll",
          type: "number",
          value: 40,
          step: "0.5",
        },
        { id: 4, label: "Pause", type: "time", value: "00:30" },
        {
          id: 5,
          label: "Gewünschte Überstunden",
          type: "number",
          value: 0,
          step: "0.25",
        },
        {
          id: 6,
          label: "Gewünschte Abmeldezeit",
          type: "time",
          value: "16:30",
        },
      ],
      fields: [
        { key: "label", label: "" },
        { key: "value1", label: "30 Min Pause" },
        { key: "value2", label: "45 Min Pause" },
        { key: "value3", label: "15 Min Pause" },
        { key: "value4", label: "Keine Pause" },
      ],
    };
  },
  computed: {
    getCalculatedValues: function () {
      const workingTimePerDayIst = this.getWorkingTimePerDayIst();
      return [
        { label: "Arbeitsbeginn", value1: this.items[0].value },
        { label: "Aktuelle Überstunden", value1: this.items[1].value },
        {
          label: "Arbeitszeit (Täglich, Soll)",
          value1: this.getWorkingTimePerDaySoll(),
        },
        {
          label: "Arbeitszeit (Täglich, Ist)",
          value1: workingTimePerDayIst,
          value2: workingTimePerDayIst,
          value3: workingTimePerDayIst,
          value4: workingTimePerDayIst,
        },
        {
          label: "Pausenzeit",
          value1: 0,
          value2: 0,
          value3: 0,
          value4: 0,
        },
        {
          label: "Zu leistende Überstunden",
          value1: 0,
          value2: 0,
          value3: 0,
          value4: 0,
        },
        {
          label: "Arbeitsende",
          value1: 0,
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
    // Functions for transforming values
    getTimeToNumber: function (string) {
      return parseInt(string.substr(0, 2)) + parseInt(string.substr(3, 2)) / 60;
    },
    // Functions for calculating values
    getWorkingTimePerDaySoll: function () {
      return this.items[2].value / 5;
    },
    getWorkingTimePerDayIst: function () {
      const start = this.getTimeToNumber(this.items[0].value);
      const end = this.getTimeToNumber(this.items[5].value);
      return (end - start).toFixed(2);
    },
  },
};
</script>