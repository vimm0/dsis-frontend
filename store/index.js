import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: '',
    },
    mutations: {
      token(state, payload) {
        state.token = payload
      }
    },
    // actions: {},
    // getters: {...}
  })
}

export default createStore
