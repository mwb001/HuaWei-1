<template>
  <div>
    <p class="ap" @click="go" ><i class="iconfont icon-youjiantou" ></i></p>
    <p>华为商城以旧换新</p>
    <p class="ap" href="javascript:void(0)"></p>
  </div>

</template>

<script>
    export default {
        name: "HwJxHeadero",
      props:['data'],
      methods:{
          go(){
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped>
  div{
    padding: 0 .15rem;
    height: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
.ap{
  width:5%;
  font-size: .22rem;
  color: #000;
  /*background: yellow;*/
}
  p{
    width: 60%;
    font-size: .2rem;
    color: #333333;
    text-align: center;
    /*background: red;*/
  }


</style>
