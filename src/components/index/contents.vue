<template>
    <div class="content">
      <div class="box">
        <div class="swiper-container lunbo">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="i in data.imgs"><img :src="i" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="yaoqing">
        <ul>
          <li><img src="../../../static/img/xuanzhong.jpg" alt="">官方商城</li>
          <li><img src="../../../static/img/xuanzhong.jpg" alt="">正品保证</li>
          <li><img src="../../../static/img/xuanzhong.jpg" alt="">售后无忧</li>
        </ul>
        <div class="lingquan">
          <a href="#" v-for="(n,index) in data.imgk" @click="vip(index)"><img :src="n.imgy" alt=""><p>{{n.title}}</p></a>
        </div>
        <router-link to="/HwIdxMallNew" class="toutiao">
          <img src="../../../static/img/logo_wapHeadNews.png" alt="">
          <div class="swiper-container word">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(t,index) in data.vertitle">{{t}}</div>
            </div>
          </div>
          <p></p>
          <a href="#">更多</a>
        </router-link>
      </div>
      <div class="con">
        <div class="con-title">
          <p>限时购</p>
          <img src="../../../static/img/seckill_title.png" alt="">
          <p>{{hour}}:{{minute}}:{{second}}</p>
          <span>后结束</span>
        </div>
        <contentitem :data="data.xianshi"></contentitem>
        <div class="xilie">
          <ul class="xilie-hw">
            <li class="xilie1"><a href="#"><img :src="data.imgx" alt=""></a></li>
            <li class="xilie1 xilie2">
              <div class="top" v-for="xi in data.xilie">
                <a href="#"><img :src="xi" alt=""></a>
              </div>
            </li>
          </ul>
          <ul class="xilie-hw">
            <li class="xilie1 xilie2 xilie3">
              <div class="top" v-for="xi in data.xilie1">
                <a href="#"><img :src="xi" alt=""></a>
              </div>
            </li>
          </ul>
          <ul class="hw-changxiang">
            <li v-for="xi in data.xilie2">
              <a href="#">
                <p class="imgs"><img :src="xi.imgs" alt=""></p>
                <h2>{{xi.title}}</h2>
                <h3>{{xi.htitle}}</h3>
                <p class="price">{{xi.price}}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="jptuijian">
          <h2>精品推荐</h2>
          <contentitem :data="data.jingpin"></contentitem>
        </div>
        <commonbox v-for="(com,index) in data.commons" :data="com" :key="index"></commonbox>
      </div>
      <HuaWeiFooter></HuaWeiFooter>
    </div>
</template>

<script>
    import "../../../node_modules/swiper/dist/js/swiper.min.js"
    import contentitem from "./contentitem"
    import Swiper from "swiper"
    import commonbox from "./commonbox"
    import HuaWeiFooter from "../../common/HuaWeiFooter"
    export default {
        name: "contents",
        props:["data"],
        components:{
          contentitem,
          commonbox,
          HuaWeiFooter
        },
        mounted(){
            new Swiper ('.lunbo', {
              direction: 'horizontal', // 水平切换选项,
              autoplay:true,
              loop: true, // 循环模式选项
              pagination: {
                el: '.swiper-pagination',
              }
            })
            new Swiper('.word',{
              direction:'vertical',
              loop:true,
              autoplay:true
            })
            new Swiper('.xianshi',{
              slidesPerView: "auto",//一页显示几个
              direction:'horizontal'
            })
            new Swiper('.jingpin',{
              slidesPerView: "auto",//一页显示几个
              direction:'horizontal'
            })
            this.timer()
        },
        data(){
          return {
            hours:10,
            minutes:10,
            seconds:10
          }
        },
        methods:{

          vip(i){
            console.log(i);
             if(i===1){
               this.$router.push("/vip");
             }else if(i===3){
               this.$router.push("/jxx");
             }else if(i===0){
               this.$router.push("/HwInvite");
             }else if(i===2){
               this.$router.push("/HwYxg");
             }


          },
          num(n){
            return n<10 ? "0" + n : "" + n
          },
          timer(){
            var _this = this
            var time = setInterval(function(){
              if(_this.seconds===0 && _this.minutes!==0){
                _this.seconds = 59
                _this.minutes -= 1
              }else if(_this.seconds===0 && _this.minutes===0){
                _this.seconds=0
                clearInterval(time)
              }else if(_this.hours===0 && _this.minutes!==0){
                _this.minutes-=1
              }else{
                _this.seconds-=1
              }
            },1000)
          }
        },
        watch:{
          hour:{
            handler(newVal){
              this.num(newVal)
            }
          },
          minute:{
            handler(newVal){
              this.num(newVal)
            }
          },
          second:{
            handler(newVal){
              this.num(newVal)
            }
          }
        },
        computed:{
            hour:function(){
              return this.num(this.hours)
            },
            minute:function(){
              return this.num(this.minutes)
            },
            second:function(){
              return this.num(this.seconds)
            }
        }
    }
</script>

<style>
  @import "../../../node_modules/swiper/dist/css/swiper.min.css"
</style>
