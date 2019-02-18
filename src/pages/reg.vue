<template>
  <div class="bigbox">
    <div class="div1">使用手机号注册</div>
    <div class="div2"><span class="sp1">国家/地区</span> <span class="sp2">+{{diqu}}</span></div>
    <input type="text" class="dlzh" placeholder="手机号" id="zhanghao"  v-model="zh" @focus="jujiao1" @change="zhchange">
     <p class="buzhengque">手机号不正确</p>

     <div class="dianjiyz" @click="jiance">
         <div class="lansebbjj"></div>
       <img src="../../static/img/dui1.jpg" alt="" id="duit">
       <div id="quanwuw">
         <span class="yzyuan" id="yzyuan1"><div id="sanjao"></div></span>
         <span class="yzyuan" id="yzyuan2"></span>
       </div>
          <p class="dianjitishi">{{anniup}}</p>
     </div>
    <p class="buzhengque2">请验证当前网络安全</p>

    <div class="inputw">
      <input type="password" class="dlzh dlzh2" placeholder="短信验证码"  v-model="duanxin" @focus="jujiao2" @change="duanxinyz">
       <p class="huoquyz" @click="huoquyz">获取验证码</p>
       <p class="huoquyzh">{{miao}}s 后重新获取</p>
    </div>
    <p class="buzhengque">{{ yanzhengmatishi}}</p>
    <div class="inputw">
      <input type="password" class="dlzh dlzh2" placeholder="密码" id="mima"  v-model="mima" @focus="jujiao3" @change="mimasr">
      <img src="../../static/img/yan.png" alt="" class="yan" id="yanbi" @click="yanbi">
      <img src="../../static/img/yan2.png" alt="" class="yan" id="yankai" @click="yankai">
    </div>
    <p class="buzhengque">至少包含8个字符</p>

    <input type="text" class="dlzh" placeholder="确认密码"  v-model="mima2" @focus="jujiao4" @change="mimasr2" @input="mimasr22">
    <p class="buzhengque buzhen2">密码与确认密码不一致</p>
    <p class="tishi">至少 8 个字符，不能含有空格。字母、数字、符号至少包含2种。</p>
     <span class="bai"></span>

     <div class="shiyong">使用邮件地址注册</div>
    <p class="tishi tishi2">若使用邮件地址注册，您仍需为帐号提供一个安全手机号用于验证身份。</p>
     <div class="shangwan">
        <p class="shangwana" @click="fanhui1">上一步</p>
       <p class="shangwana" id="wancheng">完成</p>
     </div>
  </div>
</template>

