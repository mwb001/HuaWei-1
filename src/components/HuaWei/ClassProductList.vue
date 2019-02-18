<template>
  <div class="product_list" >
    <h3 class="list_title">{{listinfo.bigtitle}}</h3>
    <ul>
      <li :key="index" v-for="(n,index) of listinfo.phoneinfo" :class="n.classname">
        <img v-if="n.new" :src="n.new" class="new_img">
        <img class="list_img" :src="n.proimg">
        <p class="bigtitle">{{n.title}}</p>
        <p class="smalltitle">{{n.smilltitle}}</p>
        <p :class="n.pricname">￥{{n.price}}</p>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "ClassProductList",
        props:["listinfo"]
    }
</script>

<style scoped>
  .product_list{
    padding-top: 2%;
    background: #eee;
    font-size: .12rem;
  }
  .product_list .list_title{
    height: .34rem;
    font-weight: 500;
    line-height: .34rem;
    padding-left: .2rem;
    background: #fff;
  }
  .product_list ul{
    display: flex;
    background: #fff;
    flex-wrap: wrap;
  }
  .product_list li{
    height: 1.6rem;
    font-size: .14rem;
    padding: .1rem;
    margin-top: .01rem;
    background: #fff;
    display:flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    border-right: .01rem solid #eee;
    border-top: .01rem solid #eee;
  }
  .product_list .prolist{
    width: 28.2%;
  }
  .product_list .prolis{
    width: 44.7%;
  }
  .list_img{
    width: .82rem;
    height: .82rem;
    margin: .1rem 0;
  }
  .new_img{
    width: .28rem;
    height: .28rem;
    position: absolute;
    left: .16rem;
    top: .1rem;
  }
  .bigtitle{
    width: 88%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
    text-align: center;
  }
  .smalltitle{
    font-size: .12rem;
    color: #bbb;
  }
  .pro_price{
    line-height: .25rem;
    color: #ca151e;
  }
  .price{
    color: #00b5e2;
  }
</style>
