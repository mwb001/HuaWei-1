<template>
  <li>
    <img :src="data.img" alt="">
  </li>
</template>

<script>
    export default {
        name: "HwSecRightImgTwo",
      props:["data"]
    }
</script>

<style scoped>
  .tjclass li{
    width:30%;
    margin-right: .06rem;
    flex-shrink: 0;
    flex-wrap: nowrap;
  }
  .tjclass li img{
    border-radius:4px;
    height:.38rem;
    width:100%;
  }
</style>
