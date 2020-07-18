import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allTheInfo: []
  },
  getters: {
    getTheInfo () {
      const testClothes = []
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => testClothes.push(json.filter(clothes => clothes.id <= 4)))
      return testClothes
    },
    getSpecificInfo: state => {
      return state.allTheInfo.filter(clothes => clothes.albumId === 1)
    }
  },
  mutations: {
    setAllInfo (state, allTheInfo) {
      state.allTheInfo = allTheInfo
    }
  },
  actions: {
    setTheInfo (context) {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => context.commit('setAllInfo', json))
    }
  },
  modules: {
  }
})
