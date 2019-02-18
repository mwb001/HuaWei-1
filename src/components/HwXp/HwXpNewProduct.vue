<template>

      <a class="as" href="javascript:void(0)">
        <li>
            <div class="imgs">
              <img :src="data.imgs" alt="">
              <p>{{data.ps}}</p>
            </div>
            <div class="pinp">{{data.pinp}}</div>
            <div class="intro">{{data.intro}}</div>
            <div class="money">
              <span>￥</span><h4>{{data.money}}</h4><h6>{{data.qi}}</h6>
              <h5>{{data.shu}}</h5><a href="javascript:void(0)">{{data.buy}}</a>
            </div>
        </li>
      </a>

</template>

<script>
    export default {
        name: "HwXpNewProduct",
      props:['data']
    }
</script>

<style scoped>
  .as{
    display: block;
    width: 49%;
    /*height: 3.5rem;*/
    margin-bottom: .16rem;
    float: left;
    text-align: center;
  }
  .as li{
    width: 100%;
    height: 100%;
  }
  .as li .imgs{
    width: 100%;
    height: 74%;
    position: relative;
  }
  .as li .imgs img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
  .imgs p{
    font-size: .12rem;
    color: #ffe7dc;
    padding-left: .1rem;
    padding-right: .1rem;
    height: .2rem;
    background: #e16773;
    line-height: .2rem;
    border-bottom-left-radius: 6px;
    border-top-right-radius: 6px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .pinp{
    font-size: .16rem;
    color: #000;
    margin-top: .14rem;
  }
  .intro{
    font-size: .12rem;
    color: #808080;
    margin-top: .08rem;
  }
  .money{
    font-size: .15rem;
    color: #000;
    display: flex;
    justify-content: center;
    margin-top: .1rem;
  }
  .money span{
    font-size: .1rem;
    color: #000;
  }
  .money h4{
    font-size: .16rem;
  }
  .money h6,.money h5{
    font-weight: 100;
  }
  .money h6{
    margin-left: .03rem;
    margin-top: .03rem;
  }
  .money h5{
    margin-left: .1rem;
    margin-right: .1rem;
  }
  .money a{
    color: #ca141d;
  }
</style>

