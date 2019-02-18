<template>
  <li>
    <div class="jjgimg">
      <i class="radios"></i>
      <img :src="data.pic" alt="">
      <i class="shanchu"></i>
    </div>
    <div class="jiajia">
          <span class="jjgmes">
              <i class="jjgmesimg"></i>{{data.title}}
          </span>
      <div class="priceandcount">
        <div class="price">
          <p class="newprice">￥<span>{{data.newprice}}</span></p>
          <p class="oldprice">￥{{data.oldprice}}</p>
        </div>
        <div class="count">
          <span>x1</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
    export default {
        name: "HwCarShopJjg",
        props:["data"]
    }
</script>

<style scoped>
li{

    padding-left:8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:.1rem;

  }
li img{
    height:.8rem;
  }
  .jiajia{
    width:65%;
    height:.76rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  .radios{
    width:.3rem;
    height:.15rem;
    background:url("../../../static/img/shixiao.png") no-repeat;
    background-size: 100%;
    position: absolute;
    top: 44%;
    left: -33%;
  }
  .jjgimg{
    position: relative;
  }
  .shanchu{
    width:.3rem;
    height:.2rem;
    background:white;
    border:1px solid #e1e1e1;
    border-radius: 7px;
    background: white url("../../../static/img/shanchu.png") no-repeat;
    background-size: 65%;
    background-position: center;
    position: absolute;
    bottom: 11%;
    left: 35%;
  }
  .jjgmes{
    display:block;
    font-size:.12rem;
    color:#333333;
  }
  .jjgmesimg{
    display: inline-block;
    width:.4rem;
    height:.12rem;
    background:url("../../../static/img/jjg01.png") no-repeat;
    background-size: 100%;
    margin-right:.16rem;
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
.count span{
  display: block;
  height:.24rem;
  font-size:.1rem;
  font-weight: bold;
  line-height: .24rem;
  padding:0px .14rem;
  color:#353535;
}
.priceandcount{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
