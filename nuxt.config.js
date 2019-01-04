const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'preload',
        href: '/css/font-awesome.min.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/bootstrap.min.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/owl.carousel.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/owl.theme.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/owl.transitions.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/meanmenu/meanmenu.min.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/animate.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/normalize.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/wave/waves.min.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/wave/button.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/scrollbar/jquery.mCustomScrollbar.min.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/notika-custom-icon.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/jquery.dataTables.min.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/main.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/style.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/css/responsive.css',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: 'preload',
        href: '/js/vendor/modernizr-2.8.3.min.js',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'"
      }
    ],
    noscript: [
      {rel: "stylesheet", href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900'},
      {rel: "stylesheet", href: '/css/bootstrap.min.css'},
      {rel: "stylesheet", href: '/css/font-awesome.min.css'},
      {rel: "stylesheet", href: '/css/owl.carousel.css'},
      {rel: "stylesheet", href: '/css/owl.theme.css'},
      {rel: "stylesheet", href: '/css/owl.transitions.css'},
      {rel: "stylesheet", href: '/css/meanmenu/meanmenu.min.css'},
      {rel: "stylesheet", href: '/css/animate.css'},
      {rel: "stylesheet", href: '/css/normalize.css'},
      {rel: "stylesheet", href: '/css/wave/waves.min.css'},
      {rel: "stylesheet", href: '/css/wave/button.css'},
      {rel: "stylesheet", href: '/css/scrollbar/jquery.mCustomScrollbar.min.css'},
      {rel: "stylesheet", href: '/css/notika-custom-icon.css'},
      {rel: "stylesheet", href: '/css/jquery.dataTables.min.css'},
      {rel: "stylesheet", href: '/css/main.css'},
      {rel: "stylesheet", href: '/style.css'},
      {rel: "stylesheet", href: '/css/responsive.css'},
      {rel: "stylesheet", href: '/js/vendor/modernizr-2.8.3.min.js'},
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#00c292'},

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/axios'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://localhost:8000/',
    // credentials: true,
    // proxy: false,
    // debug: true,
    // retry: {
    //   retries: 3
    // },
    // requestInterceptor: (config, {store}) => {
    //   config.headers.common['Authorization'] = '';
    //   config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;application/json';
    //   return config
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
