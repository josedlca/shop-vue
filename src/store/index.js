import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    getTheInfo () {
      const testClothes = []
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => testClothes.push(json.filter(clothes => clothes.id <= 4)))
      return testClothes
    },
    aLotOfInfo () {
      const testClothes = []
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => testClothes.push(json.filter(clothes => clothes.albumId === 1)))
      return testClothes
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
