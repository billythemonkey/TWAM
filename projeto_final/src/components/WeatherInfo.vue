
<template>
  <div>
    <!-- <p>{{ cityId }}</p> -->
    <!-- <h1>{{translatedName(cityId)}}</h1> -->
    <b-card img-left tag="article" style="max-width: 30rem;" class="mb-2">
      <b-card-text>
        <div class="row">
          <div class="col-sm-6">
            <img src="../assets/weather-icons-master/svg/wi-windy.svg" alt="sdasd">
          </div>
          <div class="col-sm-8">
            
            <h1>{{translatedName(cityId)}}</h1>
            <h4>{{translatedWeather(cityPred.data[0].classWindSpeed)}}</h4>
            <h4>Max: {{cityPred.data[0].tMax}} ºC</h4>
            <h4>Min: {{cityPred.data[0].tMin}} ºC</h4>
            <h4>Precipitação: {{cityPred.data[0].precipitaProb}} %</h4>
            <h4>Vento: {{translatedWind(cityPred.data[0].idWeatherType)}}</h4>
            <small
              class="text-muted"
            >Última actualização: {{cityPred.dataUpdate.split('T')[1]}} de {{cityPred.dataUpdate.split('T')[0]}}</small>
          </div>
          
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      weather: "sdsd"
    };
  },
  props: ["cityId"],
  mounted() {
    this.$store.dispatch("getCityPred", this.cityId);
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
    },
    translatedWind(windId){
      for (let i = 0; i < this.windType.data.length; i++) {
        if (windId == this.windType.data[i].classWindSpeed) {
          return this.windType.data[i].descClassWindSpeedDailyPT;
        }
      }

      return windId + "- Unknown";
    },
    translatedWeather(weatherId){
      for (let i = 0; i < this.weatherType.data.length; i++) {
        if (weatherId == this.weatherType.data[i].idWeatherType) {
          return this.weatherType.data[i].descIdWeatherTypePT;
        }
      }

      return weatherId + "- Unknown";
    }
  }
};
</script>

<style>
</style>