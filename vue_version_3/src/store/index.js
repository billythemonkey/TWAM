import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cities: []
  },
  mutations: {
    getCities () {
      fetch(('https://api.ipma.pt/open-data/distrits-islands.json'), {
        method: 'get'
      })
        .then((response) => {
          return response.json()
        })
        .then((jsonData) => {
          this.cities = jsonData.data.local
        })

      return this.cities
    }
  },
  actions: {
  },
  modules: {
  }
})
