<template>
  <div>
    <b-button-group>
      <b-button v-on:click="setData(0)">{{dailyPred0.forecastDate}}</b-button>
      <b-button v-on:click="setData(1)">{{dailyPred1.forecastDate}}</b-button>
      <b-button v-on:click="setData(2)">{{dailyPred2.forecastDate}}</b-button>
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
      ref="table"
    >
      <template v-slot:cell(globalIdLocal)="data">
        <router-link :to="`/city/${data.item.globalIdLocal}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      fields: [
        {
          key: "globalIdLocal",
          label: "Cidade",
          sortable: true,
          formatter: "translatedName",
          variant: 'dark'
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
      ],
      items: [],
      day: 0
    };
  },
  computed: {
    ...mapState(["dailyPred0", "dailyPred1", "dailyPred2", "distIsles"])
  },
  methods: {
    translatedName(globalIdLocal) {
      for (let i = 0; i < this.distIsles.data.length; i++) {
        if (globalIdLocal == this.distIsles.data[i].globalIdLocal) {
          return this.distIsles.data[i].local;
        }
      }

      return globalIdLocal + "- Unknown";
    },
    setData(day) {
      switch (day) {
        case 0:
          this.$refs.table.items = this.$store.state["dailyPred0"].data;
          break;
        case 1:
          this.$refs.table.items = this.$store.state["dailyPred1"].data;
          break;
        case 2:
          this.$refs.table.items = this.$store.state["dailyPred2"].data;
          break;
        default:
          break;
      }
    }
  }
};
</script>