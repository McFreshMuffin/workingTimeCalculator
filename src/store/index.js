import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

const defaultSaveState = {
  startTime: "07:30",
  actualOvertime: 1.1,
  workingTimeWeekly: 42,
  pauseInput: "01:00",
  endTime: "17:00",
  doneOvertime: 0.25
}

export default Vuex.createStore({
  state: {
    valuesSaveStatus: false,
    saveState: defaultSaveState,
    useTimeFormat: {
      tableTimeFormat: false,
      actualOvertimeTimeFormat: false,
      pauseTimeFormat: false,
      overTimeTimeFormat: false
    }
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
    },
    changeTimeFormat(state, object) {
      state.useTimeFormat[object.key] = object.value
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
});
