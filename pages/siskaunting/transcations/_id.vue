<template>
  <b-card class="mb-2">
    {{transaction}}
    <!--<b-form-input id="input-small" size="sm" type="text" placeholder="Enter your name"></b-form-input>-->
    <b-form-input v-model="transaction.reference" type="text" placeholder="Reference"></b-form-input>
    <b-form-input v-model="transaction.date" type="text" placeholder="Date"></b-form-input>
    <b-form-input v-model="transaction.description" type="text" placeholder="Description"></b-form-input>
    <b-form-input v-model="transaction.created_at" type="text" placeholder="Created At"></b-form-input>
    <button type="button" class="btn btn-outline-danger" @click="deleteObject(transaction.id)">Delete</button>
    <button type="button" class="btn btn-outline-success" @click="saveObject(transaction.id)">Save</button>
  </b-card>
</template>
<script>

  export default {
    data() {
      return {
      }
    },
    async asyncData({$axios, params}) {
      console.log(params)
      const transaction = await $axios.$get(`transactions/${params.id}`)
      if (transaction) {
        return {transaction}
      }
    },
    methods: {
      deleteObject(id) {
        this.$axios
          .delete(`transactions/${id}/`)
          .then(res => {
            this.$router.push({path: '/siskaunting/journalVouchers'})
          })
          .catch(err => {
            console.log(err);
          });
      },
      saveObject(id) {
        this.$axios
          .put(`transactions/${id}/`)
          .then(res => {
            this.$router.push({path: '/ssiskaunting/journalVouchers'})
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
</script>
