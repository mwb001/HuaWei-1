<template>
  <li>
    <img src="../../../static/img/428_428_1535358175728mp.jpg" alt="">
    <p>HUAWEI Mate 20</p>
    <div class="price price01">
      <p class="newprice">￥<span>999</span></p>
      <p class="oldprice">￥699</p>
    </div>
    <div class="rxtjcar">
        <span class="iconfont icon-gouwuche">
        </span>
    </div>
  </li>
</template>

<script>
    export default {
        name: "HwCarRxtj"
    }
</script>

<style scoped>
li{
    width:49%;
    height:2.17rem;
    background:white;
    border-radius: 8px;
    margin-bottom:6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
li img{
    height:.91rem;
    margin-bottom: .19rem;
  }
li p{
    font-size:.11rem;
    margin-bottom: .11rem;
  }
  .rxtjcar{
    width:.23rem;
    height:.23rem;
    line-height: .23rem;
    text-align: center;
    border-radius: 50%;
    border:2px solid #ebebeb;
    position: absolute;
    top:6px;
    right:6px;
  }
  .rxtjcar .icon-gouwuche{
    display: block;
    font-size:.18rem;
    line-height: .23rem;
    color:#343434;
    position: relative;
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
.price01{
  width:.9rem;
}
</style>
