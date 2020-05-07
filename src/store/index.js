import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    addCount (state) {
      state.count++
    }
  },
  getters: {
    getCount: state => {
      return state.count*2
    }
  },
  actions: {
    addCount (context) {
      context.commit('addCount')
    }
  }
})

export default store
