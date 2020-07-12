<template>
  <div>
    <b-form-input list="my-list-id"></b-form-input>

    <datalist id="my-list-id">
      <option>Manual Option</option>
      <option :v-for="city in cities">{{ city }}</option>
    </datalist>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [],
        cities:[]
      }
    },
    mounted: function () {
      fetch(('https://api.ipma.pt/open-data/distrits-islands.json'), {
          method: 'get'
        })
        .then((response) => {
          return response.json()
        })
        .then((jsonData) => {
          //console.log("hello");
          this.data = jsonData.data
          this.cities = this.data.local
          // for (let i = 0; i < jsonData.data.length; i++) {
          //   this.cities.push(jsonData.data[i].local);
          //   //console.log(this.cities[i]); 
          // }

        })
    }
  }
</script>