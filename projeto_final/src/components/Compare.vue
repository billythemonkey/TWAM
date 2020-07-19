<template>
  <div>
    <!-- <p>{{ cityId }}</p> -->
    <!-- <h1>{{translatedName(cityId)}}</h1> -->
    <b-card style="max-width: 30rem;" class="mb-2">
      <b-button
        v-on:click="changeDate(pred)"
        v-for="pred in cityPred1.data"
        :key="pred.globalIdLocal"
        >{{ pred.forecastDate }}</b-button
      >
      <b-card-text>
        <div class="row">
          <div class="col-sm-12">
            <b-img
              ref="weatherIcons"
              :src="getImage(cityPred1.data[day].classWindSpeed)"
              width="200"
            ></b-img>
          </div>
          <div class="col-sm-12">
            <h1>{{ translatedName(cityId) }}</h1>
            <h4>{{ translatedWeather(cityPred1.data[day].classWindSpeed) }}</h4>
            <h4>Max: {{ cityPred1.data[day].tMax }} ºC</h4>
            <h4>Min: {{ cityPred1.data[day].tMin }} ºC</h4>
            <h4>Precipitação: {{ cityPred1.data[day].precipitaProb }} %</h4>
            <h4>
              Vento: {{ translatedWind(cityPred1.data[day].idWeatherType) }}
            </h4>
            <small class="text-muted"
              >Última actualização: {{ cityPred1.dataUpdate.split("T")[1] }} de
              {{ cityPred1.dataUpdate.split("T")[0] }}</small
            >
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
      day: 0,
    };
  },
  props: ["cityId"],
  mounted() {
    this.$store.dispatch("getCityPred1", this.cityId);
  },
  computed: {
    ...mapState(["cityPred1", "distIsles", "weatherType", "windType"]),
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
    translatedWind(windId) {
      for (let i = 0; i < this.windType.data.length; i++) {
        if (windId == this.windType.data[i].classWindSpeed) {
          return this.windType.data[i].descClassWindSpeedDailyPT;
        }
      }

      return windId + "- Unknown";
    },
    translatedWeather(weatherId) {
      for (let i = 0; i < this.weatherType.data.length; i++) {
        if (weatherId == this.weatherType.data[i].idWeatherType) {
          return this.weatherType.data[i].descIdWeatherTypePT;
        }
      }

      return weatherId + "- Unknown";
    },
    changeDate(id) {
      for (let i = 0; i < this.cityPred1.data.length; i++) {
        
        if (id == this.cityPred1.data[i]) {
          return this.day = i
        }
      }
    },
    getImage(weatherId) {
      let image = "";
      switch (weatherId) {
        case -99:
          return "https://image.flaticon.com/icons/svg/929/929599.svg";
          break;
        case 0:
          return "https://image.flaticon.com/icons/svg/929/929599.svg";
          break;
        case 1:
          return "https://image.flaticon.com/icons/svg/3093/3093273.svg";
          break;
        case 2:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093290.svg";
          break;
        case 3:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093290.svg";
          break;
        case 4:
          return "https://image.flaticon.com/icons/svg/3093/3093275.svg";
          break;
        case 5:
          return "https://image.flaticon.com/icons/svg/3093/3093275.svg";
          break;
        case 6:
          return "https://image.flaticon.com/icons/svg/3093/3093276.svg";
          break;
        case 7:
          return "https://image.flaticon.com/icons/svg/3093/3093276.svg";
          break;
        case 8:
          return "https://image.flaticon.com/icons/svg/3093/3093276.svg";
          break;
        case 9:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093288.svg";
          break;
        case 10:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093288.svg";
          break;
        case 11:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093288.svg";
          break;
        case 12:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093288.svg";
          break;
        case 13:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093288.svg";
          break;
        case 14:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093288.svg";
          break;
        case 15:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093288.svg";
          break;
        case 16:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093296.svg";
          break;
        case 17:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093296.svg";
          break;
        case 18:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093299.svg";
          break;
        case 19:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093292.svg";
          break;
        case 20:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093328.svg";
          break;
        case 21:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093301.svg";
          break;
        case 22:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093324.svg";
          break;
        case 23:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093328.svg";
          break;
        case 24:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093401.svg";
          break;
        case 25:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093290.svg";
          break;
        case 26:
          return "https://www.flaticon.com/premium-icon/icons/svg/3093/3093401.svg";
          break;
        case 27:
          return "https://image.flaticon.com/icons/svg/3093/3093275.svg";
          break;
        default:
          break;
      }
    },
  },
};
</script>
