<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../../../static/img/1.jpg"></div>
      <div class="swiper-slide"><img src="../../../static/img/1.jpg"></div>
      <div class="swiper-slide"><img src="../../../static/img/1.jpg"></div>
      <div class="swiper-slide"><img src="../../../static/img/1.jpg"></div>
      <div class="swiper-slide"><img src="../../../static/img/1.jpg"></div>
      <div class="swiper-slide"><img src="../../../static/img/1.jpg"></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
    export default {
      name: "HwShoppinginfoBanner",
    }
</script>

<style scoped>
  .swiper-container{
    position: relative;
  }
.swiper-container,
.swiper-container .swiper-wrapper{
  width: 100%; height: 100%;
}
.swiper-container .swiper-wrapper .swiper-slide{
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
}
.swiper-container .swiper-wrapper img{
  width: 90%; height: 80%;
}
.swiper-container .swiper-pagination{
  width: 12%; line-height: .25rem; text-align: center; border-radius: .15rem;
  background: rgba(0,0,0,0.15); font-size: .13rem; color: #fffefe;
  box-shadow: 0 0.182em 0.55em 1px rgba(0,0,0,.1);
  position: absolute; left: 85%; bottom: .2rem;
}
</style>
