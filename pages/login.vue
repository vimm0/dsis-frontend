<template>
  <div>
    <div class="login-content">
      <div class="nk-block toggled" id="l-login">
        <div class="nk-form">
          <div class="input-group">
            <span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-support"></i></span>
            <div class="nk-int-st">
              <input type="text" class="form-control" v-model="username" placeholder="Username">
            </div>
          </div>
          <div class="input-group mg-t-15">
            <span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-edit"></i></span>
            <div class="nk-int-st">
              <input type="password" class="form-control" v-model="password" placeholder="Password"
                     v-on:keyup="keyPressed">
            </div>
          </div>
          <div class="fm-checkbox">
            <label><input type="checkbox" class="i-checks"> <i></i> Keep me signed in</label>
          </div>
          <a href="#l-register" data-ma-action="nk-login-switch" data-ma-block="#l-register"
             class="btn btn-login btn-success btn-float" @click="userLogin"><i
            class="notika-icon notika-right-arrow right-arrow-ant"></i></a>
        </div>

        <div class="nk-navigation nk-lg-ic">
          <a href="#" data-ma-action="nk-login-switch" data-ma-block="#l-register"><i
            class="notika-icon notika-plus-symbol"></i> <span>Register</span></a>
          <a href="#" data-ma-action="nk-login-switch" data-ma-block="#l-forget-password"><i>?</i>
            <span>Forgot Password</span></a>
        </div>
      </div>

      <!-- Register -->
      <div class="nk-block" id="l-register">
        <div class="nk-form">
          <div class="input-group">
            <span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-support"></i></span>
            <div class="nk-int-st">
              <input type="text" class="form-control" placeholder="Username">
            </div>
          </div>

          <div class="input-group mg-t-15">
            <span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-mail"></i></span>
            <div class="nk-int-st">
              <input type="text" class="form-control" placeholder="Email Address">
            </div>
          </div>

          <div class="input-group mg-t-15">
            <span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-edit"></i></span>
            <div class="nk-int-st">
              <input type="password" class="form-control" placeholder="Password">
            </div>
          </div>

          <a href="#l-login" data-ma-action="nk-login-switch" data-ma-block="#l-login"
             class="btn btn-login btn-success btn-float"><i class="notika-icon notika-right-arrow"></i></a>
        </div>

        <div class="nk-navigation rg-ic-stl">
          <a href="#" data-ma-action="nk-login-switch" data-ma-block="#l-login"><i
            class="notika-icon notika-right-arrow"></i> <span>Sign in</span></a>
          <a href="" data-ma-action="nk-login-switch" data-ma-block="#l-forget-password"><i>?</i>
            <span>Forgot Password</span></a>
        </div>
      </div>

      <!-- Forgot Password -->
      <div class="nk-block" id="l-forget-password">
        <div class="nk-form">
          <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu risus. Curabitur
            commodo
            lorem fringilla enim feugiat commodo sed ac lacus.</p>

          <div class="input-group">
            <span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-mail"></i></span>
            <div class="nk-int-st">
              <input type="text" class="form-control" placeholder="Email Address">
            </div>
          </div>

          <a href="#l-login" data-ma-action="nk-login-switch" data-ma-block="#l-login"
             class="btn btn-login btn-success btn-float"><i class="notika-icon notika-right-arrow"></i></a>
        </div>

        <div class="nk-navigation nk-lg-ic rg-ic-stl">
          <a href="" data-ma-action="nk-login-switch" data-ma-block="#l-login"><i
            class="notika-icon notika-right-arrow"></i> <span>Sign in</span></a>
          <a href="" data-ma-action="nk-login-switch" data-ma-block="#l-register"><i
            class="notika-icon notika-plus-symbol"></i> <span>Register</span></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // http://localhost:8000/login/
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        username: '',
        // email: '',
        password: '',
      }
    },
    methods: {
      keyPressed(e) {
        if (e.keyCode === 13) {
          this.userLogin()
        }
      },
      userLogin() {
        let postData = {
          username: this.username,
          password: this.password,
        }
        // this.store.commit
        console.log(this)
        console.log(postData)
        let self = this
        this.$axios.post(`/login/`, postData).then(({data}) => {
          console.log(data)
          self.$store.commit('token', data.key)
          localStorage.setItem('token', JSON.stringify(data.key))
          this.$router.push('/')
        }).catch(err => {
          console.log(err)
        });
      }
    },
    computed: {
      // mix the getters into computed with object spread operator
      ...
        mapGetters([
          'isAuthenticated',
        ])
    },
    beforeCreate() {
      if (this.$store.getters.isAuthenticated) {
        this.$router.push('/')
      }
    }
  }
</script>
