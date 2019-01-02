<template>
  <section class="container">

    <div class="data-table-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="data-table-list">
              <div class="basic-tb-hd">
                <h2>Student List</h2>
              </div>
              <div class="table-responsive">
                <b-table id="data-table-basic" striped hover :items="students"></b-table>
                <table id="data-table-basic" class="table table-striped">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                  </tfoot>
                </table>
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
    async asyncData({$axios}) {
      const students = await $axios.$get('/student/')
      if (students) {
        return {students}
      }
    },
  }
</script>

<style>
  .table {
    width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    border: 1px solid;
  }
</style>
