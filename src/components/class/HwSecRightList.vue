<template>
  <ul class="right">
    <hw-sec-right :key="a" v-for="(n,a) in data.class" :data="n"></hw-sec-right>
  </ul>
</template>

<script>
  import HwSecRight from "./HwSecRight"
    export default {
        name: "HwSecRightList",
      components: {HwSecRight},
      props:["data"]
    }
</script>

<style scoped>
  .right{
    width:72.5%;
    height:100%;
    box-sizing: border-box;
    padding:0rem .08rem 0rem .12rem;
    /*display: flex;*/
    overflow-y: scroll;
    /*flex-direction: column;*/
  }
</style>
