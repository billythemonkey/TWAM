<template>
  <div>
    <caption class="caption">Última actualização: {{hourUpdate}}</caption>
    <label for="date-picker">Dia</label>
    <b-form-select v-model="day" :options="options" ></b-form-select>
    <b-container fluid class="table-container">
      <b-table striped hover @row-clicked="rowClickHandler" :items="items" :fields="fields" sort-icon-left></b-table>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [{
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
        tempArr: [],
        cities: [],
        index: 0,
        hourUpdate: '',
        dayUpdate:  '',
        clickedRow: 0,
        day:0,
        options:[
          {value:0, text:"Hoje"},
          {value:1, text:"Amanhã"},
          {value:2, text:"Depois de amanhã"}
          ]
      }
    },
    coputed:{
      day(){

      }
    },
    mounted: function getForecast() {
      fetch('http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day'+this.day+'.json', {
          method: 'get'
        })
        .then((response) => {
          return response.json()
        })
        .then((jsonData) => {
          this.tempArr = jsonData.data
          this.items = this.tempArr
          this.hourUpdate = jsonData.dataUpdate.split("T")[1]
          this.dayUpdate = jsonData.dataUpdate.split('T')[0]
          console.log(this.dayUpdate);
         })
        //, 
        // fetch(('https://api.ipma.pt/open-data/distrits-islands.json'), {
        //   method: 'get'
        // })
        // .then((response) => {
        //   return response.json()
        // })
        // .then((jsonData) => {
        //   this.cities = jsonData.data
        // })
    },
    methods: {
      rowClickHandler(record) {
        this.clickedRow = record.globalIdLocal
      },
      forecastChange(){
        
      }
    }
  }
</script>

<style>
  
  .table-container {
     height: 300px
}
 .table-container table {
     display: flex;
     flex-flow: column;
     height: 100%;
     width: 100%;
}
 .table-container table thead {
     width: 98%;
}
 .table-container table tbody {
     flex: 1 1 auto;
     display: block;
     width: 100%;
     overflow-y: scroll;
}
 .table-container table tbody tr {
     width: 100%;
}
 .table-container table thead, .table-container table tbody tr {
     display: table;
     table-layout: fixed
}
 .table-container table {
     border-collapse: collapse;
}

 .table-container table td {
     border: 1px solid #e7e1e1;
     font-size: 1em;
    /* necessary to set for proper "showing row x of y" calculations if infinate scoll */
     white-space: nowrap;
     text-align: center;
     padding: 10px 5px;
     white-space: nowrap;
     text-overflow: ellipsis;
}

 .table-container table tbody td {
     cursor: pointer;
}

  .caption {
    width: 500px;
  }
</style>