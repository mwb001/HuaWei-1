<template>
  <!--轮播图-->
  <div class="swiper-container swiper-container1">
    <div class="swiper-wrapper">
      <div class="swiper-slide sp-img" :key="index" v-for="(n,index) of navimg">
        <img :src="n.imgs">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from "swiper"
    export default {
        name: "AdvertNav",
        props:["navimg"],
        mounted() {
          new Swiper('.swiper-container1', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {
              disableOnInteraction: false,
            },
            observer:true,
            pagination: {
              el: '.swiper-pagination',
            }
          })
        }
    }
</script>

<style scoped>
  /*轮播图*/
  .swiper-container1{
    width: 100%;
    height: 1.74rem;
  }
  .sp-img img{
    width: 100%;
    height: 100%;
  }
</style>
<style>
  .swiper-container1 .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    opacity: 1;
    background: #fff;
  }
  .swiper-container1 .swiper-pagination-bullet-active {
    width: 20px;
    height: 4px;
    border-radius:4px;
    background: #fff;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -.2rem;
  }
</style>
