// export default function ({ $axios, redirect }) {
//     // $axios.defaults.baseURL = 'http:localhost:8000/';
//
//     $axios.onRequest(config => {
//       console.log('Making request to ' + config.url)
//     })
//
//     $axios.onError(error => {
//       const code = parseInt(error.response && error.response.status)
//       if (code === 400) {
//         redirect('/400')
//       }
//     })
//   }
export default function ({ $axios, store }) {
  $axios.onRequest( (config) => {
    if (store.state.token) {
      config.headers.common['Authorization'] = `Token ${store.state.token}`
    }
  })
}
