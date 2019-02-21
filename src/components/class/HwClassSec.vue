<template>
    <section>
      <hw-sec-left-list :data="data"></hw-sec-left-list>
      <hw-sec-right-list :produce="produce" :data="data"></hw-sec-right-list>
    </section>
</template>

<script>
  import HwSecLeftList from "./HwSecLeftList"
  import HwSecRightList from "./HwSecRightList"
    export default {
        name: "HwClassSec",
      components: {HwSecRightList, HwSecLeftList},
      props:["data","produce"]
    }
</script>

<style scoped>
  section{
    display:flex;
    flex:1;
    overflow-x: hidden;
    overflow-y: auto;
  }


  /*right*/


</style>
