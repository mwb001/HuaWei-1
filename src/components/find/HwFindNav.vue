<template>
  <ul>
    <li :key="index" v-for="(aa,index) in data">
      <img :src="aa.img">
      <span>{{aa.tit}}</span>
    </li>
  </ul>
</template>

<script>
    export default {
      name: "HwFindNav",
      props:['data']
    }
</script>

<style scoped>
  ul{
    padding: 0 .12rem;
    height: 1.1rem;
    background: white;
    display: flex;
    align-items: center;justify-content: space-around;
    border-bottom: 3px solid #f8f8f8;
  }
  ul li{
    width: 18%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: .14rem;
    color: #323232;
  }
  ul li img{
    width: .52rem;
    height: .52rem;
  }
</style>
