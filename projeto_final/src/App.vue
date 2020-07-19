<template>
  <b-container id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-navbar-brand>
          <router-link to="/">EMIPBeja</router-link>
        </b-navbar-brand>
        <b-nav-item>
          <b-button collapsed v-on:click="$router.go(-1)">
            Voltar
          </b-button>
        </b-nav-item>
        <b-nav-item>
          <b-button v-b-toggle.sidebar>Sobre</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-sidebar id="sidebar" :title="appInfo.projectName" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <p>{{appInfo.info}}</p>
        <p>Utilizou-se o API do IPMA: <a :href="appInfo.refAPI">{{appInfo.refAPI}}</a></p>
        <p>Desenvolvido por: {{appInfo.author}}</p>
        <p>Contacto: {{appInfo.contact}}</p>
      </div>
    </b-sidebar>
    <router-view />
  </b-container>
</template>


<script>
import { mapState } from 'vuex'

export default {
  components: {},
  mounted() {
    this.$store.dispatch("getDailyPredDay0"),
    this.$store.dispatch("getDailyPredDay1"),
    this.$store.dispatch("getDailyPredDay2"),
    this.$store.dispatch("getWeatherType"),
    this.$store.dispatch("getDistIsles"),
    this.$store.dispatch("getWindType");
  },
  computed: {
    ...mapState([
      'appInfo'
    ])
  }
}
</script>

<style>
  div{
    margin: 10px;
    text-align:center;
  }
  select{
    margin-top: 1rem;
  }
  .b-table-sticky-header {
    overflow-y: auto;
    max-height: 600px;
}
</style>
