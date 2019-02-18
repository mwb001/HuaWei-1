<template>
  <div class="button-top" @click="goTop"></div>
</template>

<script>
    export default {
      name: "goTop",
      data(){
        return {
          scrollTop:null
        }
      },
      methods:{
        goTop(){
          if(document.documentElement.scrollTop > 0){
            document.documentElement.scrollTop = 0
          }
        }
      },
      mounted(){
        window.addEventListener('scroll',()=>{
          this.scrollTop =window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
        },true);
      }
    }
</script>

<style scoped>

</style>
