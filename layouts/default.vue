<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt/>
    <foot-er></foot-er>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'

  export default {
    components: {
      'nav-bar': Navbar,
      'foot-er': Footer,
    },
    middleware: 'authenticated',
    beforeCreate() {
      this.$store.commit('initialiseStore');
    }
  }
</script>
<style>

</style>
