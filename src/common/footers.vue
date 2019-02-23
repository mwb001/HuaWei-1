<template>
    <div class="footer">
      <ul>
        <router-link to="/" tag="li" exact>
          <a href="#">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
          </a>
        </router-link>
        <router-link to="/HwClass" tag="li">
          <a href="#">
            <i class="iconfont icon-fen_lei2"></i>
            <span>分类</span>
          </a>
        </router-link>
        <router-link to="/HwFind" tag="li">
          <a href="#">
            <i class="iconfont icon-Shapecopy"></i>
            <span>发现</span>
          </a>
        </router-link>
        <router-link to="/HwCar" tag="li">
          <a href="#">
            <i class="iconfont icon-gouwuche"></i>
            <span>购物车</span>
          </a>
        </router-link>
        <router-link to="/HwMy" tag="li">
          <a href="#">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
          </a>
        </router-link>
      </ul>
    </div>
</template>

<script>
  import $ from "jquery"
    export default {
        name: "footers"
    }
</script>

<style scoped>

</style>
