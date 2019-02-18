<template>
  <ul>
    <li :key="index" v-for="(ab,index) in data">
      <a href="javascript:void(0)"><img :src="ab"></a>
    </li>
  </ul>
</template>

<script>
    export default {
      name: "HwFindHeadlineNav",
      props:['data']
    }
</script>

<style scoped>
ul{
  padding: 0 .12rem; height: .8rem; background: white;
  display: flex; align-items: center; overflow-x: auto;
}
ul::-webkit-scrollbar{
  display: none;
}
ul li{
  width: 1.1rem; height: 80%;
  margin: 0 .06rem; flex-wrap: nowrap; flex-shrink: 0;
}
ul li a{
  display: block; width: 100%;height: 100%;
}
ul li a img{
  width:100%; height: 100%;
}
</style>
