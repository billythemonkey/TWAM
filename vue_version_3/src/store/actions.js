import axios from 'axios'

export const getCities = ({ commit }) => {
  axios.get('https://api.ipma.pt/open-data/distrits-islands.json')
    .then(response => {
      commit('SET_CITIES', response.data)
    })
}
