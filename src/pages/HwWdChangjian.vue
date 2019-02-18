<template>
    <div class="Hw-Wd-changjian">
      <div class="Hw-Wd-changjian-top">
        <span class="iconfont icon-shangjiantou" @click="goBack"></span>
        <h2>常见问题</h2>
      </div>
      <div class="warning">
        由于商品页面信息随时都又可能发生变动，以下问题供您参考，
        实际以商品详情页、订单显示等页面信息为准。
      </div>
      <item :data="data.prob"></item>
      <HuaWeiFooter></HuaWeiFooter>
    </div>
</template>

<script>
  import item from "../components/changjian/item"
  import data from "../api-server/data/common"
  import HuaWeiFooter from "../common/HuaWeiFooter"
    export default {
        name: "Hw-Wd-changjian",
        components:{
          item,
          HuaWeiFooter
        },
        data(){
          return {
            data
          }
        },
        methods:{
          goBack(){
            window.history.back(-1)
          }
        }
    }
</script>

<style>
  @import "../assets/css/Hw-Wd-changjian.css"
</style>
