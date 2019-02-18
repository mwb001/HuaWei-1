<template>
  <div class="swiper-container xianshi jingpin">
    <div class="swiper-wrapper">
      <div class="swiper-slide xianshigouitem" v-for="x in data">
        <p>
          <img :src="x.imgs" alt="">
          <span>{{x.spans}}</span>
        </p>
        <h3 class="jiage" v-if="x.price">{{x.price}}</h3>
        <h3>{{x.htitle}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "contentitem",
        props:["data"]
    }
</script>

<style scoped>

</style>
