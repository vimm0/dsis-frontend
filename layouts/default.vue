<template>
  <div>

    <!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a
      href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <no-ssr>
      <!--<template >-->
      <nav-bar v-if="isAuthenticated"></nav-bar>
      <!--<sub-nav v-if="isAuthenticated"></sub-nav>-->
      <!--</template>-->
      <!--</no-ssr>-->
      <!--<no-ssr>-->

      <nuxt/>

      <foot-er></foot-er>
    </no-ssr>

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
    created() {
      console.log('default')
    },
    // middleware: 'authenticated',
    beforeCreate() {
      this.$store.commit('initialiseStore');
    }
  }
</script>
<style>

</style>
