<template>
    <!--<router-link to="" tag="li">-->

    <!--</router-link>-->
   <div class="li" @click="go">
     <img :src="data.img">
     <span>{{data.word}}</span>
   </div>
</template>

<script>
  export default {
    name: "HwMyModule",
    props:['data',"n"],
    mounted(){
    },
    methods:{
      go(){
          if(this.n===5){
            this.$router.push("/add");
          }else if(this.n===0){
            this.$router.push("/vip");
          }else if(this.n===1){
            this.$router.push("/HwInvite");
          }else if(this.n===2){
            this.$router.push("/Hwyxg");
          }else if(this.n===6){
            this.$router.push("/HwWdshiming");
          }
      }
    }
  }
</script>

<style scoped>
.li{
  width : 23%; margin: 0 1%; float: left; height: .8rem;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.li img{
  width: .4rem;
  height: .4rem;
}
.li span{
  font-size: .15rem;
  color: #676767;
  text-align: center;
}
</style>
