<template>
    <div class="footer">
      <ul>
        <li class="active">
          <router-link to="/" href="#">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/HwClass" href="#">
            <i class="iconfont icon-fen_lei2"></i>
            <span>分类</span>
          </router-link>
        </li>
        <li>
          <router-link to="/HwFind" href="#">
            <i class="iconfont icon-Shapecopy"></i>
            <span>发现</span>
          </router-link>
        </li>
        <li>
          <router-link to="/HwCar" href="#">
            <i class="iconfont icon-gouwuche"><span class="cartnum">1</span></i>
            <span>购物车</span>
          </router-link>
        </li>
        <li>
          <router-link to="/HwMy" href="#">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  import $ from "jquery"
    export default {
        name: "footers",
        mounted(){
          $(".footer ul li").click(function(){
            $(".footer ul li").removeClass("active")
            $(this).addClass("active")
          })
        }
    }
</script>

<style scoped>

</style>
