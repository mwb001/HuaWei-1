<template>
  <ul>
    <li :key="index" v-for="(ac,index) in data">
      <div class="img"><img :src="ac.img"></div>
      <div class="intro">
        <p>{{ac.tit}}</p>
        <p>
          <b>{{ac.riqi}}</b>
          <b>
            <span class="iconfont icon-liulan"></span>
            <em>{{ac.browsing}}</em>
          </b>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
      name: "HwFindHeadlineListCon",
      props:['data']
    }
</script>

<style scoped>
ul{ width: 100%;}
ul li{
  width: 100%; height: 1.2rem; background: white; margin-bottom: .04rem;
  display: flex; align-items: center; justify-content: space-between;
}
ul li .img{
  width: 40%; height: 100%;
}
ul li .img img{
  width: 100%; height: 100%;
}
ul li .intro{
  width: 60%; height: 100%; display: flex; flex-direction: column;
  justify-content: space-between;
}
ul li .intro p:nth-child(1){
  padding: .12rem .12rem 0; line-height: .2rem;
  font-size: .16rem; color: #000000; font-weight: bold;
}
ul li .intro p:nth-child(2){
  padding: 0 .12rem .12rem; line-height: .2rem;font-size: .14rem;color: #cdcdcd;
  display: flex; align-items: center; justify-content: space-between;
}
</style>
