<template>
  <div>
    <b-button v-on:click="$router.push('/citycompare/'+$route.params.id+'/'+selected+'')">Comparar</b-button>
    <b-form-select
      v-model="selected"
      v-bind:options="distIsles.data"
      value-field="globalIdLocal"
      text-field="local"
    ></b-form-select>
    <b-row>
      <b-col>
        <weather-info :cityId="$route.params.id" />
      </b-col>
    </b-row>
  </div>
</template>


<script>
import WeatherInfo from "../components/WeatherInfo.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      
      isHidden: true
    };
  },
  components: {
    WeatherInfo
  },
  computed: {
    ...mapState(["distIsles"])
  },
  methods: {
    compare(selected){
      this.selected = selected
    }
  }
};
</script>
