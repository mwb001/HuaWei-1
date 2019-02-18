<template>
  <header>
    <img src="../../../static/img/mes-yjt.png" alt="" @click="boback">
    <p>消息中心</p>
  </header>
</template>

<script>
    export default {
        name: "Hw-Mes-Header",
      methods:{
        boback(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  header{
    width:100%;
    height:.39rem;
    font-size:.16rem;
    font-weight: bold;
    display: flex;
    align-items: center;
}
  header img{
    width:.11rem;
    height:.19rem;
    margin-left: .22rem;
    margin-right: 37%;
  }
</style>
