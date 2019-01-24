<template>
  <div>
    <div class="data-table-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="data-table-list">
              <div class="basic-tb-hd">
                <h2>Basic Example</h2>
                <p>It's just that simple. Turn your simple table into a sophisticated data table and offer your users a
                  nice experience and great features without any effort.</p>
              </div>
              <div class="table-responsive">
                <!--<table id="data-table-basic" class="table table-striped">-->
                <!--<thead>-->
                <!--<tr>-->
                <!--<th>Name</th>-->
                <!--<th>Position</th>-->
                <!--<th>Office</th>-->
                <!--<th>Age</th>-->
                <!--<th>Start date</th>-->
                <!--<th>Salary</th>-->
                <!--</tr>-->
                <!--</thead>-->
                <!--<tbody>-->
                <!--<tr>-->
                <!--<td>Tiger Nixon</td>-->
                <!--<td>System Architect</td>-->
                <!--<td>Edinburgh</td>-->
                <!--<td>61</td>-->
                <!--<td>2011/04/25</td>-->
                <!--<td>$320,800</td>-->
                <!--</tr>-->
                <!--</tbody>-->
                <!--<tfoot>-->
                <!--<tr>-->
                <!--<th>Name</th>-->
                <!--<th>Position</th>-->
                <!--<th>Office</th>-->
                <!--<th>Age</th>-->
                <!--<th>Start date</th>-->
                <!--<th>Salary</th>-->
                <!--</tr>-->
                <!--</tfoot>-->
                <!--</table>-->
                <b-table id="data-table-basic" striped hover :items="students"></b-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        // fields: ['pic', {
        //   label: 'Full Name',
        //   key: 'name',
        //   sortable: true
        // }, {
        //   label: 'Phone Number',
        //   key: 'phone_number',
        // }, 'address', 'email'],
      }
    },
    // /subjects/?level__name=Class+One&name= //by level_name
    // /subjects/?level__name=&name=Science //by subject_name
    async asyncData({$axios}) {
      const students = await $axios.$get('/students/')
      if (students) {
        return {students}
      }
    },
  }
</script>

<style>

</style>
