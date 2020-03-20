import Vue from 'vue'
import Vuex from 'vuex'
import GetChar from './modules/FetchCharacters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    characters: GetChar
  }
})
