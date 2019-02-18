<template>
    <ul class="ul">
      <hw-mes-sec-one @tiao="tiao(index)" v-if="data.hd" :keyy="index" :key="index" v-for="(n,index) in data.hd" :data="n"></hw-mes-sec-one>
      <li v-if="data.is">
        <h3 class="h3">已加载全部</h3>
      </li>
      <li class="no" v-if="data.is==''">
        <img class="noxiaoxi" src="../../../static/img/nobjt.png" alt="">
        <span class="nospan">没有系统消息</span>
      </li>
    </ul>
</template>

<script>
  import HwMesSecOne from "./HwMesSecOne"
    export default {
        name: "HwMesSecList",
      components: {HwMesSecOne},
      props:["data"],
      methods:{
        tiao(index){

        }
      }
    }
</script>

<style scoped>
.ul{
  width:100%;
  height:100%;
  display:none;
}
.ul:first-child{
  display: block;
}
.h3{
  font-size:.11rem;
  padding-top:.22rem;
  text-align: center;
  color:#9b9b9b;
}
  .noxiaoxi{
    width:.87rem;
    height:.82rem;
    margin:0 auto;
  }
  .nospan{
    display: block;
    font-size: .13rem;
    color:#888888;
    margin-top:.15rem;
  }
  .no{
    margin-top:40%;
    text-align: center;
  }
</style>
