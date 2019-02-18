<template>
    <div class="div1" @click="tiao">
       <p class="divp">{{naxiang}}</p>
        <i class="iconfont icon-youjiantou"></i>
    </div>
</template>

<script>
    export default {
        name: "shezhia",
      props:["naxiang"],
      methods:{
          tiao(){
            this.$emit("tiao");
          }
      }
    }
</script>

<style scoped>
.div1{
  width:90%;
  height: 0.45rem;
  border-bottom:2px solid #f2f2f2;
  margin:0 auto;
  position:relative;
}
.div1 p{
  float:left;
  font-size:0.16rem;
}
  .div1 i{
    font-size:0.2rem;
    line-height: 0.45rem;
  position:absolute;
    right:0;
  }
</style>
