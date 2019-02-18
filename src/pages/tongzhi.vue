<template>
    <div class="bigbox">
       <div class="div1">华为账号通知</div>
       <div class="country">
         <div class="countryz">
           <p class="p1">国家/地区</p>
           <p class="p2">正在注册{{country}}华为账号</p>
         </div>
         <div class="countryy" @click="tiao">
           {{country}} <i class="iconfont icon-youjiantou"></i>
         </div>
       </div>
      <img src="../../static/img/xieyi2.jpg" alt="" class="xieyi">
      <div class="okbu">
         <p class="okbua" @click="quxiao">取消</p>
        <p class="okbua" @click="queding">确定</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tongzhi",
      data(){
          return {
            country:"中国"
          }
      },
      methods:{
          tiao(){
          this.$router.push("/country")
          },
        quxiao(){
            this.$router.go(-1);
        },
        queding(){
        this.$router.push("/reg");
        }
      }
    }
</script>

<style scoped>
  .bigbox{
    /*display:flex;*/
    /*flex-direction:column;*/
  }
  p,a,h1,h2,h3,h4,h5,h6,span{
    font-size:0.16rem;
    text-align:left;
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
  .country{
    width:3.8rem;
    height: 0.55rem;
    margin: 0 auto;
    border-bottom:1px solid #e6e6e6;
  }
  .countryz{
    float:left;
    width:2rem;
    height: 0.55rem;
  }
  .countryz .p1{
      margin-top:0.11rem;
    font-size:0.14rem;
    color:#2a2212;
  }
  .countryz .p2{
    font-size:0.12rem;
    color:#a1a3a6;
  }
  .countryy{
    font-size:0.14rem;
    color:#a4a4ae;
    line-height: 0.55rem;
    text-align:right;
  }
  .xieyi{
    display:block;
    width:100%;
    height: 6rem;
  }
  .okbu{
    position:fixed;
    bottom:0.1rem;
    width:3.9rem;
    height: 0.35rem;
    left:0.1rem;
  }
  .okbua{
    float:left;
    width:1.8rem;
    height: 0.33rem;
    border:1px solid #e3e3e3;
    border-radius:3px;
    margin-left:0.1rem;
    font-size:0.14rem;
    line-height: 0.33rem;
    text-align:center;
    font-weight:600;
  }
</style>
