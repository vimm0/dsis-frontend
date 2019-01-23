<template>
  <b-card class="mb-2">
    <!--{{transaction}}-->
    <!--<b-form-input id="input-small" size="sm" type="text" placeholder="Enter your name"></b-form-input>-->
    <b-form-input v-model="transaction[0].reference" type="text" placeholder="Reference"></b-form-input>
    <b-form-input v-model="transaction[0].date" type="text" placeholder="Date"></b-form-input>
    <b-form-input v-model="transaction[0].description" type="text" placeholder="Description"></b-form-input>
    <b-form-input v-model="transaction[0].created" type="text" placeholder="Created"></b-form-input>
    <button type="button" class="btn btn-outline-danger">Delete</button>
    <button type="button" class="btn btn-outline-success">Save</button>

    <!--<b-table striped hover :fields="fields" :items="transaction">-->

    <!--<template slot="show_details" slot-scope="row">-->
    <!--&lt;!&ndash; we use @click.stop here to prevent emitting of a 'row-clicked' event  &ndash;&gt;-->
    <!--<b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">-->
    <!--{{ row.detailsShowing ? 'Hide' : 'Show'}} Details-->
    <!--</b-button>-->
    <!--&lt;!&ndash; In some circumstances you may need to use @click.native.stop instead &ndash;&gt;-->
    <!--&lt;!&ndash; As `row.showDetails` is one-way, we call the toggleDetails function on @change &ndash;&gt;-->
    <!--<b-form-checkbox @click.native.stop @change="row.toggleDetails" v-model="row.detailsShowing">-->
    <!--Details via check-->
    <!--</b-form-checkbox>-->
    <!--</template>-->
    <!--<template slot="row-details" slot-scope="row">-->
    <!--<b-card>-->
    <!--<b-row class="mb-2">-->
    <!--<b-col sm="3" class="text-sm-right"><b>Account:</b></b-col>-->
    <!--&lt;!&ndash;<b-col>{{ row.item }}</b-col>&ndash;&gt;-->
    <!--<li v-for="(value, key) in row.item.transactionentry_set" :key="key">-->
    <!--<a>{{ value.account.name}}</a>-->
    <!--</li>-->
    <!--</b-row>-->
    <!--<b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>-->
    <!--</b-card>-->
    <!--</template>-->

    <!--</b-table>-->
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
    async asyncData({$axios, params}) {
      console.log(params)
      const transaction = await $axios.$get(`transactions/?reference=${params.reference}`)
      if (transaction) {
        return {transaction}
      }
    },
    methods: {},
  }
</script>
