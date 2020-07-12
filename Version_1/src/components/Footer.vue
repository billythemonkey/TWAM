<template>
  <div class="footer">
    <b-row>
      <b-col sm="6"><b-nav disabled>Made by Andrei Oproiu</b-nav></b-col>
      <b-col sm="6"><b-nav disabled id="currentTime">fodasse</b-nav></b-col>
    </b-row>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
  .footer {
    padding: 25px;
  }

  .col-sm-4{
    padding: 0px;
    margin: 0px;
  }

  #currentTime{
    float: right;
  }

</style>