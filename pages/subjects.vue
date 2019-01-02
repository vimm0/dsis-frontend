<template>
  <section class="container">

    <div class="data-table-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="data-table-list">
              <div class="basic-tb-hd">
                <h2>Subjects List</h2>
              </div>
              <div class="table-responsive">
                <b-table id="data-table-basic" striped hover :fields="fields" :items="subjects"></b-table>
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
        fields: ['name', {
          label: 'Subject Code',
          key: 'subject_code',
          sortable: true
        }, 'min_mark', 'max_mark', 'level.name'],
      }
    },
    async asyncData({$axios}) {
      const subjects = await $axios.$get('/subjects/')
      if (subjects) {
        return {subjects}
      }
    },
  }
</script>

<style>

</style>
