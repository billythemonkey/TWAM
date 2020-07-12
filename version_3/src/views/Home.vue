<template>
  <div class="home">
    <b-col>
        <b-col sm="8" offset="2">
          <SearchBox />
        </b-col>
        <b-row>
          <b-col sm="6">
            <b-col>
              <SelectDate />
            </b-col>
            <b-col>
              <Table />
            </b-col>
          </b-col>
          <b-col sm="6">
            <h1>Teste</h1>
          </b-col>
        </b-row>
    </b-col>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBox from '../components/SearchBox.vue'
import Table from '../components/Table.vue'
import SelectDate from '../components/SelectDate.vue'

export default {
  name: 'Home',
  components: {
    SearchBox,
    Table,
    SelectDate
  },
  data () {
    return {
      day0Data: [],
      day1Data: [],
      day2Data: [],
      forecastDate0: '',
      forecastDate1: '',
      forecastDate2: '',
      dateOfLastUpdate: '',
      hourOfLastUpdate: ''
    }
  },
  mounted: {
    function () {
      fetch('http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json', {
        method: 'get'
      }).then((response) => {
        return response.json()
      }).then((jsonData) => {
        this.day0Data = jsonData.data
        this.forecastDate0 = jsonData.forecastDate
        this.hourOfLastUpdate = jsonData.dataUpdate.split('T')[1]
        this.dateOfLastUpdate = jsonData.dataUpdate.split('T')[0]
      })
      fetch('http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day1.json', {
        method: 'get'
      }).then((response) => {
        return response.json()
      }).then((jsonData) => {
        this.day1Data = jsonData.data
        this.forecastDate1 = jsonData.forecastDate
      })
      fetch('http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day2.json', {
        method: 'get'
      }).then((response) => {
        return response.json()
      }).then((jsonData) => {
        this.day2Data = jsonData.data
        this.forecastDate2 = jsonData.forecastDate
      })
    }
  }
}

</script>

<style scoped>
  div{
    border: 1px;
    border-style: solid;
    border-color: black;
  }
</style>
