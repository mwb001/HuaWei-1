<template>
  <footer>
    <input type="button" value="确定">
  </footer>
</template>

<script>
    export default {
        name: "HwDcFoot"
    }
</script>

<style scoped>
  /* footer */
  footer{
    box-sizing: border-box;
    height:.49rem;
    background: white;
    padding:.06rem .16rem;
  }
  footer input{
    display: block;
    background:url("../../../static/img/footerqd.png") repeat-x;
    font-size:.17rem;
    border-radius: .215rem;
    font-weight: bold;
    color:white;
    width:100%;
    height:100%;
  }
</style>
