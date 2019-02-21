<template>
  <!--为您推荐-->
  <li class="xxclass">
    <ul class="img"  v-if="produce.classname">
      <hw-sec-right-img :key="index" v-for="(n,index) in produce.imgs" :produce="n"></hw-sec-right-img>
    </ul>
    <ul class="tjclass"  v-if="produce.imgtwo">
      <hw-sec-right-img-two :key="index" v-for="(n,index) in produce.imgtwo" :produce="n"></hw-sec-right-img-two>
    </ul>
    <ul class="classtwo">
      <hw-sec-right-class-two :produce="produce"></hw-sec-right-class-two>
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
      props:["data","produce"]
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
