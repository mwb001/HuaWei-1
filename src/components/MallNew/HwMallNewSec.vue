<template>
    <section>
      <hw-mall-new-sec-list :key="index" :data="n" v-for="(n,index) in data.mallshop"></hw-mall-new-sec-list>
    </section>
</template>

<script>
  import HwMallNewSecList from "./HwMallNewSecList"
    export default {
        name: "HwMallNewSec",
      components: {HwMallNewSecList},
      props:["data"]
    }
</script>

<style scoped>
  section{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
  }

</style>
