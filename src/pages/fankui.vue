<template>
    <div class="bigbox">
      <div class="dibss">
      <div class="div1">
        <i class="iconfont icon-youjiantou" @click="gobac"></i>
        <p>意见与反馈</p>
      </div>
       <div class="div1">
          <p class="leip">反馈类型</p>
          <p class="nalei" @click="xuanze">{{nalei}} <i class="iconfont icon-shangjiantou"></i></p>
       </div>
       <div class="kuangw">
          <p class="kuangp1">问题建议</p>
          <textarea class="kuang" v-model="text" name="text" placeholder="请输入您的建议（至少10个字）" @input="biann"></textarea>
          <p class="zishu">{{n}}/250</p>
       </div>
       <div class="tupianw">
         <div class="tupd1">
            <p>上传图片</p><span>(每张图片不超过2M，最多上传5张)</span>
         </div>
         <div id="tupx">
           <div class="tunwww" v-for="(n,i) in imgBase64">
                <img :src="n" alt="">
              <span class="cuo" @click="delImg(i)">X</span>
           </div>

           <div class="jiawupw">
             <!--<img src="../../static/img/tianjia1.jpg" alt="" class="slitup">-->
              <div class="djjiatu">
                  <i class="iconfont icon-jia"></i>
                  <p>添加图片</p>
              </div>
             <input type="file" class="inputt" id="f1" @change="jiatupi">
           </div>
         </div>
       </div>
      <div class="dianhuaw">
         <p class="p1">手机或邮箱</p>
        <input type="text" class="inp" @change="phoneh" v-model="phone" placeholder="请输入手机号或邮箱号">
      </div>
      <div class="dianhuaw">
        <p class="p1 p12">验证码</p>

        <input type="text" class="inp inp2" placeholder="验证码" v-model="shuryyzm" @change="yzmsr">
         <div class="yzmw">
           <sidentify :identify-code="identifyCode"></sidentify>
         </div>
          <p class="huan" @click="yanzbianhuan">换一张</p>
      </div>
      </div>
      <div class="shifou">
         <div class="tijioa" @click="fanhui">取消</div>
        <div class="tijioa" id="tijioa2" @click="tijiao">提交</div>
      </div>
      <div class="fkxz" id="fkxz">
           <span class="fkxzspan"></span>
             <div class="list">
               <p class="p1">反馈类型   <i class="iconfont icon-error" @click="fkgb"></i></p>
               <p class="p2"  v-for="(n,i) in pps" @click="xuanok(i)">{{n}}
                 <i class="iconfont icon-weixuanzhongyuanquan"></i>
                 <i class="iconfont icon-2xuanzhong" v-if="leixz==i"></i>
               </p>
             </div>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from "vuex"
  // import "../assets/js/verificationCode"
  // import WebSocket from "websocket"
  import sidentify from "../components/identify/identify"
  export default {
    computed:mapGetters({
       imgs:"getimgs"
    }),
        name: "fankui",
        data(){
          return {
            pps:["商品相关(质量、建议、咨询、缺货等)","相关服务(支付、发货、退换、售后等)",
              "活动相关(预约、抢购、宣传、方案优化等)", "网站相关(错别字、链接失效、体验改进等)","其他"],
            n:0,
            text:"",
            imgBase64:[],
            yzs:require("../../static/img/yzm1.jpg"),
            identifyCode:"1111",
            phone:"",
            shuryyzm:"",
            nalei:"请选择反馈类型",
            yz1:false,
            yz2:false,
            yz3:false,
            pyz:false,
            leixz:20,
          }
        },
      mounted(){
         this.identifyCode=this.makeCode(0,4)
      },
      components:{
        sidentify,
      },
      methods:{
        gobac(){
          this.$router.go(-1);
        },
        jiatup(){
          var socket=new WebSocket("ws://localhost:8889");
          this.initws();
       let f1=document.querySelector("#f1").files[0];
       var render = new FileReader();
       // let tu=render.readAsDataURL(f1);
       // this.imgs.push(tu);
       render.readAsDataURL(f1);
      let type=f1.type;
       console.log(type);
       if(type==="image/jpeg"){
         console.log("ok");
         let picdata={type:"pic",data:reader.result}
         socket.send(JSON.stringify(picdata))
       }
        },
        jiatupi(){
          var _this = this;
          var event = event || window.event;
          var file = event.target.files[0];
          var reader = new FileReader();
          //转base64
          reader.onload = function(e) {
            _this.imgBase64.push(e.target.result);
          }
          reader.readAsDataURL(file);
        },
        delImg(index){
          this.imgBase64.splice(index,1);
        },
        yanzbianhuan(){
           // this.identifyCode=""
          this.identifyCode=this.makeCode(this.identifyCode,4);
        },
        randomNum(min,max){
          return Math.floor(Math.random()*(max-min)+min);
        },
        makeCode(o,l){
           let nnn="";
          for(let i=0;i<l;i++){
            nnn+=this.randomNum(0,9);
          }
          // console.log("当前的验证码是"+nnn);
          return nnn;
        },
        biann(){
          this.n=this.text.length;
          if(this.text.length>=10 && this.text.length<=250){
              this.yz1=true;
           }
        },
        fanhui(){
          this.$router.go(-1);
        },
        phoneh(){
          console.log(this.phone);
          let zhengze=/^1[358][0-9]{9}$/
          console.log(zhengze.test(this.phone));
          if(zhengze.test(this.phone)){
            this.yz2=true;
          }
        },
        tijiao(){
           if(this.yz1&&this.yz2&&this.yz3&&this.pyz){
             let data={
               p:this.nalei,
               p1:this.text,
               imgs:this.imgBase64,
             };
             this.$store.dispatch("addfk",data);
             alert("提交成功")
           }else if(!this.yz1){
              alert("提交的建议应在10-250字")
           }else if(!this.yz2){
             alert("请输入正确的电话号码")
           }else if(!this.pyz){
              alert("请选择反馈类型")
           }else if(!this.py3){
             alert("验证码错误")
           }

        },
        xuanze(){
          document.getElementById("fkxz").style.display="block";
        },
        fkgb(){
          document.getElementById("fkxz").style.display="none";
          if(this.nalei==="请选择反馈类型"){
            this.pyz=false;
          }
        },
        xuanok(i){
            this.leixz=i;
            this.nalei= this.pps[i];
          this.pyz=true;
          setTimeout(()=>{
              document.getElementById("fkxz").style.display="none";
            },300);
        },
        yzmsr(){
          if(this.shuryyzm===this.identifyCode){
            console.log(this.shuryyzm)
            this.yz3=true;
            console.log(this.yz1,this.yz2,this.yz3,this.pyz)
          }
        }
      },
    }
