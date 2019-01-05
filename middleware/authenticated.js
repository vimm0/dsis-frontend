export default function ({store, redirect}) {
  // console.log(store)
  if (!store.getters.isAuthenticated) {
    console.log('unauthenticated')
    return redirect('/login')
  }
  // if (store.getters.isAuthenticated) {
  //   console.log('authenticated')
  //   return redirect('/')
  // }
}
