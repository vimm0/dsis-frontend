<template>
  <section class="container">

    <div class="data-table-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="data-table-list">
              <div class="basic-tb-hd">
                <h2>Levels List</h2>
              </div>
              <div class="table-responsive">
                <b-table id="data-table-basic" striped hover :fields="fields" :items="levels"></b-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    data() {
      return {
        fields: [{
          label: 'Class Code',
          key: 'class_code',
          sortable: true
        }, 'name'],
      }
    },
    async asyncData({$axios}) {
      const levels = await $axios.$get('/levels/')
      if (levels) {
        return {levels}
      }
    },
  }
</script>

<style>

</style>
