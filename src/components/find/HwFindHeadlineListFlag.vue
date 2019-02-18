<template>
    <div class="flag">
      <div class="img"><img :src="data.img"></div>
      <div class="intro">
        <p>{{data.tit}}</p>
        <p v-if="data.retit">{{data.retit}}</p>
        <p></p>
        <p>
          <b>{{data.riqi}}</b>
          <b>
            <span class="iconfont icon-liulan"></span>
            <em>{{data.browsing}}</em>
          </b>
        </p>
      </div>
    </div>
</template>

<script>
    export default {
      name: "HwFindList",
      props:['data']
    }
</script>

<style scoped>
  .flag{ width: 100%; margin-bottom: .06rem;}
  .flag img{
    width: 100%; height: 2rem;
  }
  .flag .intro{
    padding: 0 .12rem; font-size: .22rem; background: white;
  }
  .flag .intro p:nth-child(1){
    width: 100%;line-height: .4rem;font-size: .16rem;color: #000000; font-weight: bold;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .flag .intro p:nth-child(2){
    width: 100%;line-height: .2rem;font-size: .14rem;color: #666666;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .flag .intro p:nth-child(3){
    width: 100%; height: 1px; background: #f2f2f2;margin: .1rem 0;
  }
  .flag .intro p:nth-child(4){
    width: 100%;line-height: .2rem;font-size: .14rem;color: #cdcdcd;
    display: flex; align-items: center; justify-content: space-between;
  }
</style>
