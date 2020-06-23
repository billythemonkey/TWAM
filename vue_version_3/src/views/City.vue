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
    fetch('http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/' + this.city + '.json', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.data = jsonData.data
      })
  }
}
</script>
