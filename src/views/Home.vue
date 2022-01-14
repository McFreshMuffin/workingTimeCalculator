<template>
  <div id="arbeitszeiten" class="flex flex-col items-center">
    <div id="input" class="max-w-2xl w-full px-3">
      <!-- <div>
        Willkommen zum mobilen Arbeitszeitenrechner. Im folgenden können Sie
        Ihre Überstunden sowie ihr Abmeldezeit berechnen. Die berechneten Werte
        werden in Grün markiert.
      </div> -->

      <div
        class="flex w-full flex-row mt-2"
        v-for="item in items"
        :key="item.id"
      >
        <div v-if="item.id !== 0" class="flex w-1/2 flex-wrap content-center justify-center mr-2">
          <div v-b-tooltip.hover :title="item.tooltip">
            <label :for="item.label">{{ item.label }}</label>
          </div>
        </div>
        <div v-if="item.id !== 0" class="ml-2 w-1/2 flex flex-wrap content-center">
          <b-input
            :id="item.label"
            :type="item.type"
            v-model="item.value"
            :placeholder="item.placeholder"
            :step="item.step"
          ></b-input>
        </div>
        <div v-else class="h-px bg-white w-full" />
      </div>
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
import standardTime from "../util/calculateOverTime.js";
import calculatedEndTime from "../util/calculateEndTime.js";
export default {
  name: "Home",
  data() {
    return {
      items: [
        { id: 1, label: "Arbeitsbeginn", type: "time", value: "07:00" },
        {
          id: 2,
          label: "Aktuelle Überstunden",
          tooltip:
            "Die Anzahl an Überstunden, die man zu Beginn des Tages gesammelt hat.",
          type: "number",
          value: null,
          placeholder: "0",
          step: "0.25",
        },
        {
          id: 3,
          label: "Soll-Arbeitszeit (Wöchentlich)",
          tooltip: "Netto-Arbeitszeit (Wöchentlich, Soll)",
          type: "number",
          value: 40,
          placeholder: "38,5",
          step: "0.5",
          min: "1",
          max: "48",
        },
        {
          id: 4,
          label: "Pause",
          type: "time",
          value: "00:30",
          placeholder: "0,5",
        },
        {id: 0},
        {
          id: 5,
          label: "Gewünschtes Arbeitsende",
          type: "time",
          value: "16:30",
        },
        {
          id: 6,
          label: "Gewünschte Überstunden",
          type: "number",
          value: null,
          placeholder: "0",
          step: "0.25"
        },
      ],
      fields: [
        { key: "newLabel", label: "" },
        {
          key: "value1",
          label: "Überstunden",
          tooltip: 'Die Überstunden werden anhand des gewünschten Arbeitsende berechnet.',
        },
        {
          key: "value2",
          label: "Abmelden",
          tooltip: 'Das Arbeitsende wird anhand der gewünschten Überstunden berechnet.',
        },
        // {
        //   key: "value3",
        //   label: "Abmelden keine Pause",
        //   tooltip: ""
        // },
      ],
    };
  },
  computed: {
    getCalculatedValues: function () {
      const standard = new standardTime(
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
        { label: "Arbeitsbeginn", value1: standard.startTime },
        {
          label: "Aktuelle Überstunden",
          tooltip:
            "Die Anzahl an Überstunden, die man zu Beginn des Tages gesammelt hat.",
          value1: standard.actualOvertime,
        },
        {
          label: "Soll-Arbeitszeit",
          tooltip: "Netto-Arbeitszeit (Täglich, Soll)",
          value1: standard.workingTimeDailySoll,
        },
        {
          label: "Ist-Arbeitszeit",
          tooltip: "Netto-Arbeitszeit (Täglich, Ist)",
          value1: standard.workingTimeDailyIstNetto,
          value2: endTime.workingTimeDailyIstNetto,
          value3: 0,
        },
        {
          label: "Pausenzeit",
          value1: standard.pause,
          value2: endTime.pause,
          value3: 0,
          _cellVariants: { value1: standard.pauseVariant },
        },
        {
          label: "Überstunden",
          tooltip: "Die Überstunden, die heute geleistet wurden.",
          value1: standard.doneOvertime,
          value2: endTime.doneOvertime,
          value3: 0,
          _cellVariants: { value1: "success" },
        },
        {
          label: "Arbeitsende",
          value1: this.items[4].value,
          value2: endTime.endTime,
          value3: 0,
          _cellVariants: { value2: "success" },
        },
        {
          label: "Gesamte Überstunden",
          value1: standard.overtime,
          value2: endTime.overtime,
          value3: 0,
        },
      ];
    },
  },
  methods: {},
};
</script>