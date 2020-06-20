<template>
  <div id="app">
    <Navbar/>
    <b-container class="bv-example-row">
      <b-row class="searchBox">
        <b-col sm="8" offset="6"><SearchBox /></b-col>
      </b-row>
      <b-row>
        <b-col sm="8"><Tabble /></b-col>
      </b-row>
    </b-container>
    
    <Body/>
    <Footer/>
  </div>
</template>

<script>

import Navbar from "./components/Navbar.vue";
import Tabble from "./components/Tabble.vue"
import Footer from "./components/Footer.vue";
import SearchBox from "./components/SearchBox.vue"

export default {
  name: 'App',
  components: {
    Navbar,
    Tabble,
    SearchBox,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.searchBox{
  margin-top: 75px;
  margin-bottom: 50px;
}
.bv-example-row{
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
}
</style>
