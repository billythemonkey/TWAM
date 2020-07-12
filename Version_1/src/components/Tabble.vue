<template>
  <div>
    <caption class="caption">Última actualização: {{lastUpdate}}</caption>
    <b-container fluid class="table-container">
      <b-table striped hover @row-clicked="idToCityName" :items="items" :fields="fields" sort-icon-left></b-table>
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
        lastUpdate: '',
        clickedRow: 0
      }
    },
    mounted: function () {
      fetch('http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json', {
          method: 'get'
        })
        .then((response) => {
          return response.json()
        })
        .then((jsonData) => {
          this.tempArr = jsonData.data
          this.items = this.tempArr
          this.lastUpdate = jsonData.dataUpdate.split("T")[1]
        })
    },
    methods: {
      rowClickHandler(record) {
        this.clickedRow = record.globalIdLocal
      },
      idToCityName() {
        var temp = 0;
        this.tempArr.forEach(item => {
          temp = item.globalIdLocal
          for (let index = 0; index < this.items.length; index++) {
            this.items[index].globalIdLocal = this.cities[index].local
            console.log(this.items[index].globalIdLocal)
          }
        });
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