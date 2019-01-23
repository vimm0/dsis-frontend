<template>
  <b-card class="mb-2">
    <!--<b-form-input v-model="transaction.reference" type="text" placeholder="Reference"></b-form-input>-->
    <!--<b-form-input v-model="jv.date" type="text" placeholder="Date"></b-form-input>-->
    <p v-if="errors">{{errors}}</p>
    <b-form-input id="type-date" v-model="jv.date" type="date"></b-form-input>

    <b-form-input v-model="jv.description" type="text" placeholder="Description"></b-form-input>
    <button type="button" class="btn btn-outline-danger" @click="$router.push({name: 'siskaunting-journalVouchers'})">
      Cancel
    </button>
    <button type="button" class="btn btn-outline-success" @click="createObject">Create</button>
  </b-card>
</template>
<script>

  export default {
    data() {
      return {
        jv: {
          // reference: '',
          date: '',
          description: '',
        },
        errors: ''
      }
    },
    methods: {
      createObject() {
        // var data = this.jv
        console.log(this.jv)
        this.$axios
          .post(`/journal-vouchers/`, this.jv)
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
