<template>
  <div class="appSon">
    <div class="con">

      <div class="headero">
        <hw-jx-headero></hw-jx-headero>
      </div>
      <hw-jx-section :data="data"></hw-jx-section>
    </div>

    <div class="evaluatess">
      <a href="javascript:void(0)">免费估价</a>
    </div>
  </div>

</template>

<script>
  import HwJxHeadero from "../components/HwJx/HwJxHeadero"
  import HwJxSection from "../components/HwJx/HwJxSection"
  import data from "../api-server/data/jx"
  import Swiper from "swiper"
  import '../../node_modules/swiper/dist/css/swiper.css'
  import '../../node_modules/swiper/dist/js/swiper.js'
    export default {
        name: "HwJx",
      components:{
        HwJxHeadero,HwJxSection
      },
      data(){
          return{
            data
          }
      },
      mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
          }

        })

      }
    }
</script>

<style scoped>
  .appSon{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
.headero{
  width: 100%;
  border-bottom: 1px solid #ebebeb;
}
.evaluatess{
  width: 90%;
  height: .7rem;
  margin: 0 auto;
}
.evaluatess a{
  display: block;
  width: 100%;
  margin: 0 auto;
  height: .5rem;
  background: #ff0d08;
  border-radius: 30px;
  font-size: .2rem;
  color: #ffffff;
  line-height: .5rem;
  text-align: center;

}

  .con{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
