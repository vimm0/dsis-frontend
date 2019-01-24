<template>
  <div>
    <template v-if="error.statusCode">
      <div class="error-page-area">
        <div class="error-page-wrap">
          <i class="notika-icon notika-close"></i>
          <h2>ERROR <span class="counter">{{ error.statusCode }}</span></h2>
          <p>Sorry, but the page you are looking for has not been found. Try checking the URL for an error, then hit
            the
            refresh button on your browser or try found something else in our app.</p>
          <nuxt-link to="/" class="btn">Dashboard</nuxt-link>
          <a href="#" class="btn error-btn-mg">Report Problem</a>
        </div>
      </div>
    </template>
  </div>

</template>

<script>
  export default {
    props: ['error'],
    layout: 'blog' // you can set a custom layout for the error page
  }
</script>
