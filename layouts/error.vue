<template>
  <div>
    <template v-if="error.statusCode">
      <div class="error-page-area">
        <div class="error-page-wrap">
          <i class="notika-icon notika-close"></i>
          <h2>ERROR <span class="counter">{{ error.statusCode }}</span></h2>
          <p>Sorry, but the page you are looking for has note been found. Try checking the URL for an error, then hit
            the
            refresh button on your browser or try found something else in our app.</p>
          <a href="index.html" class="btn">Dashboard</a>
          <a href="#" class="btn error-btn-mg">Report Problem</a>
        </div>
      </div>
    </template>
    <!--<template>-->
      <!--{{error.statusCode}} Status-->
    <!--</template>-->
  </div>

</template>

<script>
  export default {
    props: ['error'],
    layout: 'blog' // you can set a custom layout for the error page
  }
</script>
