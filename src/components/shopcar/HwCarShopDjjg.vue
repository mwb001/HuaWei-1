<template>
  <li class="jjg01img">
    <img :src="data.pic" alt="">
    <a>{{data.title}}</a>
    <div class="price price01">
      <p class="newprice">￥<span>{{data.newprice}}</span></p>
      <p class="oldprice">￥{{data.oldprice}}</p>
    </div>
    <div class="tianjia">+</div>
  </li>
</template>

<script>
    export default {
        name: "HwCarShopDjjg",
      props:["data"]

    }
</script>

<style scoped>
  .jjg01img{
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:30%;
    flex-shrink: 0;
    flex-wrap: nowrap;
  }
  .jjg01img img{
    height:.55rem;
    margin:7px auto;
  }
  .jjg01img a{
    width:.7rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    font-size:.11rem;
    color:#323232;
  }
  .tianjia{
    width:.17rem;
    height:.17rem;
    border:2px solid #ececec;
    border-radius: 50%;
    font-size:8px;
    color:#323232;
    line-height:.17rem;
    text-align: center;
    position: absolute;
    top:0px;
    right: -1px;
  }
  .price01{
    width:.9rem;
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
  .oldprice{
    float: left;
    margin-left:5px;
    font-size:.09rem;
    color:#a3a3a3;
    text-decoration: line-through;
  }

</style>
