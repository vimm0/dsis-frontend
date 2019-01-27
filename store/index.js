import Vuex from 'vuex'
// import router from './router/index'


let self = this
const createStore = () => {
  return new Vuex.Store({
    state: {
      token: ''
    },
    mutations: {
      initialiseStore(state) {
        if (!process.server) {
          if (localStorage.getItem('token')) {
            console.log('initialiseStore')
            state.token = JSON.parse(localStorage.getItem('token'))
          }
        }
      },
      logout(state) {
        state.token = null
      },
      token(state, payload) {
        state.token = payload
      }
    },
    actions: {
      // nuxtServerInit({commit}, {req}) {
      //   console.log(commit)
      //   // if (req.session.user) {
      //   //   commit('user', req.session.user)
      //   // }
      // },
      logout({commit}) {
        localStorage.removeItem('token')
        commit('logout')
      }
    },
    getters: {
      isAuthenticated: state => !!state.token,

    }
  })
}

export default createStore
