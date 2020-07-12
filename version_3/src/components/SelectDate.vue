<template>
    <div>
        <b-row>
            <b-col>
                <label for="select">Dia da previsão</label>
            </b-col>
            <b-col sm="8">
                <b-form-select id="select" v-model="selected" :options="options" selected='0'></b-form-select>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 0,
      options: [
        { value: 0, text: 'Hoje' },
        { value: 1, text: 'Amanhã' },
        { value: 2, text: 'Depois de amanhã' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
