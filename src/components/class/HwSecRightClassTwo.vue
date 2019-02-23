<template>
  <li>
    <div class="classtwomes">
      <h3></h3>
      <ul class="cshoplist">
        <hw-right-class-three :id="n.id" :produceIndex="index" :key="index" v-for="(n,index) in produce" :produce="n"></hw-right-class-three>
      </ul>
    </div>
  </li>
</template>

<script>
  import HwRightClassThree from "./HwRightClassThree"
    export default {
        name: "HwSecRightClassTwo",
      components: {HwRightClassThree},
      props:["data","produce"],
      methods:{
          xx(a,b){
            console.log(a,b)
          }
      }
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
