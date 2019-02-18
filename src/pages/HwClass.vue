<template>
    <div class="cla">
      <Headers></Headers>
      <hw-class-sec :data="data"></hw-class-sec>
      <footers></footers>
    </div>
</template>

<script>
  import Headers from "../components/class/Headers"
  import footers from "../common/footers"
  import HwClassSec from "../components/class/HwClassSec"
  import data from "../api-server/data/class"
    export default {
        name: "HwClass",
      components: {HwClassSec, Headers, footers},
      data(){
          return {data}
      },
      mounted() {
          $(".leftli").each(function (i) {
            $(this).click(function(){
              $(".leftli").each(function () {
                $(this).siblings().css({color:"#333333"})
                $(".leftli").find("p").css({display:"none"})
                $(".xxclass").css({display:"none"})
              })
              $(".leftli").find("p").eq(i).css({display:"block"})
              $(".xxclass").eq(i).css({display:"block"})
              $(this).css({color:"#bf1820"})
            })
          })
      }
    }
</script>

<style scoped>
.cla{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
