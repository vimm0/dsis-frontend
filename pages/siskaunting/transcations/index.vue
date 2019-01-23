<template>
  <b-card class="mb-2">
    <b-table striped hover :fields="fields" :items="transactions" caption-top>
      <template slot="reference" slot-scope="data">
        <nuxt-link :to="{ name: 'siskaunting-transcations-reference', params: { reference: data.item.reference }}">
          #{{data.item.reference}}
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
            <b-col sm="3" class="text-sm-right"><b>Account:</b></b-col>
            <!--<b-col>{{ row.item }}</b-col>-->
            <li v-for="(value, key) in row.item.transactionentry_set" :key="key">
              <a>{{ value.account.name}}</a>
            </li>
          </b-row>
          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template>
      <template slot="table-caption">
        Related to Transactions
      </template>
    </b-table>
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
        }, 'date', 'descriptions', 'created', 'show_details'],

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
