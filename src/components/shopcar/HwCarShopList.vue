<template>
  <ul class="hasshop">
    <hw-car-shop @singleCheckEvent="singleCheckGood" @addEvent="reviceAddEvent" @minusEvent="reviceMinusEvent" :produces="item" :pid="index" :key="index" v-for="(item,index) in produces.shops">

    </hw-car-shop>
  </ul>
</template>

<script>
  import HwCarShop from "./HwCarShop"
    export default {
        name: "HwCarShopList",
      components: {HwCarShop},
      props:["produces"],
      methods:{
        reviceAddEvent(pid){
          this.$emit("addEvent",pid)
        },
        reviceMinusEvent(pid){
          this.$emit("minusEvent",pid)
        },
        singleCheckGood(){
          this.$emit("singleCheckEvent")
        }
      }
    }
</script>

<style scoped>
  .hasshop{
    padding:.1rem;
  }
</style>
