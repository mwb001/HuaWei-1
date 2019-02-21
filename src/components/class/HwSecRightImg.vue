<template>
  <li><img :src="produce" alt=""></li>
</template>

<script>
    export default {
        name: "HwSecRightImg",
      props:["produce"]
    }
</script>

<style scoped>
  .img li img{
    width:100%;
    height:100%;
    border-radius:4px;
    height:.67rem;
    margin-top:6px;
    box-sizing: border-box;
    margin-top:.08rem;
  }

</style>
