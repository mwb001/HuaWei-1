<template>
  <li>
    <img :src="data.img" alt="">
    <div class="secdiv">
      <h3>{{data.tit}}</h3>
      <p class="dbsj">
        <span>{{data.time}}</span>
        <span class="iconyc">{{data.hot}}</span>
      </p>
    </div>
  </li>
</template>

<script>
    export default {
        name: "HwSecListSecCon",
      props:["data"]
    }
</script>

<style scoped>
  .sec li{
    height:.92rem;
    margin-bottom:.05rem;
    display: flex;
    justify-content: space-between;
  }
  .sec img{
    width:41.5%;
    height:100%;
  }
  .secdiv{
    padding:.12rem .17rem .07rem;
    background:#f7f9f8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .secdiv h3{
    font-size:.13rem;
    color:#000000;
    font-weight: normal;
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
