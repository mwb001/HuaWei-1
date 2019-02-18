<template>
    <div class="appson">
      <div>
        <ul class="uls">
          <hw-xp-new-product :key="index" v-for="(a,index) in data.products" :data="a"></hw-xp-new-product>
        </ul>
      </div>

      <img class="imgh" src="../../static/img/54022ea0-765a-45ff-82ea-253036f24592.png" alt="">
    </div>
</template>

<script>
  import HwXpNewProduct from "../components/HwXp/HwXpNewProduct"
  import data from "../api-server/data/xp"
    export default {
        name: "HwXp",
        components:{
          HwXpNewProduct
        },
        data(){
          return{
            data
          }
        }
    }
</script>

<style scoped>
.appson>div{
  padding: .15rem .15rem 0;
}
.uls{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.uls>a:nth-child(2n){
  margin-right: 0;
}
.uls>a:nth-child(2n+1){
  margin-right: 2%;
}
  .imgh{
    display: block;
    width: 100%;
    /*padding: 0;*/
    height:.3rem;
    background: #f1f1f1;
  }
</style>
