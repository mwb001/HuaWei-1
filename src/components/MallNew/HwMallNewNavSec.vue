<template>
  <li class="lis">{{data.tit}}<p class="lisp"></p></li>
</template>

<script>
    export default {
        name: "HwMallNewNavSec",
      props:["data"]
    }
</script>

<style scoped>
  .nav li{
    line-height: .37rem;
    color:black;
    margin:0px .22rem;
    position: relative;
    flex-wrap:nowrap;
    flex-shrink: 0;
  }
  li:first-child{
    color:#c21b08;
  }
  .lisp{
    display: none;
    width:80%;
    height:.02rem;
    background: #cc1519;
    border-radius: 3px;
    position: absolute;
    bottom:0px;
    left:10%;
  }
  li:first-child .lisp{
    display: block;
  }

</style>
