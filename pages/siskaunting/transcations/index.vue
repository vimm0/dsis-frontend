<template>
  <b-card class="mb-2">
    <section class="container">

      <div class="data-table-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

              <div class="data-table-list">
                <div class="basic-tb-hd">
                  <h2>Transactions</h2>
                </div>
                <div class="table-responsive">
                  <b-table striped hover :fields="fields" :items="transactions" caption-top>
                    <template slot="reference" slot-scope="data">
                      <nuxt-link
                        :to="{ name: 'siskaunting-transcations-reference', params: { reference: data.item.reference }}">
                        #{{data.item.reference}}
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
                      Related to Transactions
                      <button type="button" class="btn btn-outline-primary float-right">
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
          label: 'Reference No.',
          key: 'reference',
          sortable: true
        }, 'date', 'description', {
          label: 'Created',
          key: 'created_at'
        }, 'actions'],

      }
    },
    async asyncData({$axios}) {
      // const accounts = await $axios.$get('/account/choices/')
      const transactions = await $axios.$get('/transactions/')
      // if (accounts) {
      //   return {accounts}
      // }
      if (transactions) {
        return {transactions}
      }
    },
    methods: {},
  }
</script>
