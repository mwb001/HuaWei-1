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
        this.$emit("gotop")
      }
    }
  }
</script>

<style scoped>

</style>
