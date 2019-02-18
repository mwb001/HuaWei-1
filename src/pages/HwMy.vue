<template>
  <div class="appSon">
    <hw-my-hide-header></hw-my-hide-header>
    <div class="main">
      <div class="header">
          <div class="top">
            <a href="javascript:void(0)" class="message" @click="gou2d">
              <img src="../../static/img/message.jpg">
            </a>

            <a href="javascript:void(0)" class="settimg">
              <img src="../../static/img/setting.jpg"  @click="goud">
            </a>
          </div>
          <div class="middle">
            <div class="noLogin">
                <div class="tx">
                  <img src="../../static/img/defaultface_user_after.png">
                </div>
                <div class="userState">
              <h4 @click="goo">登录/注册</h4><p>享受更多会员权益</p>
            </div>
            </div>
            <div class="logining">
              <div class="tx">
                <img src="../../static/img/defaultface_user_after.png">
              </div>
              <div class="userState">
                <h4>180****4434</h4>
                <p>
                  <span class="iconfont icon-Sign"></span>
                  <i>签到领积分</i>
                </p>
              </div>
            </div>
          </div>
          <div class="bottom">
            <ul>
              <li><b> - </b><span>积分</span></li>
              <li><b> - </b><span>优惠券</span></li>
              <li><b> - </b><span>代金券</span></li>
            </ul>
          </div>
      </div>

      <div class="indent">
        <div class="tit">
          <h3>我的订单</h3>
          <a href="javascript:void(0)">全部订单 ></a>
        </div>
        <ul class="nav">
          <hw-my-indent-nav :key="index" v-for="(aa,index) in data.indentNav" :data="aa"></hw-my-indent-nav>
        </ul>
      </div>

      <div class="vip">
        <div class="tit">
          <h3>会员专享</h3>
          <a href="javascript:void(0)">更多会员权益 ></a>
        </div>
        <ul class="vip_quan">
          <hw-my-slide :key="index" v-for="(bb,index) in data.vipquan" :data="bb"></hw-my-slide>
        </ul>
      </div>

      <div class="vmall">
        <div class="tit">
          <h3>{{data.vmall.tit}}</h3>
          <router-link v-if="data.vmall.retit" to="">{{data.vmall.retit}}</router-link>
        </div>
        <ul>
          <hw-my-module :key="index" v-for="(cc,index) in data.vmall.list" :data="cc" :n="index"></hw-my-module>
        </ul>
      </div>

      <div class="myServer">
        <div class="tit">
          <h3>{{data.myserver.tit}}</h3>
          <router-link v-if="data.myserver.retit" to="">{{data.myserver.retit}}</router-link>
        </div>
        <ul>
          <hw-my-module :key="index" v-for="(cc,index) in data.myserver.list"  :data="cc"></hw-my-module>
        </ul>
      </div>

      <div class="hwlife">
        <div class="tit">
          <h3>华为生活</h3>
        </div>
        <ul>
          <li><img src="../../static/img/my_hwsh01.png"></li>
          <li><img src="../../static/img/my_hwsh02.png"></li>
          <li><img src="../../static/img/my_hwsh03.png"></li>
        </ul>
      </div>

      <div class="tj">
        <h3>为您推荐</h3>
        <div class="tj_con">
          <img src="../../static/img/my_tj.jpg">
        </div>
      </div>
    </div>
    <footers></footers>
  </div>
</template>

<script>
    import HwMyHideHeader from  "../components/my/HwMyHideHeader"
    import HwMyModule from  "../components/my/HwMyModule"
    import HwMyIndentNav from  "../components/my/HwMyIndentNav"
    import HwMySlide from  "../components/my/HwMySlide"
    import footers from  "../common/footers"
    import data from "../api-server/data/my"
    export default {
      name: "HwMy",
      components : {
        HwMyHideHeader,HwMyModule,HwMyIndentNav,HwMySlide,footers
      },
      data(){
        return{
          data
        }
      },
      mounted(){
        // 头部的显示隐藏

        $('.main').scroll(function(){
          if($('.main').scrollTop() >= 200){
            $('header').fadeIn()
          }else{
            $('header').fadeOut()
          }
        })
      },
      methods:{
        go(index){
           console.log(index);
           if(index==5){
             this.$router.push("/add")
           }
        },
        gou2d(){
          this.$router.push("/HwIndexMes")
        },
        goo(){
            this.$router.push("/login");
        },
        goud(){
          this.$router.push("/shezhi");
        }
      }
    }
