<template>
  <div>
    <!--<nav-bar></nav-bar>-->
    <sub-nav></sub-nav>
    <nuxt/>
    <foot-er></foot-er>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar'
  import Menu from '@/components/Menu'
  import Footer from '@/components/Footer'

  export default {
    components: {
      'nav-bar': Navbar,
      'sub-nav': Menu,
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
