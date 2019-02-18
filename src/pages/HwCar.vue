<template>
    <div class="shopcar">
      <HwCarHeader></HwCarHeader>
      <HwCarSection :data="data"></HwCarSection>
      <footers></footers>
    </div>
</template>

<script>
  import HwCarHeader from "../components/shopcar/HwCarHeader"
  import HwCarSection from "../components/shopcar/HwCarSection"
  import footers from "../common/footers"
  import data from "../api-server/data/car"
    export default {
        name: "HwCar",
      components: {footers, HwCarSection, HwCarHeader},
      data(){
          return {data}
      },
      mounted() {

      }
    }
</script>

<style scoped>
 .shopcar{
   width:100%;
   height:100%;
   display: flex;
   flex-direction: column;
 }
</style>
