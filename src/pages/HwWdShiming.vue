<template>
    <div class="Hw-Wd-shiming">
      <div class="Hw-Wd-shiming-top">
        <span class="iconfont icon-shangjiantou" @click="goBack"></span>
        <h2>实名认证</h2>
      </div>
      <div class="Hw-Wd-shiming-center">
        <a href="#"><img src="../../static/img/person.jpg" alt=""></a>
        <p>150****9065,您还未实名认证</p>
        <router-link to="/renzheng" tag="input" type="button" value="去认证"></router-link>
      </div>
      <div class="Hw-Wd-shiming-bottom">
        <div class="Hw-Wd-shiming-bottom-title">
          <h2>认证优势</h2>
        </div>
        <div class="Hw-Wd-shiming-bottom-cen">
          <ul>
            <li>
              <img src="../../static/img/zhuan1.jpg" alt="">
              <span>专享活动</span>
            </li>
            <li>
              <img src="../../static/img/zhuan2.jpg" alt="">
              <span>免预约</span>
            </li>
            <li>
              <img src="../../static/img/zhuan3.jpg" alt="">
              <span>优先购</span>
            </li>
            <li>
              <img src="../../static/img/zhuan4.jpg" alt="">
              <span>新品专场</span>
            </li>
          </ul>
        </div>
        <div class="Hw-Wd-shiming-bottom-con">
          <p>1、首次实名认证可获得200积分</p>
          <p>2、实名认证仅支持中国大陆的身份证在大陆开设的银行卡，实名认证过程中华为商城不会记录您的银行卡信息。</p>
          <p>3、请使用借记卡完成实名认证，如使用贷记卡，部分银行可能会扣取1分钱，届时将在5-30个工作日内原账户返还。</p>
          <p>4、实名认证采用的是易支付的服务，如成功完成实名认证将开通易宝快捷支付，但不会绑定您的银行卡以及产生其他隐形消费。</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Hw-Wd-shiming",
        methods:{
          goBack(){
            window.history.back(-1)
          }
        }
    }
</script>

<style>
  @import "../assets/css/Hw-Wd-shiming.css"
</style>
