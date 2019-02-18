<template>
    <header>
      <h3>商城头条</h3>
      <span class="iconfont icon-xiajiantou"></span>
    </header>
</template>

<script>
    export default {
        name: "HwMallNewHeader"
    }
</script>

<style scoped>
header{
  height:.39rem;
  line-height: .39rem;
  font-size:.17rem;
  color:#1c1c1c;
  text-align: center;
  position: relative;
}
header h3{
  font-weight: normal;
}
header .iconfont{
  transform: rotate(90deg);
  font-size:.22rem;
  position: absolute;
  top:.11rem;
  left:.22rem;
  font-weight: bold;
}
</style>
