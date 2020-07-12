<template>
  <div class="searchBox">
    <b-form-input id="search" placeholder="Escolhe uma cidade"></b-form-input>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'cities'
    ])
  }
}

</script>

<style scoped>

</style>