<script>
    export default {
        name: "reg",
      data(){
          return {
            yanzhengmatishi:"验证码不存在或已过期",
            diqu:86,
            zh:"",
            mima:"",
            mima2:"",
            zhok:false,
            wangluoanquan:false,
            duanxin:"",
            anniup:"点击按钮进行验证",
            jiance1:false,
            jiance2:false,
            jiance3:false,
            jiance4:false,
             keywanc:false,
             ma1:"111111",
            miao:120,
          }
      },
      watch:{
        zh:function(){
          // this.mimasr();
        },
        jiance4:function(){
          this.zzjiance();
        },
        mima2:function() {
         this.mimasr22();
        }

      },
      methods:{
        zzjiance(){
           if(this.jiance1 && this.jiance2 && this.jiance3 && this.jiance4){
             document.getElementById("wancheng").style.color="#6e7272";
             document.getElementById("wancheng").style.borderColor="#e2e2e2";
             this.keywanc=true;
           }else{
             document.getElementById("wancheng").style.color="#d1d1d1";
             document.getElementById("wancheng").style.borderColor="#f7f7f7;";
             this.keywanc=false;
           }
        },
        zhchange(){
          if(this.zh.length!=11&&this.zh.length!=0){
            document.getElementsByClassName("buzhengque")[0].style.display="block";
          }else{
            this.zhok=true;
            this.jiance1=true;
            document.getElementsByClassName("buzhengque")[0].style.display="none";
          }
        },
        mimasr(){
          if(this.mima.length<8 && this.mima.length!=0){
            document.getElementsByClassName("buzhengque")[2].style.display="block";
          }else{
            document.getElementsByClassName("buzhengque")[2].style.display="none";
            this.jiance3=true;
          }
        },
        mimasr2(){
          if(this.mima2!=this.mima){
            document.getElementsByClassName("buzhengque")[3].style.display="block";
          }else{
            document.getElementsByClassName("buzhengque")[3].style.display="none";
            this.jiance4=true;
          }
        },
        mimasr22(){
           if(this.mima2.length>7 && this.mima2==this.mima){
             // document.getElementsByClassName("buzhengque")[3].style.display="block";
             this.jiance4=true;
           }
        },
        duanxinyz(){
            if(this.duanxin.length!=6){
              this.yanzhengmatishi="无效的验证码";
              document.getElementsByClassName("buzhengque")[1].style.display="block";
            }else{
              document.getElementsByClassName("buzhengque")[1].style.display="none";
            }
          if(this.duanxin.length===6){
             if(this.duanxin!=this.ma1){
               document.getElementsByClassName("buzhengque")[1].style.display="block";
               this.yanzhengmatishi="验证码不存在或已过期";
             }else if(this.duanxin==this.ma1){
               document.getElementsByClassName("buzhengque")[1].style.display="none";
               this.jiance2=true;
             }
          }
        },
        yanbi(){
          document.getElementById("yanbi").style.display="none";
          document.getElementById("yankai").style.display="block";
          document.getElementById("mima").type="text";
        },
        yankai(){
          document.getElementById("yanbi").style.display="block";
          document.getElementById("yankai").style.display="none";
          document.getElementById("mima").type="password";
        },
        dui(){
          document.getElementById("kuang").style.display="none";
          document.getElementById("lanse").style.display="block";
        },
        lanse(){
          document.getElementById("kuang").style.display="block";
          document.getElementById("lanse").style.display="none";
        },
        tiao(){
          this.$router.push("/tongzhi");
        },
        jujiao1(){
          this.quanda();
          document.getElementById("sanjao").style.transform="rotate(-65deg)";
        },
        jujiao2(){
          this.quanda();
          document.getElementById("sanjao").style.transform="rotate(35deg)";
        },
        jujiao3(){
          this.quanda();
          document.getElementById("sanjao").style.transform="rotate(65deg)";
        },
        jujiao4(){
          this.quanda();
          document.getElementById("sanjao").style.transform="rotate(85deg)";
        },
        quanda(){
          document.getElementById("yzyuan1").style.transform="scale(2.1)";
          document.getElementById("sanjao").style.display="block";
          document.getElementById("yzyuan2").style.backgroundColor="#2d8dff";
        },
        jiance(){
          this. anniup="智能检测中";
          document.getElementsByClassName("lansebbjj")[0].style.display="block";
          let chang=0.1;
          let time=setInterval(()=>{
             chang+=0.2;
            document.getElementsByClassName("lansebbjj")[0].style.width=chang+"rem";
            if(chang>=3.7){
              this.wangluoanquan=true;
              this.yanchibian();
              clearInterval(time);
            }
          },20)
        },
        yanchibian(){
          setTimeout(()=>{
            this. anniup="验证成功";
            document.getElementsByClassName("lansebbjj")[0].style.borderLeftColor="#26c267";
            document.getElementsByClassName("dianjitishi")[0].style.color="#18a452";
            document.getElementById("quanwuw").style.display="none";
            document.getElementById("duit").style.display="block";
          },300)
        },
        daojishi(){
           let time=setInterval(()=>{
               this.miao-=1;
               if(this.miao<=0){
                 document.getElementsByClassName("huoquyzh")[0].style.display="none";
                 document.getElementsByClassName("huoquyz")[0].style.display="block";
                 clearInterval(time);
               }
           },1000)
        },
        huoquyz(){
           document.getElementsByClassName("huoquyz")[0].style.display="none";
          document.getElementsByClassName("huoquyzh")[0].style.display="block";
          this.daojishi();

          this.ma1="111111";
          let url="http://v.juhe.cn/sms/send";
          // let params="mobile=15339166126&tpl_id=135218&tpl_value=%23code%23%3D431515&dtype=&key=4f6d9942bbd50026fc10151764f00939";
          // let params="mobile=15339166126&tpl_id=135218&tpl_value=%23code%23%3D431515&dtype=&key=4f6d9942bbd50026fc10151764f00939";
           let params={
             "mobile":"15029589065",
             "tpl_id":135218,
             "tpl_value":"#code#=111111",
             "key": "4f6d9942bbd50026fc10151764f00939"
           };
          this.getRequest(url,params);
        },
          getRequest(url, params)
          {
            return new Promise((resolve, reject) => {
              this.$http.get(
                url,
                {
                  params: params
                },
                {emulateJSON: true}
              )
                .then((res) => {   //成功的回调
                  // console.log(res);
                })
                .catch((res) => {  //失败的回调
                  // console.log(res);
                });
            });
          },
        fanhui1(){
          this.$router.go(-1);
        }
      },

    }
</script>

