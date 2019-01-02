<template>
  <section class="container">

    <div class="data-table-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="data-table-list">
              <div class="basic-tb-hd">
                <h2>Exams List</h2>
              </div>
              <div class="table-responsive">
                <b-table id="data-table-basic" striped hover :fields="fields" :items="exams"></b-table>
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
        fields: ['term_no', {
          label: 'Student Name',
          key: 'student.name',
          sortable: true
        }, 'level.name', {
          label: 'Date',
          key: 'exam_date'
        }],
      }
    },
    async asyncData({$axios}) {
      const exams = await $axios.$get('/exams/')
      if (exams) {
        return {exams}
      }
    },
  }
</script>

<style>

</style>
