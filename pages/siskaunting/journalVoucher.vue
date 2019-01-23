<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <b-card class="mb-2">
          <b-table striped hover :fields="fields" :items="journalVouchers">
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
                  <li v-for="(value, key) in row.item.transaction_set" :key="key">{{ value.reference}}</li>

                </b-row>
                <!--<b-row class="mb-2">-->
                <!--<b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>-->
                <!--<b-col>{{ row.item.isActive }}</b-col>-->
                <!--</b-row>-->
                <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
              </b-card>
            </template>
          </b-table>
        </b-card>
      </div>
    </div>
  </div>
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
      const journalVouchers = await $axios.$get('/journal-voucher/')
      // if (accounts) {
      //   return {accounts}
      // }
      if (journalVouchers) {
        return {journalVouchers}
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
