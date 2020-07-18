<template>
  <div>
    <b-row>
      <b-col>
        <weather-info :cityId="$route.params.id" />
      </b-col>
    </b-row>
  </div>
</template>


<script>
import WeatherInfo from "../components/WeatherInfo.vue";

export default {
  data() {
    return {
      id: {
        cityId: this.$route.params.id
      }
    };
  },
  components: {
    WeatherInfo
  }
};
</script>

<style>
</style>