<style scoped>
   .bigbox{
     font-size:0.16rem;
   }
  .div1{
    width:100%;
    height: 0.48rem;
    background:#f0f0f0;
    font-size:0.17rem;
    line-height:0.48rem;
    text-align:left;
    text-indent:0.2rem;
  }
  .div2{
    width:3.7rem;
    height: 0.45rem;
    margin:0 auto;
    font-size:0.14rem;
    line-height: 0.45rem;
  }
  .div2 span{
    width:50%;
  }
  .div2 .sp1{
    color:#191919;
    float:left;
    text-align:left;
  }
   .div2 .sp2{
     float:left;
     text-align:right;
     color:#848484;
   }
   .inputw{
     width:100%;
     height: 0.5rem;
     position:relative;
   }
   .yan{
     width:0.28rem;
     height:0.28rem;
     position:absolute;
     left:3.6rem;
     top:0.18rem;
   }
   #yankai{
     display:none;
   }
   .dlzh{
     width:3.8rem;
     height: 0.4rem;
     font-size:0.16rem;
     margin-left:auto;
     margin-right:auto;
     border: 1px solid transparent;
     border-bottom:1px solid #ebebeb;
     outline:none;
     margin-top:0.1rem;
   }
   input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
     color: #b5b5b5;
     font-size: 16px;
   }
    .huoquyz{
      position:absolute;
      width:1rem;
      text-align:center;
      height: 0.45rem;
      line-height: 0.45rem;
      background:white;
      z-index: 1;
      right:0.2rem;
      bottom:0;
      font-size:0.14rem;
      color:#045cbc;
      /*border:1px solid #045cbc;*/
    }
   .huoquyzh{
     position:absolute;
     width:1.1rem;
     height: 0.45rem;
     line-height: 0.45rem;
     background:white;
     z-index: 1;
     right:0.2rem;
     bottom:0;
     font-size:0.14rem;
     color:#b3d7ff;
     border-radius:0.05rem;
     display:none;
     border:1px solid #b3d7ff;
   }
  .dianjiyz{
    width:3.7rem;
    height: 0.4rem;
    border:2px solid #eaeaea;
    background:#fdfdfd;
    margin:0.1rem auto;
    position:relative;
  }
  .dianjitishi{
     position:absolute;
    left:0.6rem;
    line-height: 0.4rem;
    color:#848484;
  }
  .yzyuan{
    width:0.1rem;
    height: 0.1rem;
    display:block;
    position:absolute;
    left:0.2rem;
    top:0.13rem;
    border-radius:50%;
    background:#afbbc0;
    border:1px solid transparent;
  }
  .lansebbjj{
    position:absolute;
    background:#eefff5;
    right:-1px;
    top:-1px;
     width:0.1rem;
    height: 100%;
    border:1.3px solid #26c267;
    border-left-color:transparent;
    transition:all 1s;
    display:none;
  }
  #duit{
    width:0.27rem;
    height: 0.27rem;
    position:absolute;
    left:0.13rem;
    top:0.06rem;
    display:none;
  }
  #yzyuan1{
   background:#c5daf9;
    border:1px solid #2d8dff;
    overflow:hidden;
    transition:all 0.5s;
  }
   #yzyuan2{
     /*background:#2d8dff;*/
   }
  #sanjao{
     position:absolute;
    left:0.001rem;
    top:0.027rem;
    width:0;
    height: 0;
    border-top:0.028rem solid transparent;
    border-bottom:0.028rem solid transparent;
    border-right:0.06rem solid #7db4ff;
    border-left:0.06rem solid transparent;
    z-index:5;
    transition:all 0.2s;
    display:none;
  }
  .buzhengque,.buzhengque2{
    font-size:0.12rem;
    color:#fa5168;
    width:3.8rem;
    line-height: 0.25rem;
    text-align:left;
    margin:0 auto;
    border-top:1px solid #fa5168;
    position:relative;
    display:none;
  }
   .buzhengque2{
     border-top:none;
   }
.tishi{
    font-size:0.12rem;
   color:#8c8c8c;
   width:3.75rem;
   margin: 0 auto;
  text-align:left;
  line-height: 0.36rem;
}
  .bai{
    display:block;
    width:100%;
    height: 0.1rem;
    background:#f2f2f2
  }
  .shiyong{
    width:100%;
    height: 0.42rem;
    color:#1f5bba;
    font-size:0.14rem;
    line-height: 0.42rem;
    text-align:left;
    text-indent:0.2rem;
  }
  .tishi2{
    line-height: 0.18rem;
  }
  .shangwan{
     width:3.9rem;
    margin:0 auto;
    height: 0.35rem;
    margin-top:0.2rem;
  }
  .shangwana{
    float:left;
    width:1.68rem;
    height: 0.35rem;
    border:1px solid #e2e2e2;
    color:#6e7272;
    font-size:0.14rem;
    line-height: 0.35rem;
    text-align:center;
    margin-left:0.2rem;
    border-radius:5px;
  }
  #wancheng{
    color:#d1d1d1;
    border-color:#f7f7f7;
  }
</style>