</script>

<style scoped>
  html,body{
    height: 100%;
  }
  .bigbox{
    display:flex;
    flex-direction: column;
    font-size:0.14rem;
  }
  .dibss{
    height:6.5rem;
  }
  .div1{
    width:4.1rem;
    height: 0.46rem;
    line-height: 0.46rem;
    font-size:0.18rem;
    border-bottom:0.08rem solid #f9f9f9;
    position:relative;
  }
  .div1 i{
    position:absolute;
    left:0.23rem;
    font-size:0.2rem;
    transform:rotateZ(180deg);
    line-height: 0.46rem;
    color:#262626;
  }
  .div1 p{
     /*width:100%;*/
    text-align:center;
    color:#262626;
  }
  .div1 .leip{
    font-size:0.14rem;
    color:#2c2c2c;
    float:left;
    width:0.7rem;
    margin-left:0.13rem;
  }
  .kuangw{

    width:100%;
    height: 2.78rem;
    border-bottom:0.08rem solid #f9f9f9;
    overflow:hidden;
    position:relative;
  }
  .kuangp1{
    width:100%;
    line-height: 0.4rem;
    text-align:left;
    text-indent:0.2rem;
  }
  .kuang{
     width:90%;
    height: 2.3rem;
    font-size:0.14rem;
    border:none;
    outline:none;
    color:#737373;
  }
  .zishu{
    position:absolute;
    right:0.3rem;
    bottom:0.1rem;
    color:#cccccc;
    resize:none;
  }
  .tupianw{
    /*height:1.3rem;*/
    width:100%;
    border-bottom:0.08rem solid #f9f9f9;
  }
  .tupd1{
    width:100%;
    height: 0.45rem;
    line-height: 0.45rem;
  }
  .tupd1 p{
    float:left;
    width:0.65rem;
    margin-left:0.2rem;
  }
  .tupd1 span{
    float:left;color:#a4a4a4;
  }
  #tupx{
    width:95%;
    margin:0 auto;
     display:flex;
    flex-wrap:wrap;
    position:relative;
  }
  .jiawupw{
    width:0.72rem;
    height: 0.72rem;
    margin-left:0.1rem;
    position:relative;
    margin-bottom:0.1rem;
  }
  .djjiatu{
    position:absolute;
    top:0;
    /*left:0.1rem;*/
    width:0.72rem;
    height: 0.72rem;
    background:#eaeaea;
    border:1px solid #e6e6e6;
  }
  .djjiatu i{
     font-size:0.24rem;
    color:#c4c4c4;
      position:absolute;
     top:0.19rem;
    left:0.24rem;
  }
  .djjiatu p{
     position:absolute;
    top:0.48rem;
    color:#c4c4c4;
    width:100%;
    text-align:center;
    font-size:0.11rem;
  }
  #tupx img{
     /*display:block;*/
     width:0.72rem;
    height: 0.72rem;
   margin-left:0.1rem;
    margin-bottom:0.1rem;
  }
  #tupx .yzmw{
    display:block;
     width:0.82rem;
    height: 0.82rem;
    background:red;
  }
  .tunwww{
    position:relative;
  }
   .cuo{
     display:block;
     color:white;
     background:red;
     width:0.2rem;
     height: 0.2rem;
     position:absolute;
     right:0;
     top:0;
     border-radius:50%;
     line-height: 0.22rem;
   }
  #tupx .jiawupw img{
    margin-left:0;
    margin-top:0;
  }
  .inputt{
    position:absolute;
    top:0;
    left:0.01rem;
    width:0.72rem;
    height: 0.72rem;
    opacity:0;
  }
  .dianhuaw{
    width:100%;
    height: 0.48rem;
    border-top:2px solid #f8f8f8;
  }
  .dianhuaw .p1{
    line-height:0.48rem;
    width:0.8rem;
    float:left;
    font-size:0.15rem;
    color:#5c5c5c;
    margin-left:0.2rem;
  }
  .inp{
    width:2.8rem;
    border:none;
    height:0.48rem;
    font-size:0.15rem;
    float:left;
    margin-left:0.1rem;
    outline:none;
  }
  .inp2{
      width:1.2rem;
  }
  .dianhuaw .p12{
     width:0.5rem;
  }
  input::-webkit-input-placeholder {
    color:#c5c5c5;
       }
  .yzmw{
    float:left;
    width:0.75rem;
    height: 0.33rem;
    margin-top:0.08rem;
  }
  .huan{
    float:left;
    color:#20bdb4;
    line-height: 0.48rem;
    text-align:center;
    width:1rem;
  }
  .shifou{
     width:100%;
    background:#f9f9f9;
  }
  .tijioa{
    float:left;
    width:1.76rem;
    height: 0.4rem;
    background:#f9f9f9;
    border:1px solid #d9d9d9;
    text-align:center;
    line-height: 0.4rem;
    border-radius:0.2rem;
    color:#383838;
    margin-top:0.2rem;
    margin-bottom:0.22rem;
    margin-left:0.18rem;
    font-size:0.14rem;
  }
  #tijioa2{
    background:#ca151e;
    border-color:#ca151e;
    color:white;
  }
 .div1 .nalei{
     float:left;
    width:3rem;
    margin-left:0.18rem;
    text-align:left;
    color:#535353;
    font-size:0.14rem;
   position:relative;
  }
  .fkxz{
    width:100%;
    height: 6.83rem;
    position:absolute;
    top:0.5rem;
    display:none;
  }
  .fkxzspan{
    width:100%;
    height: 6.83rem;
    background:black;
    opacity:0.5;
    position:absolute;
    left:0;
    top:0;
  }
  .nalei i{
    color:#535353;
    position:absolute;
    right:0.2rem;
  }
  .list{
     position:absolute;
    bottom:0;
    width:100%;
    height:5.5rem;
    background:white;
  }
  .list .p1{
    display:block;
    width:100%;
    height: 0.5rem;
    font-size:0.18rem;
    line-height: 0.5rem;
    text-align:left;
    text-indent:0.2rem;
    position:relative;
  }
  .list .p2{
    display:block;
    width:95%;
    margin:0 auto;
    color:#414141;
    border-bottom:1px solid #f0f0f0;
    height: 0.5rem;
    font-size:0.15rem;
    line-height: 0.5rem;
    text-align:left;
    text-indent:0.1rem;
    position:relative;
  }
  .list .p1 i{
     position:absolute;
    right:0.25rem;
    font-size:0.2rem;
    top:0.15rem;
  }
  .list .p2 .icon-weixuanzhongyuanquan{
    position:absolute;
    right:0.15rem;
    font-size:0.2rem;
    top:0.15rem;
  }
  .list .p2 .icon-2xuanzhong{
    position:absolute;
    color:red;
    right:0.15rem;
    font-size:0.2rem;
    top:0.15rem;
  }
</style>
