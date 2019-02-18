<template>
    <div class="Hw-Wd-shiming-renzheng Hw-Wd-shiming">
      <div class="Hw-Wd-shiming-top">
        <span class="iconfont icon-shangjiantou" @click="goBack"></span>
        <h2>实名认证</h2>
      </div>
      <el-form :rules="rules">
        <el-form-item label="卡号" class="Hw-Wd-Shiming-Rengzheng-cen" prop="card">
          <el-input v-model="form.card" placeholder="请输入银行卡号"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" class="Hw-Wd-Shiming-Rengzheng-cen" prop="region">
          <el-input v-model="form.region" placeholder="请输入持卡人身份证号"></el-input>
        </el-form-item>
        <el-form-item label="持卡人" class="Hw-Wd-Shiming-Rengzheng-cen" prop="name">
          <el-input v-model="form.name" placeholder="请输入持卡人姓名"></el-input>
        </el-form-item>
        <div class="Hw-Wd-Shiming-Rengzheng-con">
          <h2>温馨提示：</h2>
          <p>1.为保持商城良好的活动运营环境，华为商城需要用户在参与抽奖，领取大额优惠券等活动前必须完成实名认证。</p>
          <p>2.首次实名认证可获得200积分。</p>
          <p>3.实名认证仅支持中国大陆的身份证在大陆开设的银行卡，实名认证过程中华为商城不会记录您的银行卡信息。</p>
          <p>4.请使用借记卡完成实名认证，如使用贷记卡，部分银行可能会扣取1分钱，届时将在5-30个工作日内原账户返还。</p>
          <p>5.实名认证采用的是易宝支付的服务，如成功完成实名认证将开通易宝快捷支付，但不会绑定您的银行卡以及产生其他隐形消费。<a href="#">查看支持银行卡。</a></p>
        </div>
        <el-form-item>
          <el-button type="info" class="next" @click="onSubmit" round>下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "Hw-Wd-Shiming-Renzheng",
        data() {
          return {
            form: {
              name: '',
              region: '',
              resource: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入持卡人姓名', trigger: 'blur' }
              ],
              region: [
                { required: true, message: '请输入持卡人身份证号', trigger: 'blur' }
              ],
              card: [
                { required: true, message: '请输入银行卡号', trigger: 'blur' }
              ]
            }
          }
        },
        methods: {
          goBack(){
            window.history.back(-1)
          },
          onSubmit() {
            console.log('submit!');
          }
        }
    }
</script>

<style>
  @import "../assets/css/Hw-Wd-shiming.css"
</style>
