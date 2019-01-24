<template>
  <div>
    <div class="header-top-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="logo-area">
              <a href="#">
                <!--<img src="img/logo/logo.png" alt=""/>-->
              </a>
            </div>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div class="header-top-menu">
              <ul class="nav navbar-nav notika-top-nav">
                <li class="nav-item">
                  <nuxt-link to="/">
                    <i class="fa fa-home"></i>
                  </nuxt-link>
                </li>
                <li class="nav-item nc-al pl-4">
                  <a href="#" data-toggle="dropdown" role="button" aria-expanded="false"
                     class="nav-link dropdown-toggle"><span><i class="fa fa-graduation-cap"></i></span>
                  </a>
                  <div role="menu" class="dropdown-menu message-dd notification-dd animated zoomIn">
                    <div class="hd-mg-tt">
                      <h2>SIS</h2>
                    </div>
                    <div class="hd-message-info">
                      <a href="#">
                        <div class="hd-message-sn">
                          <div class="hd-mg-ctn">
                            <nuxt-link to="/students">Students</nuxt-link>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div class="hd-message-sn">
                          <div class="hd-mg-ctn">
                            <nuxt-link to="/subjects">Subjects</nuxt-link>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div class="hd-message-sn">
                          <div class="hd-mg-ctn">
                            <nuxt-link to="/levels">Levels</nuxt-link>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div class="hd-message-sn">
                          <div class="hd-mg-ctn">
                            <nuxt-link to="/exams">Exams</nuxt-link>
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div class="hd-message-sn">
                          <div class="hd-mg-ctn">
                            <nuxt-link to="/attendance">Attendance</nuxt-link>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li class="nav-item nc-al pr-4 pl-4">
                  <a href="#" data-toggle="dropdown" role="button" aria-expanded="false"
                     class="nav-link dropdown-toggle"><span><i class="fa fa-briefcase"></i></span>
                  </a>
                  <div role="menu" class="dropdown-menu message-dd notification-dd animated zoomIn">
                    <div class="hd-mg-tt">
                      <h2>SISkaunting</h2>
                    </div>
                    <div class="hd-message-info">
                      <a href="#">
                        <div class="hd-message-sn">
                          <div class="hd-mg-ctn">
                            <nuxt-link to="/siskaunting/journalVouchers">Journal Vouchers</nuxt-link>

                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div class="hd-message-sn">
                          <div class="hd-mg-ctn">
                            <nuxt-link to="/siskaunting/transcations">Transactions</nuxt-link>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/login" class="nav-link" @click.native="logout">
                    <span><i class="fa fa-power-off"></i></span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import {mapGetters} from 'vuex'

  export default {
    methods: {
      logout() {
        console.log('logout')
        this.$store.dispatch('logout')
        // this.$router.push({path: '/login'})
      }
    },
    // computed: {
    //   ...mapGetters([
    //     'isAuthenticated',
    //   ])
    // },
  }
</script>
<style>
  .navbar-nav {
    display: flex;
    flex-direction: unset;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
</style>
