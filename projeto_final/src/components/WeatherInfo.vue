
<template>
  <div>
    <!-- <p>{{ cityId }}</p> -->
    <!-- <h1>{{translatedName(cityId)}}</h1> -->
    <b-card
     
     
      img-left
      tag="article"
      style="max-width: 30rem;"
      class="mb-2"
    >
      <b-card-text>
        <small class="text-muted">Última actualização: {{cityPred.dataUpdate.split('T')[1]}} de {{cityPred.dataUpdate.split('T')[0]}}</small>
        <h1>{{translatedName(cityId)}}</h1>
        <h4>Max: {{cityPred.data[0].tMax}} ºC</h4>
        <h4>Min: {{cityPred.data[0].tMa} ºC</h4>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data(){
    return {
      weather: 'sdsd',
    }
  },
  props: ["cityId"],
  mounted() {
    this.$store.dispatch("getCityPred", this.cityId)
  },
  computed: {
    ...mapState(["cityPred", "distIsles", "weatherType", "windType"])
  },
  methods: {
    translatedName(cityId) {
      //let cities = this.$store.getters.getDistIsle
      for (let i = 0; i < this.distIsles.data.length; i++) {
        if (cityId == this.distIsles.data[i].globalIdLocal) {
          return this.distIsles.data[i].local;
        }
      }

      return cityId + "- Unknown";
    }
  }
};
</script>

<style>
</style>