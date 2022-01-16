import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const defaultSaveState = {
  startTime: "07:30",
  actualOvertime: 1.1,
  workingTimeWeekly: 42,
  pauseInput: "01:00",
  endTime: "17:00",
  doneOvertime: 0.25
}

export default new Vuex.Store({
  state: {
    valuesSaveStatus: false,
    saveState: defaultSaveState
  },
  mutations: {
    setValuesSaveStatus(state, value) {
      if (!value) {
        state.saveState = defaultSaveState
      }
      state.valuesSaveStatus = value
    },
    setSaveState(state, object) {
      state.saveState = object
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
