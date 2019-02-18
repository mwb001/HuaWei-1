<template>
  <li class="leftli">{{data.classname}}<p></p></li>
</template>

<script>

    export default {
        name: "HwSecLeft",
      props:["data"]
    }
</script>

<style scoped>
  .left li{
    height:.19rem;
    padding-top:.18rem;
    padding-bottom: .18rem;
    margin-left:.17rem;
    line-height: .19rem;
    position: relative;
    color:#333333;
  }
  .leftli:first-child{
    color:#bf1820;
  }
  .leftli p{
    display:none;
    width:.02rem;
    height:.19rem;
    border-radius: 3px;
    background: #c9141d;
    position:absolute;
    top:.18rem;
    right:0px;
  }
  .leftli:first-child p{
    display: block;
  }
</style>
