<template>
  <div class="fir">
    <img :src="data.img" alt="">
    <p>{{data.tit1}}</p>
    <h6>{{data.tit2}}</h6>
  </div>
</template>

<script>
    export default {
        name: "HwJxSectionFir",
      props:['data']
    }
</script>

<style scoped>
  .fir{
    width: 30%;
    height: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  img{
    display: block;
    width: 40%;
    height: 30%;
    padding-top: .15rem;
  }
  p{
    font-size: .14rem;
    color: #888888;
  }
  h6{
    font-size: .22rem;
    color: #333333;
    padding-bottom: .15rem;
  }
</style>
