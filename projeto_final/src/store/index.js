import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dailyPred0: [],
    dailyPred1: [],
    dailyPred2: [],
    weatherType: [],
    distIsles: [],
    windType: []
  },
  getters: {
    getPredDay0: () => {
      return this.state.dailyPred0.data
    },
    getPredDay1: () => {
      return this.state.dailyPred1.data
    },
    getPredDay2: () => {
      return this.state.dailyPred2.data
    }
  },
  mutations: {
    SET_DAY_0: (state, forecast) => {
      state.dailyPred0 = forecast
    },
    SET_DAY_1: (state, forecast) => {
      state.dailyPred1 = forecast
    },
    SET_DAY_2: (state, forecast) => {
      state.dailyPred2 = forecast
    },
    SET_WEATHER_TYPE: (state, data) =>{
      state.weatherType = data
    },
    SET_DIST_ISLES: (state, data) =>{
      state.distIsles = data
    },
    SET_WIND_TYPE: (state, data) =>{
      state.windType = data
    }
  },
  actions: {
    getDailyPredDay0: ({commit}) =>{
      axios.get('http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json')
      .then(response => {
        commit('SET_DAY_0', response.data)
      })
    },
    getDailyPredDay1: ({commit}) =>{
      axios.get('http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day1.json')
      .then(response => {
        commit('SET_DAY_1', response.data)
      })
    },
    getDailyPredDay2: ({commit}) =>{
      axios.get('http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day2.json')
      .then(response => {
        commit('SET_DAY_2', response.data)
      })
    },
    getWeatherType: ({commit}) =>{
      axios.get('https://api.ipma.pt/open-data/weather-type-classe.json')
      .then(response => {
        commit('SET_WEATHER_TYPE', response.data)
      })
    },
    getDistIsles: ({commit}) =>{
      axios.get('https://api.ipma.pt/open-data/distrits-islands.json')
      .then(response => {
        commit('SET_DIST_ISLES', response.data)
      })
    },
    getWindType: ({commit}) =>{
      axios.get('https://api.ipma.pt/open-data/wind-speed-daily-classe.json')
      .then(response => {
        commit('SET_WIND_TYPE', response.data)
      })
    }
  },
  modules: {
  }
})
