export default function (context) {
  // if (!process.server) {
    if (!context.store.getters.isAuthenticated) {
      console.log('authenticated.js')
      return context.redirect('/login')
    }
  // }
}
