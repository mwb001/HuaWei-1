<template>
  <nav>
    <img src="../../../static/img/dcgh.jpg" alt="">
    <ul>
      <li class="first">
        <span>1</span>
        <p>查询可购买电池更换服务</p>
      </li>
      <li class="zxs">
        <span class="iconfont icon-youjiantou"></span>
      </li>
      <li class="first sec">
        <span>2</span>
        <p>购买电池更换服务</p>
      </li>
    </ul>
  </nav>
</template>

<script>
    export default {
        name: "HwDcNav"
    }
</script>

<style scoped>
  /* nav */
  nav img{
    width:100%;
    height:1.4rem;
  }
  nav ul{
    width:100%;
    height:.36rem;
    display: flex;
    align-items: center;
  }
  .first{
    width:49%;
    display: flex;
    font-size:.1rem;
    color:#2c2c2c;
    align-items: center;
  }
  .first span{
    display: inline-block;
    width:.18rem;
    height:.18rem;
    line-height: .18rem;
    text-align: center;
    border-radius: 50%;
    color:white;
    font-size:.1rem;
    background: #cf1721;
    margin-left: .15rem;
    margin-right: .07rem;
  }
  .zxs{
    margin:0 .17rem;
  }
  .zxs span{
    display: block;
  }
  .zxs .iconfont{
    font-size:.1rem;
    color:#9c9c9c;
  }
  .sec span{
    background: #979797;
  }
</style>
