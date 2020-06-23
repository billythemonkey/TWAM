<template>
  <div class="home">
    <b-col>
        <b-col sm="8" offset="2">
          <SearchBox />
        </b-col>
        <b-row>
          <b-col sm="6">
            <b-col>
              <SelectDate />
            </b-col>
            <b-col>
              <Table />
            </b-col>
          </b-col>
          <b-col sm="6">
            <h1>Teste</h1>
          </b-col>
        </b-row>
    </b-col>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBox from '../components/SearchBox.vue'
import Table from '../components/Table.vue'
import SelectDate from '../components/SelectDate.vue'

export default {
  name: 'Home',
  components: {
    SearchBox,
    Table,
    SelectDate
  }
}

</script>

<style scoped>
  div{
    border: 1px;
    border-style: solid;
    border-color: black;
  }
</style>
