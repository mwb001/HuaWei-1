<template>
   <div class="bigbox">
        <div class="div1">
          <i class="iconfont icon-youjiantou" @click="hui1"></i>
           <p>设置</p>
        </div>
        <shezhia v-for="(n,i) in shezhix" :key="i" :naxiang="n" @tiao="tiao(i)"></shezhia>
   </div>
</template>

<script>
   import shezhia from "../components/shezhia/shezhia"
    export default {
        name: "shezhi",
      components:{
          shezhia,
      },
      data(){
          return {
            shezhix:["消息通知设置","版本升级","隐私和安全","意见反馈"]
          }
      },
      methods:{
          tiao(i){
             if(i===3){
               this.$router.push("/fankui")
             }
          },
        hui1(){
            this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
.bigbox{
  display:flex;
  flex-direction: column;
  font-size:0.14rem;
}
  .div1{
    width:4.1rem;
    height: 0.46rem;
    line-height: 0.46rem;
    font-size:0.18rem;
    border-bottom:0.08rem solid #f9f9f9;
  }
  .div1 i{
    float:left;
     font-size:0.2rem;
    transform:rotateZ(180deg);
    line-height: 0.46rem;
    margin-left:0.23rem;
    color:#262626;
  }
  .div1 p{
    float:left;
    margin-left:1.4rem;
    color:#262626;
  }
</style>
