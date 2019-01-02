<template>
  <section class="container">

    <div class="data-table-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="data-table-list">
              <div class="basic-tb-hd">
                <h2>Teachers List</h2>
              </div>
              <div class="table-responsive">
                <b-table id="data-table-basic" responsive striped hover :fields="fields" :items="teachers"></b-table>
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
        fields: ['pic', {
          label: 'Full Name',
          key: 'name',
          sortable: true
        }, {
          label: 'Phone Number',
          key: 'phone_number',
        }, 'address', 'email', 'position'],
      }
    },
    async asyncData({$axios}) {
      const teachers = await $axios.$get('/teachers/')
      if (teachers) {
        return {teachers}
      }
    },
  }
</script>

<style>
  .table {
    width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    border: 1px solid #eceef1;
  }
</style>
