<template>
    <div class="dcchange">
      <hw-dc-header></hw-dc-header>
      <hw-dc-nav></hw-dc-nav>
      <hw-dc-sec></hw-dc-sec>
      <hw-dc-foot></hw-dc-foot>
    </div>
</template>

<script>
  import HwDcHeader from "../components/dcchange/HwDcHeader"
  import HwDcNav from "../components/dcchange/HwDcNav"
  import HwDcFoot from "../components/dcchange/HwDcFoot"
  import HwDcSec from "../components/dcchange/HwDcSec"
    export default {
        name: "HwWdDc",
      components: {HwDcHeader,HwDcFoot, HwDcSec, HwDcNav}
    }
</script>

<style scoped>
  .dcchange{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
</style>
