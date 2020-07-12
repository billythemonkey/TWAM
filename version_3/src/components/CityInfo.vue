<template>
    <div>
        <b-col sm="3">
            <b-row>
                <b-col>
                    <h1>{{cityname}}</h1>
                </b-col>
                <b-col>
                    <h1>{{temp}}</h1>
                </b-col>
            </b-row>
            <b-row>
            </b-row>
        </b-col>
    </div>
</template>

<script>
export default {
  data () {
    return {
      cityname: 'Beja',
      temp: '23'
    }
  }
}
</script>

<style scoped>

</style>
