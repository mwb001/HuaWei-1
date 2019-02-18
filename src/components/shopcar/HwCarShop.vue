<template>
  <li>
    <div class="lidiv">
      <div class="shop">
        <p class="checkbox">
          <input type="checkbox" checked class="check_box">
        </p>
        <img :src="data.pic" alt="">
        <div class="hasshopmes">
          <p class="mes">{{data.title}}</p>
          <div class="priceandcount">
            <div class="price">
              <p class="newprice">￥<span>{{data.newprice}}</span></p>
              <p class="oldprice">￥{{data.oldprice}}</p>
            </div>
            <div class="count">
              <p>-</p>
              <span>{{data.qal}}</span>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
      <div class="fuwuandpei">
        <div class="fuwu">
          <span class="fuwu01">服务</span>
          <div class="fuwu02">
            <span>选购</span>
            <p>延长服务宝</p>
            <p>碎屏服务宝</p>
          </div>
          <div class="fuwu03">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="fuwu pei">
          <span class="fuwu01">配</span>
          <div class="fuwu02 pei02">
            <img src="../../../static/img/428_428_1535358175728mp.jpg" alt="">
            <p>华为小天鹅蓝牙免提音箱（薄荷绿）</p>
          </div>
          <div class="fuwu03">
            <span>x1</span>
          </div>
        </div>
      </div>
      <!-- 加价购 -->
      <ul class="jjg">
        <hw-car-shop-jjg :key="index" v-if="data.jjg" v-for="(n,index) in data.jjg" :data="n"></hw-car-shop-jjg>
      </ul>
    </div>
    <!-- 加价购 -->
    <div class="jjg01">
      <h3>加价购</h3>
      <ul>
        <hw-car-shop-djjg :key="index" v-if="data.jjg01" v-for="(n,index) in data.jjg01" :data="n"></hw-car-shop-djjg>

      </ul>
    </div>
  </li>
</template>

<script>
  import HwCarShopJjg from "./HwCarShopJjg"
  import HwCarShopDjjg from "./HwCarShopDjjg"
    export default {
        name: "HwCarShop",
      components: {HwCarShopDjjg, HwCarShopJjg},
      props:["data"]

    }
</script>

<style scoped>
  li{

  }
  .lidiv{
    padding:8px 8px 8px 0rem;
    border-radius: 8px;
    background: white;
  }
  .shop{
    display: flex;
    padding-left:.35rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom:.16rem;
    position: relative;
  }
  .checkbox{
    position: absolute;
    top: 40%;
    left: 4%;
  }
  .check_box{
    width: .21rem;
    height: .21rem;
    -webkit-appearance: none;
    outline: none;
    border: none;
    background: url(../../../static/img/xuan.png) left center no-repeat;
    background-position: 0 0;
    -webkit-background-size: .21rem;
    background-size: .21rem;
    margin-right: .1rem;
    position:absolute;
    top: 40%;
    left: -6%;
  }
  .check_box:checked{
    background: url(../../../static/img/xuan.png) left center no-repeat;
    background-position: 0 -.21rem;
    -webkit-background-size: .21rem;
    background-size: .21rem;
    position:absolute;
    top: 40%;
    left: -6%;
  }


  .hasshop li img{
    padding-left:8px;
    width:.7rem;
    height:.8rem;
  }
  .hasshopmes{
    width: 65%;
    height:.76rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .mes{
    font-size:.13rem;
    color:#2d2d2d;
  }
  .priceandcount{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price{
    display:flex;
    align-items: flex-end;
    overflow: hidden;
  }
  .newprice{
    display: flex;
    align-items: flex-end;
    font-size: .12rem;
    color:#cb1514;
    font-weight: bold;
  }
  .newprice span{
    font-size:.16rem;
  }
  .oldprice{
    float: left;
    margin-left:5px;
    font-size:.09rem;
    color:#a3a3a3;
    text-decoration: line-through;
  }
  .count{
    display: flex;
    align-items: center;
  }
  .count p{
    width:.24rem;
    height:.24rem;
    line-height: .24rem;
    text-align: center;
    font-size:.18rem;
    color:#343434;
    border:2px solid #d6d6d6;
    border-radius: 50%;
  }
  .count span{
    display: block;
    height:.24rem;
    font-size:.1rem;
    font-weight: bold;
    line-height: .24rem;
    padding:0px .14rem;
    color:#353535;
  }
  /* 服务和配送 */
  .fuwuandpei{
    padding-left:.35rem;
  }
  .fuwu{
    font-size:.1rem;
    display: flex;
    align-items: center;
    color:#303030;
  }
  .fuwu01{
    color:#676767;
    width:15%;
  }
  .fuwu02{
    flex: 1;
    display: flex;
    align-items: center;
  }
  .fuwu02 span{
    padding-right:.08rem;
  }
  .fuwu02 p{
    height:.16rem;
    line-height: .16rem;
    padding:0 6px;
    border:2px solid #b3b3b3;
    border-radius: 4px;
    margin-right:6px;
  }
  .fuwu03{
    display: flex;
  }
  .fuwu03 p{
    width:3px;
    height:3px;
    border-radius:50%;
    background: #979797;
    margin-left:3px;
  }
  .pei .pei02 img{
    width:.14rem;
    height:.28rem;
    margin-right:6px;
  }
  .pei02 p{
    border:0px;
  }
  /* 加价购 */
  .jjg{
    margin-top:.12rem;
    overflow:hidden;
    padding-left:.35rem;
  }
  /* 加价购01 */
  .jjg01{
    background: white;
    text-align: center;
  }
  .jjg01 ul{
    display: flex;
    overflow:auto;
  }
  .jjg01 h3{
    font-size:.11rem;
    color:#353535;
  }
</style>
