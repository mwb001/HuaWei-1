<template>
  <li>
    <img :src="data.img" alt="">
    <p>{{data.name}}</p>
  </li>
</template>

<script>
    export default {
        name: "HwRightClassThree",
      props:["data"]
    }
</script>

<style scoped>
  .cshoplist li{
    width:33%;
    font-size:.1rem;
    color:#666666;
    margin-bottom:.19rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cshoplist li img{
    width:60%;
    max-width: .48rem;
    height:.48rem;
    margin-bottom: .11rem;
  }
  .cshoplist li p{
    width:80%;
  }
</style>
