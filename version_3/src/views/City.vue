<template>
    <div class="city">
        <b-col>
          <SearchBox />
          <b-row>
            <b-col><CityInfo />
            </b-col>
          </b-row>
        </b-col>
    </div>
</template>

<script>
// @ is an alias to /src
import SearchBox from '../components/SearchBox.vue'
import CityInfo from '../components/CityInfo.vue'

export default {
  name: 'City',
  components: {
    SearchBox,
    CityInfo
  },
  data () {
    return {
      city: 1010500,
      data: []
    }
  },
  mounted: function () {
    this.$store.dispatch('getCities')
  }
}
</script>
