<template>
  <section>

    <hw-mes-sec-list :key="index" v-for="(n,index) in data.mes" :data="n"></hw-mes-sec-list>

  </section>

</template>

<script>

  import HwMesSecList from "./HwMesSecList"
    export default {
        name: "HwMesSec",
      components: {HwMesSecList},
      props:["data"]
    }
</script>

<style scoped>
section{
  background: #f5f5f5;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  flex:1;
}
.h3{
  font-size:.11rem;
  padding-top:.22rem;
  text-align: center;
  color:#9b9b9b;
}
</style>
