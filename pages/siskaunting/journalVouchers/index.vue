<template>
  <b-card class="mb-2">
    <section class="container">
      <div class="data-table-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

              <div class="data-table-list">
                <div class="basic-tb-hd">
                  <h2>Journal Vouchers</h2>
                  <!--<input v-model="searchKey" class="form-control" id="search-element" requred/>-->
                  <!--<i class="fa fa-search"></i>-->
                  <!--<i class="fa fa-ban"></i>-->
                </div>
                <div class="table-responsive">
                  <b-table striped hover :fields="fields" :items="journalVouchers" caption-top>
                    <template slot="jv_no" slot-scope="data">
                      <nuxt-link
                        :to="{ name: 'siskaunting-journalVouchers-id', params: { id: data.item.id }}">
                        #{{data.item.jv_no}}
                      </nuxt-link>
                    </template>
                    <template slot="actions" slot-scope="row">
                      <button type="button" class="btn btn-outline-danger"
                              @click="$router.push({name: 'siskaunting-journalVouchers-id', params: {id:data.item.id}})">
                        <i class="fa fa-trash-o"></i>
                      </button>
                      <button type="button" class="btn btn-outline-primary"
                              @click="$router.push({name: 'siskaunting-journalVouchers'})">
                        <i class="fa fa-pencil"></i>
                      </button>
                    </template>
                    <template slot="table-caption">
                      Related to Journal Vouchers
                      <button type="button" class="btn btn-outline-success float-right"
                              @click="$router.push({name: 'siskaunting-journalVouchers-create-jv'})">
                        <i class="fa fa-plus-square-o"></i>
                      </button>
                    </template>
                  </b-table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </b-card>
</template>
<script>
  export default {
    data() {
      return {
        fields: [{
          label: 'Reference Number',
          key: 'jv_no',
          sortable: true
        }, 'date', 'actions'],
        selected: null,
        types: [
          'date',
        ],
        options: [
          {value: null, text: 'Please select an option'},
        ]
        // 'choices': [1, 2, 3, 4, 5],
        // options: [
        //   {value: null, text: 'Please select an option'},]
      }
    },
    async asyncData({$axios}) {
      // const accounts = await $axios.$get('/account/choices/')
      const journalVouchers = await $axios.$get('/journal-vouchers/')
      // if (accounts) {
      //   return {accounts}
      // }
      if (journalVouchers) {
        return {journalVouchers}
      }
    },
    methods: {
      createObject() {

      }
    },
    created() {
      // for (var i = 0; i < this.accounts.length; i++) {
      //   this.options.push({value: this.accounts[i].id, text: this.accounts[i].label})
      // }
      // console.log(this.options)
    }
  }
</script>
