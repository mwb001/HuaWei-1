<template>
  <li>
    <div class="classtwomes">
      <h3>{{data.tit}}</h3>
      <ul class="cshoplist">
        <hw-right-class-three :key="a" v-for="(n,a) in data.shop" :data="n"></hw-right-class-three>
      </ul>
    </div>
  </li>
</template>

<script>
  import HwRightClassThree from "./HwRightClassThree"
    export default {
        name: "HwSecRightClassTwo",
      components: {HwRightClassThree},
      props:["data"]
    }
</script>

<style scoped>
  .classtwomes{
    text-align: center;
  }
  .classtwomes h3{
    height:.55rem;
    line-height: .55rem;
    font-size:.13rem;
    color:#333333;
    font-weight: normal;
  }
  .cshoplist{
    display: flex;
    flex-wrap: wrap;
  }

</style>
