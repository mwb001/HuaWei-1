<template>
  <li class="activeItem">
    <img :src="data.img">
    <div class="activeInfo">
      <div class="activeTit">
        <p>{{data.tit}}</p><p>{{data.retit}}</p>
      </div>
      <router-link to="" class="shareBtn">立即分享</router-link>
    </div>
  </li>
</template>

<script>
  export default {
    name: "HwInviteActiveItem",
    props:['data']
  }
</script>

<style scoped>
.activeItem{
  display: block; width: 100%;
  background: lightcyan; margin-bottom: .08rem;
}
.activeItem img{
  width: 100%; display: block;
}
.activeItem .activeInfo{
  padding: 0 .2rem; height: .8rem; background: white;
  display: flex; align-items: center; justify-content: space-between; font-size: .15rem;
}
.activeItem .activeInfo .activeTit{
  width: 70%; height: .55rem;
}
.activeItem .activeInfo .activeTit p:nth-child(1){
  width: 100%; line-height: .3rem;
  font-size: .16rem; color: #383838;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.activeItem .activeInfo .activeTit p:nth-child(2){
  width: 100%; line-height: .25rem;
  font-size: .13rem; color: #868686;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.activeItem .activeInfo .shareBtn{
  border: 1px solid #c12622; padding: 0 .15rem; line-height: .35rem;
  font-size: .14rem; color: #c12622; text-align: center; border-radius: .4rem;
}
</style>
