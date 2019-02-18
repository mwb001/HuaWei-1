<template>
  <li>
    <div class="left">
      <h3><b>￥</b> {{data.eDu}}</h3>
      <p>{{data.profile}}</p>
    </div>
    <div class="right">领取</div>
  </li>
</template>

<script>
  export default {
    name: "HwMySlide",
    props:['data']
  }
</script>

<style scoped>
li{
  width: 48%; height: 1.2rem;
  flex-shrink: 0; flex-wrap: nowrap; margin-right: .1rem;
  background: url("../../../static/img/vip_bg.png");
  background-size: 100% 100%; display: flex; position: relative;
}
li .left{
  width: 75%; height: 85%;
  position: absolute; left: 0; top: .1rem; box-sizing: border-box; padding: .1rem;
}
li .left h3{
  font-size: .3rem; color: #e62f33;
}
li .left h3 b{
  font-size: .14rem; color: #e62f33;
}
li .left p{
  font-size: .13rem; color: #8e8e8e;
}
li .right{
  width: 20%; height: 85%;
  position: absolute; right: .08rem; top: .1rem;
  display: flex; align-items: center; justify-content: center;
  font-size: .14rem; color: white;
}
</style>
