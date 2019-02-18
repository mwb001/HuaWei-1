<template>

    <a href="javascript:void(0)">
      <li>
        <img class="imgs" :src="data.img" alt="">
        <p>{{data.pinp}}</p>
        <span>{{data.hei}}</span>
        <div class="hs"><span>￥</span><h5>{{data.money}}</h5><span>￥</span><h6>{{data.money1}}</h6></div>
      </li>
    </a>


</template>

<script>
    export default {
        name: "HwJxSectionList",
      props:['data']
    }
</script>

<style scoped>
  a{
    display: block;
    width: 40%;
    height: 100%;
    flex-shrink: 0;
    flex-wrap: nowrap;
    margin-right: .1rem;
  }
li{
  width: 100%;
  height: 100%;
  /*background: orange;*/
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
}
  .imgs{
    display: block;
    width: 50%;
    height:40%;
  }
  p{
    font-size: .14rem;
    color: #333333;
    margin-top: .08rem;
  }
  span{
    font-size: .1rem;
    color: lightslategray;
    margin-top: .05rem;
  }
  .hs{
    display: flex;
    margin-top: .05rem;
  }
  .hs span{
    color: orangered;
    margin-top: -.01rem;
  }
  h5{
    font-size: .12rem;
    color: orangered;
    margin-right: .1rem;
  }
  h6{
    font-size: .1rem;
    color: dimgray;
    text-decoration: line-through;
  }
</style>
