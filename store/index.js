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
      logout({commit}) {
        localStorage.removeItem('token')
        commit('logout')
        // console.log(this)
        // $nuxt.$router.push({path: '/login'})
      }
    },
    getters: {
      isAuthenticated: state => !!state.token,

    }
  })
}

export default createStore
