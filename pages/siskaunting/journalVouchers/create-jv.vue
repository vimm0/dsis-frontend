<template>
  <b-card class="mb-2">
    <!--<b-form-input v-model="transaction.reference" type="text" placeholder="Reference"></b-form-input>-->
    <!--<b-form-input v-model="jv.date" type="text" placeholder="Date"></b-form-input>-->
    <p v-if="errors">{{errors}}</p>
    <b-form-input id="type-date" v-model="data.jv.date" type="date"></b-form-input>

    <!--<b-form-input v-model="jv.description" type="text" placeholder="Description"></b-form-input>-->

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
      <tr>
        <template v-for="el in data.transactions">
          <td>
            <b-form-input v-model="el.date" type="date"></b-form-input>
          </td>
          <td>
            <b-form-input v-model="el.description" type="text" placeholder="Description"></b-form-input>
          </td>
        </template>
        <template v-for="el in data.transaction_entries">
          <td>
            <b-form-select class="mb-2 mr-sm-2 mb-sm-0"
                           :value="el.account"
                           :options="accounts_dict"
                           id="inlineFormCustomSelectPref"></b-form-select>
          </td>
          <td>
            <b-form-input v-model="el.debit" type="text" placeholder="Debit"></b-form-input>
          </td>
          <td>
            <b-form-input v-model="el.credit" type="text" placeholder="Credit"></b-form-input>
          </td>
        </template>
      </tr>
      </tbody>
      <!--<tfoot>-->
      <!--<tr>-->
      <!--<td></td>-->
      <!--<td></td>-->
      <!--<td>Total</td>-->
      <!--<td>Rs. {{total_debit}}</td>-->
      <!--<td>Rs. {{total_credit}}</td>-->
      <!--</tr>-->
      <!--</tfoot>-->
    </table>
    <!--{{arr}}-->
    <button type="button" class="btn btn-outline-primary" @click="addTransactionEntry">TE</button>
    <button type="button" class="btn btn-outline-primary" @click="addTransaction">T</button>
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
        data: {
          jv: {
            date: '',
          },
          transaction_set: {
            date: '',
            description: '',
            transactionentry_set: {
              account: '',
              debit: '',
              credit: '',
            }
          }
        },
        transactions: [
          {
            date: '',
            description: '',
          }
        ],
        transaction_entries: [
          {
            account: '',
            debit: '',
            credit: '',
          }
        ],
        errors: ''
      }
    },
    async asyncData({$axios}) {
      const accounts = await $axios.$get('/accounts/choices/')
      if (accounts) {
        var accounts_dict = {}
        for (var key in accounts) {
          if (accounts.hasOwnProperty(key)) {
            accounts_dict[accounts[key]['id']] = accounts[key]['label']
          }
        }
        return {accounts, accounts_dict}
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
      addTransaction() {
        this.transactions.push(JSON.parse(JSON.stringify(this.transactions)));
      },
      addTransactionEntry() {
        this.transaction_entries.push(JSON.parse(JSON.stringify(this.transaction_entries)));
      },
      createObject() {
        // var data = this.jv
        console.log(this.data)
        this.$axios
          .post(`/journal-vouchers/`, this.data)
          .then(res => {
            this.$router.push({path: '/siskaunting/journalVouchers'})
          })
          .catch(err => {
            console.log(err);
            this.errors = err.response.data
          });
      }
    }
  }
</script>
