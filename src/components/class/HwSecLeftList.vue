<template>
  <ul class="left">
    <hw-sec-left :key="a" v-for="(n,a) in data.class" :data="n"></hw-sec-left>
  </ul>
</template>

<script>
  import HwSecLeft from "./HwSecLeft"
    export default {
        name: "HwSecLeftList",
      components: {HwSecLeft},
      props:["data"]
    }
</script>

<style scoped>
  .left{
    width:27.5%;
    font-size:.13rem;
    color:#575757;
    padding-top:5px;
  }
</style>
