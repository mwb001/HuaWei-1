<template>
    <div class="con">
      <sever-head></sever-head>
      <div class="content">
          <advert-nav :navimg = "severdata.severnavdata"></advert-nav>
          <sever-content :key="index" v-for="(n,index) of severdata.severcontent" :secon = "n"></sever-content>
      </div>
      <ul class="cpntact">
        <li>
          <img src="../../static/img/ph.jpg" alt="">
          <span>客服电话</span>
        </li>
        <li>
          <img src="../../static/img/ke.jpg" alt="">
          <span>在线客服</span>
        </li>
        <li>
          <img src="../../static/img/yi.jpg" alt="">
          <span>意见客服</span>
        </li>
      </ul>
    </div>
</template>

<script>
  import SeverHead from "../components/HwSever/SeverHead"
  import AdvertNav from "../components/HuaWei/AdvertNav"
  import SeverContent from "../components/HwSever/SeverContent"
  import severdata from "../api-server/data/severdata"
    export default {
        name: "HwSever",
        components:{
          SeverContent,
          SeverHead,
          AdvertNav
        },
        data(){
          return {
            severdata
          }
        },
        mounted(){
          $(".content").scroll(function(){
            if($('.content').scrollTop()>1560){
              $(".trouble").css({"width":"100%","position":"fixed","left":"0","top":".46rem","padding": "0 .2rem","border-bottom":"1px solid #eee","margin-left":"0"})
              // $(".trolist").css({"flex":"1","overflow-y":"auto","overflow-x":"hidden"})
            }else{
              $(".trouble").css({"position":"static","background":"#fff","padding":"0"})
            }
          })
        }
    }
</script>

<style scoped>
  .con{
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .cpntact{
    display:flex ;
    padding: .1rem 0;
    justify-content: center;
  }
  .cpntact li{
    border: 1px solid #eee;
    display: flex;
    padding: .05rem .08rem;
    margin: 0 .1rem;
    align-items: center;
    border-radius: .2rem;
  }
  .cpntact img {
    width: .16rem;
    height: .16rem;
    margin-right: .05rem;
  }
  .cpntact span{
    display: block;
    font-size: .14rem;
    color: #333;
  }
</style>
