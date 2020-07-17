<template>
  <b-container id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-navbar-brand>
          <router-link to="/">Estação Meteorológica do IPbeja</router-link>
        </b-navbar-brand>
        <b-nav-item>
          <b-button v-b-toggle.sidebar-variant>Sobre</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
    <router-view />
  </b-container>
</template>


<script>
export default {
  components: {},
  mounted() {
    this.$store.dispatch("getDailyPredDay0"),
    this.$store.dispatch("getDailyPredDay1"),
    this.$store.dispatch("getDailyPredDay2"),
    this.$store.dispatch("getWeatherType"),
    this.$store.dispatch("getDistIsles"),
    this.$store.dispatch("getWindType");
  }
}
</script>

<style>

</style>
