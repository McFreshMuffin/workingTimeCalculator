<template>
  <div class="flex w-full flex-row mt-2">
    <div
      v-if="item.id !== 4"
      class="flex w-1/2 flex-wrap content-center justify-center mr-2"
    >
      <div v-b-tooltip.hover :title="item.tooltip">
        <label :for="item.label">{{ item.label }}</label>
      </div>
    </div>
    <div v-if="item.id !== 4" class="ml-2 w-1/2 flex flex-wrap content-center">
      <b-input-group>
        <b-input
          :id="item.label"
          :type="type"
          v-model="formatted"
          :placeholder="item.placeholder"
          :step="item.step"
          :min="item.min"
          :max="item.max"
        ></b-input>
        <b-input-group-append v-if="item.useFormatter">
          <b-button @click="changeType" class="h-full"
            ><b-icon :icon="icon"
          /></b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div v-else class="h-px bg-white w-full" />
  </div>
</template>

<script>
import * as transform from "../util/transformators.js";
export default {
  name: "TimeInput",
  props: ["item"],
  data() {
    return {
      type: this.item.type,
      icon: "",
    };
  },
  methods: {
    changeType: function () {
      if (this.type == "number") {
        this.type = "time";
        this.icon = "calculator";
      } else {
        this.type = "number";
        this.icon = "clock";
      }
    },

  },
  created() {
    if (this.item.type == "number") {
      this.icon = "clock";
    } else if (this.item.type == "time") {
      this.icon = "calculator";
    }
    if (this.item.useFormatter) {
      if (this.$store.state.useTimeFormat[this.item.key + "TimeFormat"]) {
        this.changeType();
      }
    }
  },
  computed: {
    formatted: {
      get() {
        if (this.item.type == this.type) {
          return this.item.value;
        } else {
          if (this.type == "number") {
            return transform.timeToNumber(this.item.value);
          } else {
            return transform.numberToTime(this.item.value);
          }
        }
      },
      set(newVal) {
          if (this.item.type == this.type) {
        this.item.value = newVal;
              } else {
                  if (this.type == 'number') {
                      this.item.value = transform.numberToTime(newVal)
                  } else {
                      this.item.value = transform.timeToNumber(newVal)
                  }
              }
      },
    },
  },
};
</script>
<style>
.input-group-append {
  margin-left: -3px !important;
}
</style>