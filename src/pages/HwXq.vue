<script src="../../../../../HWmodel/src/router/index.js"></script>
<template>
    <div class="xiaq">
      <div class="headert">
        <a class="ai" href="javascript:void(0)"><img src="../../static/img/yjt.gif" alt=""></a>
        <ul class="ult">
          <hw-xq-ult :key="index" v-for="(n,index) in data.ult" :data="n"></hw-xq-ult>
        </ul>
        <a class="ai" href="javascript:void(0)"><img src="../../static/img/ysd.gif" alt=""></a>
      </div>

      <div class="shap">
        <div class="banner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../../static/img/428_428_1542765208952mp.png" alt=""></div>
              <div class="swiper-slide"><img src="../../static/img/428_428_1537234348753.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../static/img/428_428_1537234348757.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../static/img/428_428_1537234348755.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../static/img/428_428_1537234348758.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../static/img/428_428_1537234348754.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../static/img/428_428_1537234348752.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../static/img/428_428_1537234348751.jpg" alt=""></div>
            </div>
            <div class="swiper-pagination">
            </div>
          </div>

        </div>
        <div class="jiat">
          <a class="aa" href="javascript:void(0)"><img src="../../static/img/icon_back_grey.png" alt=""></a>
          <a class="aa" href="javascript:void(0)"><img src="../../static/img/icon_more_grey.png" alt=""></a>
        </div>
        <div class="price">
          <p></p>
        </div>
      </div>


    </div>
</template>

<script>
  import HwXqHeadert from "../components/HwXq/HwXqHeadert"
  import HwXqUlt from "../components/HwXq/HwXqUlt"
  import Swiper from "swiper"
  import '../../node_modules/swiper/dist/css/swiper.css'
  import '../../node_modules/swiper/dist/js/swiper.js'
  import data from "../api-server/data/xq"
    export default {
        name: "HwXq",
      components:{
        HwXqHeadert,HwXqUlt
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
.xiaq{
  width: 100%;
  height: 100%;
  background: yellow;
}
  .headert{
    /*width: 100%;*/
    height: .6rem;
    background: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: none;
  }
.headert .ai{
  display: block;
  width: .3rem;
  height: .3rem;
}
.headert .ai img{
  width: 100%;
  height: 100%;
}
.headert .ult{
  width: 60%;
  height: .6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.banner{
  width: 100%;
  height:4.3rem;
  /*background: blue;*/
  position: relative;
}
.swiper-container,.swiper-slide,.swiper-slide img{
  width: 100%;
  height:100%;
  display: block;
}
.swiper-pagination{
  width: 100%;
  height: .2rem;
  /*background: red;*/
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-pagination span{
  width: .2rem;
  height: .2rem;
  display: inline-block;
  border-radius: 50%;
  opacity: 0.2;
}
.jiat{
  width: 100%;
  height: .6rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: .03rem;
  z-index: 10;
}
.jiat .aa{
  display: flex;
  align-items: center;
  justify-content: center;
  width: .4rem;
}
.jiat .aa img{
  display: block;
  width: .4rem;
  height: .4rem;
}
.jiat .aa:first-child{
  margin-left:3%;
 }

.jiat .aa:last-child{
  margin-right: 3%;
}
</style>
