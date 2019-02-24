<template>
     <div class="box">
       <img src="../../static/img/logo.png" alt="" class="logint">
       <h1 class="hwzh">华为账号</h1>
       <input type="text" class="dlzh" placeholder="手机号/邮件地址/华为号" id="zhanghao" @change="zhchange" v-model="zh">
       <p id="zhtishi">华为账号限制在4~50个字符</p>
       <div class="inputw">
         <input type="password" class="dlzh dlzh2" placeholder="密码" id="mima" @input="mimasr" v-model="mima">
         <img src="../../static/img/yan.png" alt="" class="yan" id="yanbi" @click="yanbi">
         <img src="../../static/img/yan2.png" alt="" class="yan" id="yankai" @click="yankai">
       </div>
       <div class="duanxyz">
         <p class="duanxyzp1">短信验证码登录</p>
          <div class="jizhudl">
            <img src="../../static/img/kuang.png" alt="" id="kuang" @click="dui">
             <span id="lanse" @click="lanse">√</span>
             <p>记住账号</p>
          </div>
       </div>
       <div class="dengl" @click="login">登录</div>
       <p class="zhuce" @click="tiao">注册账号</p>
       <p class="zhuce">忘记密码</p>
        <div class="qita">
          <img src="../../static/img/qqlogin.png" alt="" class="qitaa qitaa1">
          <img src="../../static/img/zfblogin.png" alt="" class="qitaa qitaa2">
        </div>
       <p class="zhuce">更多</p>
       <p class="xiam">继续访问即代表您已同意 <span>华为商城服务协议</span> 和 <span> 华为隐私政策</span></p>
     </div>
</template>

<script>
   import {mapGetters} from "vuex"
    export default {
        name: "login",
      computed:mapGetters({
          userok:"getuser",
      }),
      data(){
          return {
            zh:"",
            mima:"",
            zhok:false,
            mimaok:false,
            jizh:false,
          }
      },
      watch:{
        zh:function(){
          this.mimasr();
        }
      },
      methods:{
        zhchange(){
          if(this.zh.length<4 || this.zh.length>50){
            document.getElementById("zhanghao").style.borderBottomColor="#fa5154";
            document.getElementById("zhtishi").style.display="block";
          }else{
             this.zhok=true;
            document.getElementById("zhanghao").style.borderBottomColor="#ebebeb";
            document.getElementById("zhtishi").style.display="none";
          }
        },
        mimasr(){
           if(this.mima.length>0 && this.zhok){
             document.getElementsByClassName("dengl")[0].style.backgroundColor="#007dff";
             this.mimaok=true;
           }else{
             document.getElementsByClassName("dengl")[0].style.backgroundColor="#b5d8ff";
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
          this.jizh=true
        },
        lanse(){
          document.getElementById("kuang").style.display="block";
          document.getElementById("lanse").style.display="none";
          this.jizh=false
        },
        tiao(){
          this.$router.push("/tongzhi");
        },
        login(){
             if(!this.zhok || !this.mimaok){
               return
             }else{
               let dat={
                 user:this.zh,
                 pas:this.mima,
               }
               this.$store.dispatch("userok",dat);
               if(this.userok){
                  if(this.jizh){
                    // addCookie("user",this.zh,7);
                    this.setcookie();
                  }
                 this.$router.push("/HwMy")
               }else{
                  alert("账号或密码错误")
               }
               console.log(this.userok);
             }
        },
        setcookie(){
          var exdate=new Date();//获取时间
          exdate.setTime(exdate.getTime() + 24*60*60*1000*7);//保存的天数
          //字符串拼接cookie
          window.document.cookie="userName"+ "=" +this.zh+";path=/;expires="+exdate.toGMTString();
          window.document.cookie="userPwd"+"="+this.mima+";path=/;expires="+exdate.toGMTString();
        }
      }
    }
</script>

<style scoped>
  .box{
    display:flex;
    text-align: center;
    flex-direction: column;
    position:relative;
    /*height: 100%;*/
    height: 7.3rem;
  }
.logint{
   width:0.38rem;
  height: 0.38rem;
  margin-top:0.53rem;
  margin-left:1.9rem;
}
  .hwzh{
      width:100%;
    margin-top:0.36rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size:0.24rem;
  }
  .inputw{
    width:100%;
    height: 0.5rem;
    position:relative;
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
  #zhtishi{
     color:#fa5154;
    font-size:0.12rem;
    line-height: 0.2rem;
    text-align:left;
    text-indent:0.2rem;
    display:none;
  }
  #zhanghao{
    /*border-bottom-color:#fa5154;*/
    /*border-bottom:1px solid #ebebeb;*/
  }
 .dlzh2{
    position:absolute;
   left:0.2rem;
   top:0;
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
  .duanxyz{
    width:3.7rem;
    height: 0.5rem;
    margin:0 auto;
    margin-top:0.05rem;
  }
  .duanxyzp1{
    color:#005abb;
    font-size:0.14rem;
    line-height: 0.5rem;
    float:left;
  }
  .jizhudl{
    float:left;
    width:1rem;
    height: 0.5rem;
    margin-left:1.7rem;
    position:relative;
  }
  .jizhudl img{
    position:absolute;
    left:0.05rem;
     width:0.2rem;
    height: 0.2rem;
    margin-top:0.15rem;
  }
  #lanse{
     display:block;
      width:0.2rem;
    height: 0.2rem;
    position:absolute;
    left:0.05rem;
    top:0.15rem;
    color:white;
    font-size:0.16rem;
    line-height: 0.25rem;
    font-weight:600;
    background:#007dff;
     display:none;
  }
  .jizhudl p{
    position:absolute;
    line-height: 0.5rem;
    font-size:0.14rem;
    left:0.4rem;
  }
  .dengl{
     color:white;
    background:#b5d8ff;
    /*background:#007dff;*/
    width:2.25rem;
    height: 0.33rem;
    font-size:0.15rem;
    line-height: 0.33rem;
    border-radius:0.03rem;
    margin-left:auto;
    margin-right:auto;
    margin-top:0.1rem;
    margin-bottom:0.05rem;
  }
  .zhuce{
    display:block;
    width:100%;
    height: 0.33rem;
    line-height: 0.33rem;
    font-size:0.14rem;
    color:#007dff;
  }
  .qita{
    width:100%;
    height: 0.6rem;
    margin-top:0.3rem;
  }
  .qitaa{
     float:left;
    width:0.4rem;
    height: 0.4rem;
    margin-top:0.1rem;
  }
  .qitaa1{
    margin-left:1.55rem;
  }
  .qitaa2{
    margin-left:0.28rem;
  }
  .xiam{
     display:block;
     position:absolute;
    bottom:0.1rem;
    width:100%;
    text-align:center;
    font-size:0.13rem;
  }
  .xiam span{
    color:#2780ff;
    text-decoration:underline;
  }
</style>
