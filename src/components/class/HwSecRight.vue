<template>
  <!--为您推荐-->
  <li class="xxclass">
    <ul class="img">
      <hw-sec-right-img :key="a" v-for="(n,a) in data.imgs" :data="n"></hw-sec-right-img>
    </ul>
    <ul class="tjclass">
      <hw-sec-right-img-two :key="a" v-for="(n,a) in data.imgtwo" :data="n"></hw-sec-right-img-two>
    </ul>
    <ul class="classtwo">
      <hw-sec-right-class-two :key="a" v-for="(n,a) in data.classone" :data="n"></hw-sec-right-class-two>
    </ul>
  </li>
</template>

<script>
  import HwSecRightImg from "./HwSecRightImg"
  import HwSecRightImgTwo from "./HwSecRightImgTwo"
  import HwSecRightClassTwo from "./HwSecRightClassTwo"
    export default {
        name: "HwSecRight",
      components: {HwSecRightClassTwo, HwSecRightImgTwo, HwSecRightImg},
      props:["data"]
    }
</script>

<style scoped>
.xxclass{
  display: none;
    flex-shrink: 0;
    flex-wrap: nowrap;
  }
 .xxclass:first-child{
    display: block;
  }
  .img{
  }

  .tjclass{
    display:flex;
    overflow-x: scroll;
    margin-top:6px;
  }

  .classtwo{
    /*padding:;*/
  }
  .classtwo li{

  }

</style>
