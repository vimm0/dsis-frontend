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
                </div>
                <div class="table-responsive">
                  <b-table striped hover :fields="fields" :items="journalVouchers" caption-top>
                    <template slot="jv_no" slot-scope="data">
                      <nuxt-link
                        :to="{ name: 'siskaunting-journalVouchers-id', params: { id: data.item.id }}">
                        #{{data.item.jv_no}}
                      </nuxt-link>
                    </template>
                    <template slot="show_details" slot-scope="row">
                      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
                      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
                        {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
                      </b-button>
                      <!-- In some circumstances you may need to use @click.native.stop instead -->
                      <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
                      <b-form-checkbox @click.native.stop @change="row.toggleDetails" v-model="row.detailsShowing">
                        Details via check
                      </b-form-checkbox>
                    </template>
                    <template slot="row-details" slot-scope="row">
                      <b-card>
                        <b-row class="mb-2">
                          <b-col sm="3" class="text-sm-right"><b>Transactions:</b></b-col>
                          <!--<b-col>{{ row.item.transaction_set }}</b-col>-->
                          <li v-for="(value, key) in row.item.transaction_set" :key="key">
                            <nuxt-link
                              :to="{ name: 'siskaunting-transcations-id', params: { id: value.id }}">
                              #{{value.reference}}
                            </nuxt-link>

                          </li>

                        </b-row>
                        <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
                      </b-card>
                    </template>
                    <template slot="table-caption">
                      Related to Journal Vouchers
                      <nuxt-link type="button" class="btn btn-outline-primary float-right" :to="{path: '/siskaunting/journalVouchers/create-jv'}">Create
                        Journal Voucher
                      </nuxt-link>
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
          key: 'jv_no',
          sortable: true
        }, 'date', 'show_details'],
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
