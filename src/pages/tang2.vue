<template>
    <div class="bigbox">
       <div class="div1">
         <i class="iconfont icon-youjiantou" @click="diaoding"></i>
         <h5>会员频道</h5>
         <i class="iconfont icon-jia"></i>
       </div>
       <div class="zhong">
            <div class="member">
              <img src="../../static/img/banner.jpg" alt="">
            </div>
          <div class="yonghu">
            <img src="../../static/img/tx.jpg" alt="">
            <div class="login" @click="login">登录 / 注册</div>
             <div class="diqu">
           <dingwei></dingwei>
             </div>
          </div>
          <div class="jifen">
            <a class="jifa jifa1">
              <img src="../../static/img/j1.jpg" alt="">
               <span class="sp1">积分</span>
               <span class="sp2">--分</span>
            </a>
            <a class="jifa">
              <img src="../../static/img/j1.jpg" alt="">
              <span class="sp1">积分</span>
              <span class="sp2">--分</span>
            </a>
          </div>
          <div class="qd">
            <a><img src="../../static/img/qd1.jpg" alt=""></a>
            <a><img src="../../static/img/qd2.jpg" alt=""></a>
          </div>
         <a name="miao"></a>
         <h5 class="jifenh" ><span>积分兑换</span></h5>
          <div class="lingq">
              <div class="linga" v-for="(n,i) in juan">
                <img :src="n.img1" alt="" class="limg1">
                <img :src="n.img2" alt="" class="limg2">
                <p class="lingp">{{n.p1}}</p>
                 <span class="fen">{{n.f}}积分</span>
                <img src="../../static/img/duihuan.jpg" alt="" class="duihuan">
              </div>
          </div>
         <p class="chaozhi">超值好券</p>
         <div class="hquan">
            <div class="hquana" v-for="n in hquan">
             <span class="hqt1">V0-V5</span>
              <p class="hqp1">￥<span>{{n.num}} </span> 优惠券</p>
              <p class="hqjies">{{n.p1}}</p>
              <p class="hqriqi">{{n.riqi}}</p>
              <img src="../../static/img/lijilingqu.png" alt="" class="lijil">
            </div>
         </div>
         <a name="miao2"></a>
         <p class="chaozhi">积分优惠购</p>
          <div class="jifg">
             <div class="jifga jifga1"></div>
            <div class="jifga jifga2"></div>
            <p class="jifgpp">下单用500积分可享受积分购价格，不足500积分可享积分双倍抵现，高于500积分部分不翻倍。用券更优惠！</p>
          </div>
         <p class="chaozhi jifenduihaoli">积分兑好礼</p>
          <div class="jifg">
            <div class="jifg2a" v-for="n in jif">
              <span class="hqt1">V0-V5</span>
              <img :src="n.img" alt="" class="jifg2at">
              <p class="jifg2p1">{{n.p1}}</p>
               <p class="jifg2p2">{{n.f}}积分</p>
                <p class="jifg2p3">￥{{n.yf}}</p>
                <span class="lijigou"><img src="../../static/img/jin.png" alt="" class="lijigoust"><p>立即兑换</p></span>
            </div>
            <p class="jifgpp">兑换成功后，请在5天内填写默认收货地址，礼品将在您填写完后，15个工作日内寄出。</p>
          </div>
         <a name="miao3"></a>
         <p class="chaozhi jifenduihaoli">会员福利</p>
       <div class="fuli">
          <div class="fulia" v-for="(n,i) in hui">
            <img :src="n.img" alt="">
          </div>
       <p class="chakh">查看更多 <span>会员服务权益&gt;</span></p>
       </div>
         <img src="../../static/img/qdhl.png" alt="" class="qiandao">
         <p class="chaozhi">每日抽奖</p>
         <div class="zpbox">
           <img src="../../static/img/bg0.jpg" alt="" class="zpbg0">
           <img src="../../static/img/zhuanp.png" alt="" id="zpt1">
           <img src="../../static/img/zpchou.png" alt="" id="zpt2" @click="zhuan">
           <marquee direction="up" scrollamount="4" class="zimuuuu">
             <p v-for="n in zj">{{n.p1}} ******   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;抽中{{n.p2}} </p>
           </marquee>
         </div>
          <div class="guize">
             <div class="guizep1" id="guizhezhanshi" @click="display">活动规则及奖品展示 <i class="iconfont icon-xiajiantou"></i></div>
             <div id="guizeyy">
               <img src="../../static/img/guize.jpg" alt="" class="guizeyyt">
                <div class="guizep1" id="guizeshouqi" @click="none"> 收起 <i class="iconfont icon-shangjiantou"></i></div>
             </div>
          </div>
         <img src="../../static/img/jianm.jpg" alt="" class="qiandao qiandao2">
         <img src="../../static/img/huiyuanr1.jpg" alt="" class="qiandao qiandao2">
       </div>
      <div class="xia">
        <a href="#miao" class="xiaa">每月礼券</a>
        <a href="#miao2" class="xiaa">玩转积分</a>
        <a href="#miao3" class="xiaa xiaa3">会员福利</a>
      </div>
      <div id="tanshuw">
           <span class="tanchuh"></span>
       <div id="tanchu">
           <span class="tanchus1">提示 ! </span>
           <p class="tanchup1">{{tanp}}</p>
           <div class="quding" @click="quedingyy">确定</div>
       </div>
      </div>
    </div>
