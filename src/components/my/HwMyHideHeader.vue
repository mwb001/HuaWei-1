<template>
    <header>
      <div class="left">
        <img src="../../../static/img/defaultface_user_after.png">
        <span>登录/注册</span>
      </div>
      <div class="mess">
        <i class="iconfont icon-xiaoxi"></i>
      </div>
    </header>
</template>

<script>
  export default {
    name: "HwMyHideHeader"
  }

</script>


<style scoped>
header{
  width: 100%;
  height: .5rem;
  background: #e73332;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: none;
}
header .left{
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: .2rem;
}
header .left img{
  width: .4rem;
  height: .4rem;
}
header .left span{
  font-size: .18rem;
  color: white;
  margin-left: .2rem;
}
header .mess{
  width: .3rem;
  height: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: .2rem;
}
header .mess i{
  font-size: .3rem;
  color: white;
}
</style>
