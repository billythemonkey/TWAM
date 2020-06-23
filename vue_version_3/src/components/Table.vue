<template>
  <div>
    <b-table striped hover :items="items" :fields="fields">
        <template v-slot:cell(globalIdLocal)="data">
        <router-link :to="`/city/${data.value}`">
            {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: 'globalIdLocal',
          label: 'Cidade',
          sortable: true
        },
        {
          key: 'tMin',
          label: 'ºC Min',
          sortable: true
        },
        {
          key: 'tMax',
          label: 'ºC Max',
          sortable: true
        },
        {
          key: 'precipitaProb',
          label: '% Precipitação',
          sortable: true
        },
        {
          key: 'predWindDir',
          label: 'Vento',
          sortable: false
        }
      ],
      items: [],
      day: 0,
      forecastDate: '',
      hourUpdate: '',
      dayUpdate: '',
      tempArr: [],
      arr: []
    }
  },
  mounted: function () {
    fetch('http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day' + this.day + '.json', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.tempArr = jsonData.data
        this.items = this.tempArr
        this.forecastDate = jsonData.forecastDate
        this.hourUpdate = jsonData.dataUpdate.split('T')[1]
        this.dayUpdate = jsonData.dataUpdate.split('T')[0]
        console.log(this.dayUpdate)
      })
  }
}

</script>

<style scoped>

</style>