</script>

<style scoped>
.appSon{
  height: 100%; display: flex; flex-direction: column; background: #f8f8f8;
}
.main{
  flex: 1; overflow-y: auto; overflow-x: hidden;
}
.main .header{
  width: 100%; height: 2.2rem;
  border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;
  background: #e73332; position: relative;
}
.main .header .top{
  padding: .1rem .2rem; height: .25rem;
}
.main .header .top a{
  width: .25rem; height: .25rem;
  float: right; margin-left: .1rem;
}
.main .header .top a img{
  width: 100%; height: 100%;
}
.main .header .middle{
  padding: 0 .2rem; height: .8rem;
}
.main .header .middle .noLogin,
.main .header .middle .logining{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.main .header .middle .logining{
  display: none;
}
.main .header .middle .tx,
.main .header .middle .tx img{
  width: .6rem; height: .6rem;
}
.main .header .middle .userState{
  height: 100%; color: white; margin-left: .2rem;
  display: flex; flex-direction: column; justify-content: center;
}
.main .header .middle .userState h4{
  font-size: .17rem;
}
.main .header .middle .userState p{
  font-size: .13rem; color: white;
}
.main .header .middle .logining .userState p{
  display: flex; align-items: center;
  background: rgba(232,55,49,.3); padding: 0 .05rem;
}
.main .header .middle .logining .userState p span{
  font-size: .18rem; margin-right: .1rem;
}
.main .header .middle .logining .userState p i{
  font-style: normal;
}
.main .header .bottom{
  width: 92%; height: .9rem; display: flex; justify-content: center; align-items: center;
  background: white; border-radius: .1rem;
  position: absolute; left: 4%; bottom: -.2rem;
  box-shadow: 0px 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.04);
}
.main .header .bottom ul{
  width: 95%;
  height: 60%;
  display: flex;
  align-items: center;
}
.main .header .bottom ul li{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 2px solid #e6e6e6;
}
.main .header .bottom ul li b{
  font-size: .15rem; font-weight: normal; color: #454545;
}
.main .header .bottom ul li span{
  font-size: .13rem; color: #6c6c6c;
}
.main .header .bottom ul li:last-child{
  border: none;
}
.main .indent{
  margin: .35rem .15rem .15rem;
  height: 1.2rem; background:white; border-radius: .1rem
}
.main .tit{
  padding: 0 .1rem; height: .4rem;
  display: flex; align-items: center; justify-content: space-between;
  font-size: .15rem; color: #3b3b3b;
}
.main .tit a{
  color: #818181;
}
.main .indent .nav{
  width: 100%; height: .8rem;
  display: flex; align-items: center; justify-content: space-around;
}
.main .vip{
  margin: .15rem;
  height: 1.8rem; background:white; border-radius: .1rem
}
.main .vip .vip_quan{
  width: 100%; height: 1.4rem;
  display: flex; align-items: center; overflow-x: auto; overflow-y: hidden;
}
.main .vip .vip_quan::-webkit-scrollbar{
  display: none;
}
.main .vmall,
.main .myServer,
.main .hwlife{
  margin: .15rem; background:white; border-radius: .1rem
}
.main .vmall ul,
.main .myServer ul{
  overflow: hidden;
}
.main .hwlife ul{
  width: 100%; display: flex; overflow-x: auto;
}
.main .hwlife ul::-webkit-scrollbar{
  display: none;
}
.main .hwlife ul li{
  width: 44%; height: 1rem; flex-shrink: 0; flex-wrap: nowrap; margin: .06rem;
}
.main .hwlife ul li img{
  width: 100%; height: 100%;
}
.main .tj{
  background: #f7f9f8;
}
.main .tj h3{
  width: 100%;
  line-height: .3rem;
  font-size: .18rem;
  color: #2b2d2c;
  text-align: center;
}
.main .tj .tj_con{
  margin: .15rem; border-radius: .1rem; padding: .1rem; background: white;
}
.main .tj .tj_con img{
  width: 100%; height: 1rem; border-radius: .1rem; margin-bottom: .1rem;
}
.main .tj .tj_con img:last-child{
  margin-bottom: 0;
}
</style>


