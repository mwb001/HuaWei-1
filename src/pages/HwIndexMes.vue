<template>
    <div class="mes">
      <hw-mes-header></hw-mes-header>
      <hw-mes-nav :data="data"></hw-mes-nav>
      <hw-mes-sec :data="data"></hw-mes-sec>
    </div>
</template>
<script>
  import HwMesHeader from "../components/message/HwMesHeader"
  import HwMesNav from "../components/message/HwMesNav"
  import HwMesSec from "../components/message/HwMesSec"
  import data from "../api-server/data/message"
  // import $ from "jquery"
  import "jquery"
    export default {
      name: "Hw-Index-Mes",
      components: {HwMesSec, HwMesNav, HwMesHeader},
      data() {
        return {
          data
        }
      },
      mounted() {
        var lim = $(".lim");
        var count = 0;
        var lis = $(".lis");
        var c = 0;
        lis.each(function (i) {
          $(this).click(function () {
            lis.each(function () {
              $(this).siblings().css({color: "#383838"})
              $(".ul").eq(i).siblings().css({display: "none"})
            })
            $(this).css({color: "#d0101d"})
            $(".ul").eq(i).css({display: "block"})
          })
          })
      }
    }
</script>

<style scoped>
.mes{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
h3{
  color:#999999;
  font-size:.11rem;
  font-weight: normal;
  margin-top:.22rem;
  margin:0 auto;
}
</style>
