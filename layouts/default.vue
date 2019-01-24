<template>
  <div>
    <!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a
      href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <!--<nav-bar></nav-bar>-->
    <no-ssr>
      <template v-if="isAuthenticated">
        <sub-nav></sub-nav>
      </template>
    </no-ssr>
    <nuxt/>
    <foot-er></foot-er>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar'
  import Menu from '@/components/Menu'
  import Footer from '@/components/Footer'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      'nav-bar': Navbar,
      'sub-nav': Menu,
      'foot-er': Footer,
    },
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters([
        'isAuthenticated',
      ])
    },
    // middleware: 'authenticated',
    // beforeCreate() {
    //   this.$store.commit('initialiseStore');
    // }
  }
</script>
<style>

</style>
