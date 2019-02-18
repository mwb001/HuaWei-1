<template>
  <ul class="hasshop">
    <hw-car-shop :key="index" v-for="(n,index) in data.products" :data="n"></hw-car-shop>
  </ul>
</template>

<script>
  import HwCarShop from "./HwCarShop"
    export default {
        name: "HwCarShopList",
      components: {HwCarShop},
      props:["data"]
    }
</script>

<style scoped>
  .hasshop{
    padding:.1rem;
  }
</style>
