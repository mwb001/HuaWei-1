<template>
  <div class="sever_head">
    <img src="../../../static/img/youjiantou.jpg" alt="" @click="goback">
    <h1>服务中心</h1>
  </div>
</template>

<script>
    export default {
        name: "severhead",
        methods:{
          goback(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  .sever_head{
    height: .46rem;
    line-height: .46rem;
    position: relative;
    background: #ffffff;
  }
  .sever_head h1{
    font-size: .18rem;
    text-align: center;
    font-weight: 500;
  }
  .sever_head img{
    width: .12rem;
    height: .18rem;
    position: absolute;
    left: .15rem;
    top: .15rem;
  }
</style>
