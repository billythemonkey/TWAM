<template>
  <div class="row">
    <div>
      <weather-info :cityId="$route.params.id1"/>
    </div>
    <div>
      <compare :cityId="$route.params.id2"/>
    </div>
  </div>
</template>

<script>
import Compare from "../components/Compare.vue";
import WeatherInfo from "../components/WeatherInfo.vue"

export default {
  data() {
    return {
      
    }
  },
  components: {
    Compare,
    WeatherInfo
  },
};
</script>

<style></style>
