<template>
  <div>
    <b-button v-on:click="isHidden = !isHidden">Comparar</b-button>
    <b-form-select
      list="myList"
      v-model="selected"
      v-bind:options="distIsles.data"
      v-if="!isHidden"
      value-field="globalIdLocal"
      text-field="local"
      v-on:change="compare(selected)"
    ></b-form-select>

    <b-row>
      <b-col>
        <weather-info :cityId="$route.params.id" />
      </b-col>
      <b-col>
        <template>
           <weather-info ref="toCompare" v-if="!isHidden" :cityId="selected" />
        </template>
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
      id: {
        cityId: this.$route.params.id
      },
      isHidden: true,
      selected: 1010500
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

<style>
</style>