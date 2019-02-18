<template>
  <section>
    <div class="no">
      <!-- 购物车为空 -->
      <div class="noshop">
        <div class="bgno">
                <span class="iconfont icon-gouwuche">
                    <span class="iconfont icon-error"></span>
                </span>
          <h4>购物车中还没有商品，赶紧选购吧！</h4>
        </div>
        <p>去逛逛</p>
      </div>
      <!-- 热销推荐 -->
      <div class="tuijian">
        <h3>热销推荐</h3>
        <hw-car-rxtj-list></hw-car-rxtj-list>
      </div>
    </div>
    <div class="has">
      <!-- 购物车有东西 -->
      <hw-car-shop-list :data="data"></hw-car-shop-list>
      <!-- 推荐搭配 -->
      <div class="tuijian tjdp">
        <h3>推荐搭配</h3>
          <hw-car-rxtj-list></hw-car-rxtj-list>
      </div>
    </div>
    <!-- 结算 -->
    <div class="djs">
      <div class="js">
        <div class="qx">
          <p class="checkbox">
            <input type="checkbox" checked class="check_box">
          </p>
          <p>全选</p>
        </div>
        <div class="zj">
          <p>总计：<span>￥28167</span></p>
          <div class="zjjs">结算（9）</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import HwCarRxtjList from "./HwCarRxtjList"
  import HwCarShopList from "./HwCarShopList"
    export default {
        name: "HwCarSection",
      components: {HwCarShopList, HwCarRxtjList},
      props:["data"]
      
    }
</script>

<style scoped>
  /* section */
  section{
    flex: 1;
    overflow-x:hidden;
    overflow-y: auto;
    background:#f7f9f8;
  }
  .no{
    display:none;
  }
  /* noshop */
  .noshop{

    background: white;
    text-align: center;
    padding-bottom:.22rem;
  }
  .bgno{
    padding-top:.25rem;
    padding-bottom:.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bgno .icon-gouwuche{
    display: block;
    font-size:.36rem;
    color:#939393;
    position: relative;
  }
  .bgno .icon-error{
    font-size:6px;
    color:#939393;
    position: absolute;
    top: 22%;
    left: 39%;
  }
  .bgno .icon-jia{

  }
  .bgno h4{
    font-size:.11rem;
    color:#868686;
    font-weight: normal;
  }
  .noshop p{
    width:.76rem;
    height:.3rem;
    line-height: .30rem;
    text-align: center;
    margin:0 auto;
    font-size:.12rem;
    color:#b02926;
    border:2px solid #b02926;
    border-radius: .15rem;
  }
  .has{
    /*display: none;*/
  }
  .tuijian{
    text-align: center;
  }
  .tuijian h3{
    font-size:.15rem;
    color:#323433;
    line-height:.51rem;
  }
  .tjdp{
    margin-bottom:.46rem;
  }
  /* 结算 */
  .djs{
    /*display: none;*/
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
  }
  .check_box:checked{
    background: url(../../../static/img/xuan.png) left center no-repeat;
    background-position: 0 -.21rem;
    -webkit-background-size: .21rem;
    background-size: .21rem;
  }
  .js{
    width:100%;
    height:.44rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom:.41rem;
    left:0px;
  }
  .qx{
    font-size:.12rem;
    color:#949494;
    text-align: center;
    margin-left:.16rem;
    display: flex;
    align-items: center;
  }
  .qx .rad{
    display: block;
    width:.18rem;
    height:.18rem;
    line-height: .18rem;
    font-size:10px;
    color:white;
    border-radius: 50%;
    text-align: center;
    background: #ca121c;
    margin-right: 8px;
  }
  .zj{
    font-size:.14rem;
    display: flex;
    align-items: center;
  }
  .zj p{
    margin-right:.1rem;
  }
  .zj p span{
    font-weight: bold;
    color:#c31a2f;
    margin-left:7px;
  }
  .zjjs{
    width:.9rem;
    height:.38rem;
    background: #c31a2f;
    color:white;
    line-height: .38rem;
    text-align: center;
    border-radius: .19rem;
    margin-right:.26rem;
  }
</style>
