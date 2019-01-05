<template>
  <div>
    <!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a
      href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
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
