<template>
  <div>
    <b-button-group>
      <b-button>{{dailyPred0.forecastDate}}</b-button>
      <b-button>{{dailyPred1.forecastDate}}</b-button>
      <b-button>{{dailyPred2.forecastDate}}</b-button>
    </b-button-group>
    <b-table
      id="table"
      striped
      outlined
      dark
      fixed
      sticky-header
      hover
      :items="dailyPred0.data"
      :fields="fields"
    ></b-table>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
    return {
      fields: [
        {
          key: "globalIdLocal",
          label: "Cidade",
          sortable: true,
          formatter: "translatedName"
        },
        {
          key: "tMin",
          label: "Min ºC",
          sortable: true
        },
        {
          key: "tMax",
          label: "Max ºC",
          sortable: true
        },
        {
          key: "precipitaProb",
          label: "Precipitação ( % )",
          sortable: true
        },
        {
          key: "predWindDir",
          label: "Direção do Vento"
        }
      ]
    }
  },
  computed: {
    ...mapState(["dailyPred0", "dailyPred1", "dailyPred2", "distIsles"])
  },
  methods: {
    translatedName(globalIdLocal) {
      //let cities = this.$store.getters.getDistIsle
      for (let i = 0; i < this.distIsles.data.length; i++) {
        if (globalIdLocal == this.distIsles.data[i].globalIdLocal) {
          return this.distIsles.data[i].local;
        }
      }

      return globalIdLocal + "- Unknown";
    }
  }
};
</script>

<style>
</style>