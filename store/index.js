import Vuex from 'vuex'

let self = this
const createStore = () => {
  return new Vuex.Store({
    state: {
      token: ''
      // token: localStorage.getItem('token'),
    },
    mutations: {
      initialiseStore(state) {
        console.log()
        if (!process.server) {
          if (localStorage.getItem('token')) {
            state.token = localStorage.getItem('token')
          }
        }
      },
      token(state, payload) {
        state.token = payload
      }
    },
    // actions: {},
    getters: {
      isAuthenticated: state => !!state.token,

    }
  })
}

export default createStore
