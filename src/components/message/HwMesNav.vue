<template>
  <ul class="nav">
    <hw-mes-nav-sec :key="index" :data="n" v-for="(n,index) in data.mes"></hw-mes-nav-sec>
  </ul>
</template>

<script>
  import HwMesNavSec from "./HwMesNavSec"
    export default {
        name: "HwMesNav",
      components: {HwMesNavSec},
      props:["data"]
    }
</script>

<style scoped>
  .nav{
    display: flex;
  }
 .nav li:first-child{
    color:#d0101d;
  }
</style>
