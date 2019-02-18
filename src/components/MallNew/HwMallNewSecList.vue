<template>
  <!--顶部-->
  <div class="sss">
    <hw-sec-list-top :data="data.top"></hw-sec-list-top>
    <hw-sec-list-sec :data="data"></hw-sec-list-sec>
  </div>
</template>

<script>
  import HwSecListTop from "./HwSecListTop"
  import HwSecListSec from "./HwSecListSec"
    export default {
        name: "HwMallNewSecList",
      components: {HwSecListSec, HwSecListTop},
      props:["data"]
    }
</script>

<style scoped>
  .sss{
    display: none;
    width:100%;
    flex-shrink: 0;
    flex-wrap: nowrap;
  }
  .sss:first-child{
    display:block;
  }


</style>
