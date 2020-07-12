<template>
  <div>
    <b-form-input placeholder="Procure uma cidade"></b-form-input>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        cities: []
      }
    },
    mounted: function(){
      fetch(('https://api.ipma.pt/open-data/distrits-islands.json'), {
          method: 'get'
        })
        .then((response) => {
          return response.json()
        })

        .then((jsonData) => {
          jsonData.forEach(element => {
            this.cities = element.data.local
          });
          console.log(this.cities); 
        })
    }
  }
</script>