</template>

<script>
   import {mapGetters} from "vuex"
   import dingwei from "../components/dingwei/dingwei"
    export default {
     components:{dingwei},
        // name: "tang2",
    computed:mapGetters({
      juan:"getjuan",
      hquan:"gethquan",
      jif:"getjif",
      hui:"gethui",
      zj:"getzj"
    }),
      data(){
          return {
            m:0,
            jp:"",
            tanp:"谢谢参与"
          }
      },
    methods:{
      diaoding(){
        this.$router.go(-1);
      },

          login(){
             this.$router.push("/login");
          },
          zhuan(){
           let dom=document.getElementById("zpt1");
           let num= parseInt(Math.random()*100);
            if(num>=0 && num<10){
              this.jp="2积分";
              this.m=110;
            }else if(num>=10 && num <15){
              this.jp="8积分";
              this.m=290;
            }else if(num>=15 && num <25){
              this.jp="华为5元券";
              this.m=75;
            }else if(num>=25 && num <35){
              this.jp="华为10元券";
              this.m=250;
            }else if(num>=35 && num <45){
              this.jp="酒仙网399元红酒券";
              this.m=210;
            }else if(num>=45 && num <55){
              this.jp="AM115耳机";
              this.m=30;
            }else if(num>=55 && num <65){
              this.jp="华为体脂称";
              this.m=338;
            }
            else{
              this.jp="谢谢参与";
              this.m=160;
            }
           let n=parseInt(Math.random()*2+5)*360+this.m;
           dom.style.transform = "rotateZ("+n+"deg)";
            dom.style.transition="all 1s";
            setTimeout(()=>{
               if(this.jp==="谢谢参与"){
                 this.tanp="很遗憾！这次什么都没有抽中哦!";
               }else{
                 this.tanp="恭喜您！抽中"+this.jp;
                 let jjs={p1:15339,p2:this.jp};
               this.$store.dispatch("addzj",jjs);
               }
               document.getElementById("tanshuw").style.display="block";
                dom.style.transform = "rotateZ("+0+"deg)";
                dom.style.transition="all 0.00001s";
            },1500);
          },
      display(){
            document.getElementById("guizeyy").style.display="block";
             document.getElementById("guizhezhanshi").style.display="none";
      },
      none(){
        document.getElementById("guizeyy").style.display="none";
        document.getElementById("guizhezhanshi").style.display="block";
      },
      quedingyy(){
            document.getElementById("tanshuw").style.display="none";
      }
      }
    }
</script>

<style scoped>

  .diqu{
    width:1rem;
    height: 0.3rem;
    position:absolute;
    left:3rem;
    top:0.3rem;
  }
