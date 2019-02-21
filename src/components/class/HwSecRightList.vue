<template>
  <ul class="right">
    <hw-sec-right v-for="(aa,index) in produce.goods" :key="index" :produce="aa" :data="data.class"></hw-sec-right>
  </ul>
</template>

<script>
  import HwSecRight from "./HwSecRight"
    export default {
        name: "HwSecRightList",
      components: {HwSecRight},
      props:["data","produce"]
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
