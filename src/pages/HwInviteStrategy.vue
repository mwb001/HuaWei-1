<template>
  <div class="appSon">
    <hw-word-header :data="data.page"></hw-word-header>
    <div class="main">
      <img src="../../static/img/yq_active_gl_01.jpg">
      <img src="../../static/img/yq_active_gl_02.jpg">
      <img src="../../static/img/yq_active_gl_03.jpg">
      <img src="../../static/img/yq_active_gl_04.jpg">
    </div>
  </div>

</template>

<script>
  import HwWordHeader from "../components/public/HwWordHeader"
  import data from "../api-server/data/inviteStratrgy"
  export default {
    name: "HwInviteStrategy",
    data(){
      return{
        data
      }
    },
    components:{
      HwWordHeader
    }
  }
</script>

<style scoped>
.appSon{
  height: 100%; display: flex; flex-direction: column; background: #f8f8f8;
}
.main{
  flex: 1; overflow-y: auto; overflow-x: hidden; position: relative;
}
.main img{
  width: 100%; display: block;
}
</style>
