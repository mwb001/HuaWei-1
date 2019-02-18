<template>
  <header>
    <h3>购物车</h3>
    <span class="bianji">编辑</span>
    <span class="wancheng">完成</span>
  </header>
</template>

<script>
    export default {
        name: "HwCarHeader"
    }
</script>

<style scoped>
  /* header */
  header{
    height:.40rem;
    line-height: .40rem;
    font-size:.16rem;
    color:#191919;
    text-align: center;
    position: relative;
  }
  header span{
    display: block;
    color:#838383;
    font-size: .13rem;
    position: absolute;
    top:0%;
    right:4%;
  }
  .wancheng{
    display: none;
  }
</style>
