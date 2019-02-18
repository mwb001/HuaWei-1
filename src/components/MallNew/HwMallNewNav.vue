<template>
    <ul class="nav">
      <hw-mall-new-nav-sec :key="index" :data="n" v-for="(n,index) in data.mallshop" ></hw-mall-new-nav-sec>
    </ul>
</template>

<script>
  import HwMallNewNavSec from "./HwMallNewNavSec"
    export default {
        name: "HwMallNewNav",
      components: {HwMallNewNavSec},
      props:["data"]
    }
</script>

<style scoped>
.nav{
  height:.37rem;
  font-size:.13rem;
  color:#2f2f2f;
  margin-bottom:.04rem;
  display: flex;
  overflow-x: scroll;
}
</style>
