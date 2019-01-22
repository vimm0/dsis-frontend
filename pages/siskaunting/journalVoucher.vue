<template>
  <div>
    <b-form-select v-model="selected" :options="options" class="mb-3"/>
    <b-form-select v-model="selected" :options="options" class="mb-3" size="sm"/>
    <div>Selected: <strong>{{ selected }}</strong></div>

    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
      const accounts = await $axios.$get('/account/choices/')
      if (accounts) {
        return {accounts}
      }
    },
    created() {
      for (var i = 0; i < this.accounts.length; i++) {
        this.options.push({value: this.accounts[i].id, text: this.accounts[i].label})
      }
      console.log(this.options)
    }
  }
</script>
