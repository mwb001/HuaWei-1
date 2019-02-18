<template>
  <ul>
    <li :key="index" v-for="(ad,index) in data">
      <img :src="ad.img">
      <h3>{{ad.tit}}</h3>
      <p>来自 <b>{{ad.user}}</b> 推荐： {{ad.pl}}</p>
      <p></p>
      <p>
        <b>{{ad.riqi}}</b>
        <b>了解详情></b>
      </p>
    </li>
  </ul>
</template>

<script>
    export default {
      name: "HwFindReputationItem",
      props:['data']
    }
</script>

<style scoped>
ul{
  width: 100%; background: #fafafa;
}
li{
  width: 100%; margin-bottom: .12rem; background: white;
}
li img{
  width: 100%; height: 1.2rem; border-radius: .1rem;
}
li h3{
  padding: 0 .1rem;
  line-height: .4rem;
  font-size: .16rem;
  color: black;
}
li p:nth-child(3){
  padding: 0 .1rem; line-height: .2rem; font-size: .14rem; color: #787878;
}
li p:nth-child(3) b{
  color: #bb1324;
}
li p:nth-child(4){
  padding: 0 .12rem; height: 1px; background: #f2f2f2; margin: .1rem 0;
}
li p:nth-child(5){
  padding: 0 .12rem; line-height: .3rem; font-size: .14rem; color: #b3b3b3;
  display: flex; align-items: center; justify-content: space-between;
}
</style>
