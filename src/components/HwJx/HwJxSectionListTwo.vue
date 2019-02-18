<template>
    <li>
      <img :src="data.img">
      <p>{{data.tit}}</p>
      <img class="imgg" v-if="data.imgg" :src="data.imgg">
    </li>
</template>

<script>
    export default {
        name: "HwJxSectionListTwo",
      props:['data']
    }
</script>

<style scoped>
li{
  width: 20%;
  height: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
img{
  display: block;
  width: 70%;
  height: 55%;
}
  p{
    font-size: .12rem;
    color: #7d6666;
  }
  .imgg{
    display: flex;
    width: .3rem;
    height: .2rem;
    position: absolute;
    left: 0.73rem;
    top: 0.35rem;
  }
</style>
