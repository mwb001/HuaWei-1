<template>
    <div class="shopcar">
      <HwCarHeader></HwCarHeader>
      <HwCarSection @singleCheckEvent="singleCheckGood" @checkAllEvent="checkAll" @addEvent="reviceAddEvent" @minusEvent="reviceMinusEvent" :produces="produces"></HwCarSection>
      <footers></footers>
    </div>
</template>

<script>
  import HwCarHeader from "../components/shopcar/HwCarHeader"
  import HwCarSection from "../components/shopcar/HwCarSection"
  import footers from "../common/footers"
  import produces from "../api-server/data/car"
    export default {
        name: "HwCar",
      components: {footers, HwCarSection, HwCarHeader},
      data(){
          return {
            produces
          }
      },
      created(){
        this._initData()
      },
      methods:{
        // 初始化
        _initData(){
          this._counterCart()
        },
        // 购物车总价的变化
        _counterCart(){
          let totalPrice = 0
          this.produces.shops.forEach((item,pid)=>{
            if(item.checked){
              totalPrice += item.price * item.num;
            }
          })
          this.produces.totalPrice = totalPrice
        },
        // 商品数量的增加
        reviceAddEvent(pid){
          this.produces.shops[pid].num++;
          this._counterCart()
        },
        // 商品数量的减少
        reviceMinusEvent(pid){
          if(this.produces.shops[pid].num<=1){
            this.produces.shops[pid].num = 1;
          }else{
            this.produces.shops[pid].num--;
          }
          this._counterCart()
        },
        // 全选按钮选中状态的变化以及引起的一系列变化
        checkAll(){
          let checked = this.produces.checked;
          this.produces.shops.forEach((item,pid)=>{
            item.checked = checked;
          })
          this._counterCart()
        },
        // 商品的按钮选中状态的变化以及引起的一系列变化
        singleCheckGood(){
          let count = 0;
          let len = this.produces.shops.length;
          this.produces.shops.forEach((item,pid)=>{
            if(item.checked == true){++count;}
          })
          if(count == len){
            this.produces.checked = true;
          }else{
            this.produces.checked = false;
          }
          this._counterCart()
        }
      }
    }
</script>

<style scoped>
 .shopcar{
   width:100%;
   height:100%;
   display: flex;
   flex-direction: column;
 }
</style>
