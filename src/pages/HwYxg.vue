<template>
  <div class="appSon">
    <hw-word-header :data="data.page"></hw-word-header>
    <div class="main">
      <router-link to="/yxgRule" class="activeRule">活动规则</router-link>
      <div class="yxg_flag_img"><img src="../../static/img/yxg_flag_img.jpg"></div>
      <div class="yxg_nav">
        <ul class="nav_tit">
          <li class="yxg_curr_li">列表</li><li>我的</li>
        </ul>
        <ul class="nav_con">
          <li>
            <router-link to="">
              <div class="imgs"><img src="../../static/img/yxg_lb_img_01.png" alt=""></div>
              <div class="info">
                <div class="tit">
                  <h6>HUAWEI Mate 20 Pro</h6>
                  <p>智慧新高度</p>
                </div>
                <div class="price">
                  <span>￥ </span><b>5399</b><span> 起</span>
                </div>
              </div>
            </router-link>
            <div class="dixian">
              <div class="line"></div><p>人家有底线滴</p><div class="line"></div>
            </div>
          </li>
          <li>
            <div class="noJilu">
              <img src="../../static/img/icon27.png">
              <div class="word">
                <span>你还无相关记录</span><img src="../../static/img/icon9.png">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import HwWordHeader from "../components/public/HwWordHeader"
  import data from "../api-server/data/yxg"
  export default {
    name: "HwYxg",
    components:{
      HwWordHeader
    },
    data(){
      return{
        data
      }
    },
    mounted(){
      $('.yxg_nav .nav_tit li').each(function(i){
        $(this).click(function(){
          $('.yxg_nav .nav_tit li').each(function(i){
            $(this).removeClass('yxg_curr_li')
            $('.yxg_nav .nav_con li').eq(i).css('display','none')
          })
          $(this).addClass('yxg_curr_li')
          $('.yxg_nav .nav_con li').eq(i).css('display','block')
        })

      })
    }
  }
</script>

<style scoped>
.appSon{
  height: 100%; display: flex; flex-direction: column; background: #f8f4f5;
}
.main{
  flex: 1; overflow-y: auto; overflow-x: hidden; position: relative;
}
.main .activeRule{
  position: absolute; right: 0; top: .2rem;
  line-height: .3rem; font-weight: lighter; font-size: .14rem; color: white;
  background: rgba(75,75,75,.5); padding: 0 .15rem;
  border-bottom-left-radius: .12rem; border-top-left-radius: .12rem;
}
.main .yxg_flag_img, .main .yxg_flag_img img{
  width: 100%;
}
.main .yxg_nav{
  width: 100%;
}
.main .yxg_nav .nav_tit{
  width: 100%; height: .55rem; border-bottom: 1px solid #f2f2f2; font-size: .16rem;
  display: flex; align-items: center; justify-content: center; background: white;
}
.main .yxg_nav .nav_tit li{
  width: .8rem; height: .35rem; border: 1px solid #dcbfc4; color: #8d8d8d;
  line-height: .35rem; text-align: center;
}
.main .yxg_nav .nav_tit li:nth-child(1){
  border-bottom-left-radius: .2rem; border-top-left-radius: .2rem;
}
.main .yxg_nav .nav_tit li:nth-child(2){
  border-bottom-right-radius: .2rem; border-top-right-radius: .2rem;
}
.main .yxg_nav .nav_tit .yxg_curr_li{
  color: #b61826;
  border-color: #b61826;
}
.main .yxg_nav .nav_con{
  width: 100%;
}
.main .yxg_nav .nav_con li:nth-child(1){
  width: 100%;
}
.main .yxg_nav .nav_con li:nth-child(1) a{
  height: 1.2rem; background: white; padding: .15rem;
  display: flex; align-items: center;  font-size: .15rem;
}
.main .yxg_nav .nav_con li:nth-child(1) a .imgs{
  width: 1.2rem; height: 1.2rem;
}
.main .yxg_nav .nav_con li:nth-child(1) a .imgs img{
  width: 100%; height: 100%;
}
.main .yxg_nav .nav_con li:nth-child(1) a .info{
  flex: 1; height: 1rem; padding: .1rem 0; margin-left: .1rem;
  display: flex; flex-direction: column; justify-content: space-between;
}
.main .yxg_nav .nav_con li:nth-child(1) a .info .tit h6{
  font-size: .18rem; color: #303030;
}
.main .yxg_nav .nav_con li:nth-child(1) a .info .tit p{
  font-size: .16rem; color: #8c8c8c;
}
.main .yxg_nav .nav_con li:nth-child(1) a .price span{
  font-size: .15rem; color: #9a2430;
}
.main .yxg_nav .nav_con li:nth-child(1) a .price b{
  font-size: .2rem; color: #9a2430;
}
.main .yxg_nav .nav_con li:nth-child(1) .dixian{
  width: 100%; height: .6rem;
  display: flex;align-items: center; justify-content: center;
}
.main .yxg_nav .nav_con li:nth-child(1) .dixian .line{
  width: 20%; height: 1px;  background: #b0b0b0;
}
.main .yxg_nav .nav_con li:nth-child(1) .dixian p{
  font-size: .14rem; color: #b0b0b0; margin: 0 .2rem;
}
.main .yxg_nav .nav_con li:nth-child(2){
  width: 100%; height: 2rem; display: none;
}
.main .yxg_nav .nav_con li:nth-child(2) .noJilu{
  width: 100%; height: 2rem;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.main .yxg_nav .nav_con li:nth-child(2) .noJilu>img{
  width: .6rem;
  height: .6rem;
}
.main .yxg_nav .nav_con li:nth-child(2) .noJilu .word{
  font-size: .14rem; color: #c1c1c1; width: 100%;
  display: flex; align-items: center; justify-content: center;
}
.main .yxg_nav .nav_con li:nth-child(2) .noJilu .word img{
  width: .18rem; height: .18rem; margin-left: .1rem;
}
</style>
