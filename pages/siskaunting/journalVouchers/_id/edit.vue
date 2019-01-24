<template>

  <b-card class="mb-2">
    <!--{{data}}-->
    <!--<p v-if="errors">{{errors}}</p>-->
    <b-form-input id="type-date" v-model="data.date" type="date"></b-form-input>
    <no-ssr>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Description</th>
          <th scope="col">Account</th>
          <th scope="col">Debit</th>
          <th scope="col">Credit</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="el in data.transaction_set">
          <td>
            <b-form-input v-model="el.date" type="date"></b-form-input>
          </td>
          <td>
            <b-form-input v-model="el.description" type="text" placeholder="Description"></b-form-input>
          </td>
          <template v-for="e in el.transactionentry_set">
        <tr id="inside">
          <td>
            <b-form-select class="mb-2 mr-sm-2 mb-sm-0"
                           :value="e.account.id"
                           :options="accounts_dict"
                           id="inlineFormCustomSelectPref"></b-form-select>
          </td>
          <td>
            <b-form-input v-model="e.debit" type="text" placeholder="Debit"></b-form-input>
          </td>
          <td>
            <b-form-input v-model="e.credit" type="text" placeholder="Credit"></b-form-input>
          </td>
        </tr>
</template>
</tr>
</tbody>
<tfoot>
<tr>
  <td></td>
  <td></td>
  <td>Total</td>
  <td>Rs. 5222</td>
  <td>Rs. 5222</td>
</tr>
</tfoot>
</table>
</no-ssr>
<!--&lt;!&ndash;{{arr}}&ndash;&gt;-->
<!--<button type="button" class="btn btn-outline-primary" @click="addTransactionEntry">TE</button>-->
<!--<button type="button" class="btn btn-outline-primary" @click="addTransaction">T</button>-->
<div class="float-right">
  <button type="button" class="btn btn-outline-danger" @click="$router.push({name: 'siskaunting-journalVouchers'})">
    <i class="fa fa-times-circle-o"></i>
  </button>
  <button type="button" class="btn btn-outline-success" @click="createObject">
    <i class="fa fa-check-circle-o"></i>
  </button>
</div>
</b-card>
</template>
<script>

  export default {
    data() {
      return {
        data: {},
        errors: ''
      }
    },
    async asyncData({$axios, params}) {
      const journalVouchers = await $axios.$get(`journal-vouchers/${params.id}`)
      const accounts = await $axios.$get(`/accounts/choices/`)
      if (accounts) {
        var accounts_dict = {}
        for (var key in accounts) {
          if (accounts.hasOwnProperty(key)) {
            accounts_dict[accounts[key]['id']] = accounts[key]['label']
          }
        }
      }
      if (journalVouchers) {
        return {data: journalVouchers, accounts_dict}
      }
    },
    computed: {
      // total_debit() {
      //   let sum = 0;
      //
      //   for (let i = 0; i < this.data.transaction_set.length; i++) {
      //     sum += (parseFloat(this.data.transaction_set[i].debit)) || 0;
      //   }
      //   return sum;
      // },
      // total_credit() {
      //   let sum = 0;
      //
      //   for (let i = 0; i < this.data.transaction_set.length; i++) {
      //     sum += (parseFloat(this.data.transaction_set[i].credit)) || 0;
      //   }
      //   return sum;
      // }
    },
    methods: {
      // addTransaction() {
      //   this.transactions.push(JSON.parse(JSON.stringify(this.transactions)));
      // },
      // addTransactionEntry() {
      //   this.transaction_entries.push(JSON.parse(JSON.stringify(this.transaction_entries)));
      // },
      createObject() {
        // var data = this.jv
        console.log(this.data)
        this.$axios
          .put(`/journal-vouchers/${this.data.id}/`, this.data)
          .then(res => {
            console.log(res)
            this.$router.push({path: '/siskaunting/journalVouchers'})
          })
          .catch(err => {
            console.log(err);
            this.errors = err.response.data
          });
      }
    },
    created() {
    }
  }
</script>
