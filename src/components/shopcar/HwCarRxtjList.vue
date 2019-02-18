<template>
  <ul class="tuijian01">
    <hw-car-rxtj></hw-car-rxtj>
  </ul>
</template>

<script>
  import HwCarRxtj from "./HwCarRxtj"
    export default {
        name: "HwCarRxtjList",
      components: {HwCarRxtj}
    }
</script>

<style scoped>
  .tuijian01{
    margin:0px 7px;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
