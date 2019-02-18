<template>
  <ul class="sec">
    <hw-sec-list-sec-con :key="index" v-for="(n,index) in data.sec" :data="n"></hw-sec-list-sec-con>
  </ul>
</template>

<script>
  import HwSecListSecCon from "./HwSecListSecCon"
    export default {
        name: "HwSecListSec",
      components: {HwSecListSecCon},
      props:["data"]
    }
</script>

<style scoped>
  .sec{
    background: white;
  }


</style>
