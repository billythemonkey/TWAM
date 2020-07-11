<template>
  <b-table striped hover :items='items' :fields="fields">
  </b-table>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      fields: [
        {
          key: 'age',
          label: 'Idade',
          sortable: true
        },
        {
          key: 'first_name',
          label: 'Primeiro Nome',
          sortable: true
        }
      ]
    }
  }
}
</script>

<style>

</style>
