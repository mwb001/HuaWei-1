<template>
    <div class="mallnew">
      <hw-mall-new-header></hw-mall-new-header>
      <hw-mall-new-nav :data="data"></hw-mall-new-nav>
      <hw-mall-new-sec :data="data"></hw-mall-new-sec>
    </div>
</template>

<script>
  import HwMallNewHeader from "../components/MallNew/HwMallNewHeader"
  import HwMallNewNav from "../components/MallNew/HwMallNewNav"
  import HwMallNewSec from "../components/MallNew/HwMallNewSec"
  import data from "../api-server/data/mallshop"
  import $ from "jquery"
    export default {
        name: "HwIdxMallNew",
      components: {HwMallNewSec, HwMallNewNav, HwMallNewHeader},
      mounted(){
          $(".lis").each(function(i){
            $(this).click(function(){
              $(".lis").each(function(){
                $(this).find('.lisp').css({display:"none"})
                $(".sss").eq(i).siblings().css({display:"none"})
                $(this).siblings().css({color:"black"})
              })
              $(this).find('.lisp').css({display:"block"})
              $(".sss").eq(i).css({display:"block"})
              $(this).css({color:"#c21b08"})
            })
          })
      },
      data(){
          return {data}
      }


    }
</script>

<style scoped>
.mallnew{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
</style>