html,body{
   height:100%;
}
  .bigbox{
    width:100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  }
  .div1{
    width:100%;
    height: 0.42rem;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
  }
  .div1 .icon-youjiantou{
    float:left;
    margin-top:0.05rem;
    margin-left:0.1rem;
   font-size:30px;
    color:#000000;
    transform:rotateZ(180deg);
  }
  .div1 h5{
    font-size:0.16rem;
    line-height: 0.42rem;
    float:left;
    margin-left:1.3rem;
    color:#000000;
  }
  .div1 .icon-jia{
    float:left;
    margin-top:0.05rem;
    margin-left:1.3rem;
    font-size:30px;
    color:#000000;
  }
  .zhong{
    flex:1;
    overflow-y:auto;
  }
  .xia{
    width:100%;
    height: 0.5rem;
    background:#fff6ed;
  }
  .xiaa{
    font-size:0.16rem;
    float:left;
    color:#a67935;
    width:1.36rem;
    border-right:1px solid #d0c3b0;
    margin-top:0.14rem;
  }
  .xiaa3{
    border:none;
  }
  .member{
    width:100%;
    height: 2.45rem;
    background:#372d2c;
    padding-top:0.2rem;
  }
  .member img{
   width:100%;
    height: 100%;
  }
 .yonghu{
   width:100%;
   height: 0.93rem;
   border-bottom:1px solid #eeeeee;
   position:relative;
 }
  .yonghu img{
    float:left;
    width:0.6rem;
    height: 0.6rem;
    border-radius:50%;
    margin-top:0.17rem;
    margin-left:0.37rem;
  }
  .login{
    float:left;
    width:1.02rem;
    height: 0.33rem;
    font-size:0.15rem;
    background:#ca151e;
    color:white;
    line-height: 0.36rem;
    border-radius:0.17rem;
    margin-top:0.3rem;
    margin-left:0.3rem;
  }
  .jifen{
    width:100%;
    height: 0.48rem;
    border-top:1px solid #eaeaea;
    border-bottom:1px solid #e9e9e9;
  }
  .jifa{
    float:left;
    width:2.06rem;
    height: 0.48rem;
  }
  .jifa1{
    border-right:1px solid #eaeaea;
  }
  .jifa img{
    float: left;
    margin-left:0.28rem;
    width:0.28rem;
    height: 0.18rem;
    margin-top:0.14rem;
  }
  .jifa .sp1{
       float:left;
       margin-top:0.14rem;
       margin-left:0.05rem;
       font-size:0.14rem;
       color:#8d8d8d;
     }
.jifa .sp2{
  float:left;
  margin-top:0.14rem;
  margin-left:0.65rem;
  font-size:0.14rem;
  color:#333333;
}
  .qd{
    width:100%;
    height: 0.7rem;
  }
  .qd a{
    float:left;
    width:1.85rem;
    margin-left:0.148rem;
  }
  .qd a img{
    width:1.85rem;
    height: 0.56rem;
    margin-top:0.05rem;
  }
  .jifenh{
    width:100%;
    height: 0.46rem;
    border-bottom:1px solid #e9e9e9;
  }
  .jifenh span{
    float:left;
    font-size:0.14rem;
    line-height: 0.45rem;
    color:#cc141c;
    font-weight:100;
    margin-left:0.1rem;
    border-bottom:2px solid #cc141c;
  }
  .lingq{
    display:flex;
    flex-wrap:wrap;
    width:96%;
    margin:0 auto;
  }
  .linga{
     display:block;
    float:left;
    width:49.3%;
    height: 2.06rem;
    border:1px solid #eee;
    margin-left:0;
    position:relative;
    left:0;
    top:0;
  }
  .limg1{
    width:0.34rem;
    height: 0.34rem;
    position:absolute;
    left:0;
    top:0;
  }
.limg2{
  width:1.02rem;
  height: 1.02rem;
  position:absolute;
  left:20%;
  top:0.17rem;
}
  .lingp{
    width:80%;
    font-size:0.15rem;
    position:absolute;
    top:1.22rem;
    left:0.16rem;

  }
  .fen{
     font-size:0.16rem;
    color:#ce1825;
    position:absolute;
    top:1.68rem;
    left:15%;

  }
  .duihuan{
    width:0.62rem;
    height: 0.22rem;
    position:absolute;
    left:55%;
    top:1.68rem;
  }
  .chaozhi{
    width:100%;
    height: 0.52rem;
    font-size:0.16rem;
    line-height: 0.52rem;
    border-bottom:1px solid #e9e9e9;
    text-align:left;
    text-indent:0.2rem;
  }
