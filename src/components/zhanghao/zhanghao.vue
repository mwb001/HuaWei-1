<template>
  <div>
    <input type="text" class="dlzh" placeholder="手机号/邮件地址/华为号" id="zhanghao" @change="zhchange" v-model="zh">
  </div>

</template>

<script>
    export default {
        name: "zhanghao"
    }
</script>

<style scoped>
  .dlzh{
    width:3.8rem;
    height: 0.4rem;
    font-size:0.16rem;
    margin-left:auto;
    margin-right:auto;
    border: 1px solid transparent;
    border-bottom:1px solid #ebebeb;
    outline:none;
    margin-top:0.1rem;
  }
</style>
