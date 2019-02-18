<template>
  <div class="appSon">
    <hw-word-header :data="data.subPage"></hw-word-header>
    <div class="main">
      <div class="ruleProfileText">
          优享购为您提供两种购买方式：
          <span>全款订购</span> 和 <span>免费登记</span>
          ，不同商品实际可选择的购买方式请以页面提示为准。
        </div>

      <hw-yxg-rule-profile :key="index" v-for="(ac,index) in data.yxgRule" :data="ac"></hw-yxg-rule-profile>
    </div>
  </div>
</template>

<script>
  import HwWordHeader from "../components/public/HwWordHeader"
  import HwYxgRuleProfile from "../components/yxgRule/HwYxgRuleProfile"
  import data from "../api-server/data/yxg"
  export default {
    name: "HwYxgRule",
    data(){
      return{
        data
      }
    },
    components:{
      HwWordHeader,HwYxgRuleProfile
    }
  }
</script>

<style scoped>
.appSon{
  height: 100%; display: flex; flex-direction: column; background: white;
}
.main{
  flex: 1; overflow-y: auto; overflow-x: hidden; position: relative;
}
.ruleProfileText{
  padding: .2rem; font-size: .14rem; color: #888;
}

</style>
