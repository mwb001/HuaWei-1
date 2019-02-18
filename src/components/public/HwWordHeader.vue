<template>
    <header>
      <div class="back" @click="prev"><img :src="data.backImg"></div>
      <h5>{{data.tit}}</h5>
      <div class="share"><img v-if="data.shareImg" :src="data.shareImg"></div>
    </header>
</template>

<script>
  export default {
    name: "HwWordHeader",
    props:['data'],
    methods:{
      prev(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
header{
  padding: 0 .12rem; height: .5rem; background: white;
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
}
header .back,header .share,header .back img,header .share img{
  width: .3rem; height: .3rem;
}
header h5{
  font-size: .2rem; color: #191919;
}
</style>
