<template>
  <div class="db">
    <img :src="data.img" alt="">
    <div class="dbjj">
      <h3>{{data.tit}}</h3>
      <span>{{data.content}}</span>
      <p class="dbsj">
        <span>{{data.time}}</span>
        <span class="iconyc">{{data.hot}}</span>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HwSecListTop",
      props:["data"]
    }
</script>

<style scoped>
  .db img{
    width:100%;
  }
  .dbjj{
    margin:.12rem .16rem .09rem;
  }
  .dbjj h3{
    font-size:.16rem;
    color:#000000;
    font-weight: normal;
    margin-bottom:.12rem;
  }
  .dbjj span{
    display: block;
    font-size:.11rem;
    line-height: .24rem;
    color:#5d5d5d;
    margin-bottom:.04rem;
    border-bottom: 3px solid #efefef;
  }
  .dbsj{
    height:.3rem;
    color:#b2b2b2;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dbsj span{
    font-size:.09rem;
    line-height: .3rem;
    border:0px;
    color:#b7b7b7;
  }
  .iconyc{
    padding-left:.3rem;
    background: url("../../../static/img/iconyc.png") no-repeat;
    background-size: 40%;
    background-position: 1px 7px;
  }
</style>
