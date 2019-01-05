<template>
  <div>
    <!--<div class="login-content">-->
    <!--<div class="nk-block toggled" id="l-login">-->
    <!--<div class="nk-form">-->
    <!--<div class="input-group">-->
    <!--<span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-support"></i></span>-->
    <!--<div class="nk-int-st">-->
    <!--<input type="text" class="form-control" placeholder="Username">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="input-group mg-t-15">-->
    <!--<span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-edit"></i></span>-->
    <!--<div class="nk-int-st">-->
    <!--<input type="email" class="form-control" placeholder="Email">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="input-group mg-t-15">-->
    <!--<span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-edit"></i></span>-->
    <!--<div class="nk-int-st">-->
    <!--<input type="password" class="form-control" placeholder="Password">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="fm-checkbox">-->
    <!--<label><input type="checkbox" class="i-checks"> <i></i> Keep me signed in</label>-->
    <!--</div>-->
    <!--<a href="#l-register" data-ma-action="nk-login-switch" data-ma-block="#l-register"-->
    <!--class="btn btn-login btn-success btn-float"><i-->
    <!--class="notika-icon notika-right-arrow right-arrow-ant"></i></a>-->
    <!--</div>-->

    <!--<div class="nk-navigation nk-lg-ic">-->
    <!--<a href="#" data-ma-action="nk-login-switch" data-ma-block="#l-register"><i-->
    <!--class="notika-icon notika-plus-symbol"></i> <span>Register</span></a>-->
    <!--<a href="#" data-ma-action="nk-login-switch" data-ma-block="#l-forget-password"><i>?</i>-->
    <!--<span>Forgot Password</span></a>-->
    <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash; Register &ndash;&gt;-->
    <!--<div class="nk-block" id="l-register">-->
    <!--<div class="nk-form">-->
    <!--<div class="input-group">-->
    <!--<span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-support"></i></span>-->
    <!--<div class="nk-int-st">-->
    <!--<input type="text" class="form-control" placeholder="Username">-->
    <!--</div>-->
    <!--</div>-->

    <!--<div class="input-group mg-t-15">-->
    <!--<span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-mail"></i></span>-->
    <!--<div class="nk-int-st">-->
    <!--<input type="text" class="form-control" placeholder="Email Address">-->
    <!--</div>-->
    <!--</div>-->

    <!--<div class="input-group mg-t-15">-->
    <!--<span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-edit"></i></span>-->
    <!--<div class="nk-int-st">-->
    <!--<input type="password" class="form-control" placeholder="Password">-->
    <!--</div>-->
    <!--</div>-->

    <!--<a href="#l-login" data-ma-action="nk-login-switch" data-ma-block="#l-login"-->
    <!--class="btn btn-login btn-success btn-float"><i class="notika-icon notika-right-arrow"></i></a>-->
    <!--</div>-->

    <!--<div class="nk-navigation rg-ic-stl">-->
    <!--<a href="#" data-ma-action="nk-login-switch" data-ma-block="#l-login"><i-->
    <!--class="notika-icon notika-right-arrow"></i> <span>Sign in</span></a>-->
    <!--<a href="" data-ma-action="nk-login-switch" data-ma-block="#l-forget-password"><i>?</i>-->
    <!--<span>Forgot Password</span></a>-->
    <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash; Forgot Password &ndash;&gt;-->
    <!--<div class="nk-block" id="l-forget-password">-->
    <!--<div class="nk-form">-->
    <!--<p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu risus. Curabitur commodo-->
    <!--lorem fringilla enim feugiat commodo sed ac lacus.</p>-->

    <!--<div class="input-group">-->
    <!--<span class="input-group-addon nk-ic-st-pro"><i class="notika-icon notika-mail"></i></span>-->
    <!--<div class="nk-int-st">-->
    <!--<input type="text" class="form-control" placeholder="Email Address">-->
    <!--</div>-->
    <!--</div>-->

    <!--<a href="#l-login" data-ma-action="nk-login-switch" data-ma-block="#l-login"-->
    <!--class="btn btn-login btn-success btn-float"><i class="notika-icon notika-right-arrow"></i></a>-->
    <!--</div>-->

    <!--<div class="nk-navigation nk-lg-ic rg-ic-stl">-->
    <!--<a href="" data-ma-action="nk-login-switch" data-ma-block="#l-login"><i-->
    <!--class="notika-icon notika-right-arrow"></i> <span>Sign in</span></a>-->
    <!--<a href="" data-ma-action="nk-login-switch" data-ma-block="#l-register"><i-->
    <!--class="notika-icon notika-plus-symbol"></i> <span>Register</span></a>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <input type="text" v-model="username" placeholder="Username">
    <!--<input type="email" v-model="email" placeholder="Email">-->
    <input type="password" v-model="password" placeholder="Password">
    <input type="button" value="Login" @click="userLogin">
    <!--<div v-if="$store">-->
      <!--{{$store.state}}-->
    <!--</div>-->
  </div>
</template>
<script>
  // http://localhost:8000/login/
  export default {
    data() {
      return {
        username: '',
        // email: '',
        password: '',
      }
    },
    methods: {
      userLogin() {
        // $axios.$get('/login/')
        let postData = {
          username: this.username,
          password: this.password,
        }
        // this.store.commit
        console.log(this)
        console.log(postData)
        this.$axios.post(`/login/`, postData).then(({data}) => {
          console.log(data)
          this.store.commit('token', data)
        }).catch(err => {
          console.log(err)
        });
      }
    },
    // async asyncData({$axios}) {
    //   const subjects = await $axios.$get('/subjects/')
    //   if (subjects) {
    //     return {subjects}
    //   }
    // },
  }
</script>