.hquan{
   display:flex;
  flex-wrap:wrap;
  width:98%;
  margin:0 auto;
}
  .hquana{
    width:1.86rem;
    height: 1rem;
    border:1px solid #eceaeb;
    border-radius:0.1rem;
    margin-top:0.06rem;
    margin-left:0.1rem;
    overflow: hidden;
    position:relative;
  }
  .hqt1{
    display:block;
     font-size:0.08rem;
     width:0.8rem;
    height: 0.13rem;
    line-height:0.13rem;
    transform:rotate3d(0,0,1,-45deg);
    color:white;
    background:#c41b16;
    position:absolute;
    left:-0.25rem;
    top:0.1rem;
  }
  .hqp1{
    font-size:0.16rem;
    color:#fa5221;
    line-height: 0.3rem;
    position:absolute;
    top:0.1rem;
    left:0.22rem;
  }
  .hqp1 span{
    font-size:0.2rem;
  }
  .hqjies{
    font-size:0.12rem;
    width:1.02rem;
    position:absolute;
    top:0.4rem;
    left:0.2rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 2;
  }
  .hqriqi{
    font-size:0.11rem;
    position:absolute;
    top:0.82rem;
    left:0.2rem;
  }
  .lijil{
    width:0.4rem;
    height: 1rem;
    position:absolute;
    right:0;
  }
  .jifg{
    width:100%;
    display:flex;
    flex-wrap:wrap;
  }
  .jifga{
     width:49.8%;
    height: 2.1rem;
    background-image:url("../../static/img/shang.png");
    background-size:4.2rem 2.1rem;
  }
  .jifga1{
    border-right:1px solid #ebebeb;
  }
  .jifga2{
    background-position:2.1rem;
  }
  .jifgpp{
    display:block;
    width:90%;
    margin-left:auto;
    margin-right:auto;
    height: 0.45rem;
    text-align:left;
    font-size:8px;
    margin-top:0.1rem;
    line-height:0.18rem;
  }
  .jifenduihaoli{
    border-top:1px solid #ebebeb;
  }
  .jifg2a{
    width:49.8%;
    height: 2.1rem;
    position:relative;
    overflow: hidden;
  }
  .jifg .jifg2a:nth-child(1){
    border-right:1px solid #eaeaea;
  }
  .jifg2at{
    width:1rem;
    height: 1rem;
    position:absolute;
    left:0.5rem;
    top:0.2rem;
  }
  .jifg2p1{
    font-size:0.14rem;
    line-height: 0.3rem;
    position:absolute;
    top:1.25rem;
   width:100%;
    text-align:center;
  }
  .jifg2p2{
    font-size:0.16rem;
    color:#aa1e27;
    position:absolute;
    top:1.5rem;
    left:0.45rem;
  }
  .jifg2p3{
    font-size:0.14rem;
     position:absolute;
    left:1.25rem;
    top:1.51rem;
    text-decoration:line-through;
  }
  .lijigou{
     display:block;
    position:absolute;
    left:0.52rem;
    top:1.75rem;
    width:0.86rem;
    height: 0.2rem;
    border-radius:0.1rem;
    border:1px solid #c41522;
  }
  .lijigoust{
    float:left;
    width:0.14rem;
    height: 0.14rem;
    margin-left:0.1rem;
    margin-top:0.03rem;
  }
  .lijigou p{
     float:left;
     font-size:0.12rem;
    line-height: 0.22rem;
    margin-left:0.03rem;
    color:#c41522;
  }
  .fuli{
    display:flex;
    flex-wrap:wrap;
    width:100%;
  }
  .fulia{
    width:50%;
    height: 1.7rem;
    margin-top:0.05rem;
  }
  .fulia img{
   width:100%;
    height: 100%;
  }
  .chakh{
    font-size:0.1rem;
    color:#323232;
    line-height: 0.3rem;
   margin-left:2.6rem;
  }
  .chakh span{
    text-decoration:underline;
  }
  .qiandao{
    display:block;
    width:92%;
    height: 1.2rem;
    margin:0 auto;
  }
  .qiandao2{
    margin-bottom:0.05rem;
  }
  .zpbox{
     width:100%;
    position:relative;
  }
  .zpbg0{
    width:100%;
  }
  #zpt1{
    width:100%;
    position:absolute;
    left:0;
    top:0;
  }
  #zpt2{
   width:1.5rem;
    position:absolute;
    left: 1.31rem;
    top:1.35rem;
  }
  .zimuuuu{
    width:3.5rem;
    height: 1.11rem;
    position:absolute;
    left: 0.31rem;
    top:4.7rem;
    font-size:0.12rem;
    line-height: 0.24rem;
    text-indent:0.2rem;
  }
  .guize{
    display:flex;
    flex-direction:column;
  }
  #guizeyy{
    display:none;
  }
  .guizep1{
    width:100%;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size:0.14rem;
    text-align:center;
  }
  .guizeyyt{
    width:100%;
  }
 #tanshuw{
   width:100%;
   height: 100%;
   position:fixed;
   z-index:3;
   left:0;
   top:0;
   display:none;
 }
 .tanchuh{
   width:100%;
   height: 100%;
   background:black;
   opacity:0.5;
   position:absolute;
   left:0;
   top:0;
 }
  #tanchu{
    position:fixed;
    width:3rem;
    height: 1.8rem;
    left:13%;
    top:30%;
    background:white;
    border-radius:0.1rem;
    z-index:9;
    flex-direction:column;
  }
   .tanchus1{
       display:block;
     width:100%;
     height: 0.5rem;
     line-height: 0.5rem;
     font-size:0.16rem;
     font-weight:600;
   }
  .tanchup1{
    display:block;
    width:100%;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size:0.16rem;
  }
  .quding{
    display:block;
    width:50%;
    margin-left:25%;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size:0.16rem;
    color:#ca151e;
    border:1px solid #eee;
  }
</style>
