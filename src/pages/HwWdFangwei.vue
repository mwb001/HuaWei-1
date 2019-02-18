<template>
  <div class="Hw-Wd-fangwei">
    <div class="Hw-Wd-fangwei-top">
      <span class="iconfont icon-shangjiantou" @click="goBack"></span>
      <h2>首页</h2>
    </div>
    <div class="fangweilogo">
      <div class="fangweilogo-left">
        <img src="../../static/img/logo.jpg" alt="">
        <p>HUAWEI</p>
      </div>
      <div class="fangweilogo-right">
        <input type="button" value="English"><input type="button" value="中文">
      </div>
    </div>
    <nav>
      <p>首页</p>
      <p>系统简介</p>
    </nav>
    <div class="Hw-Wd-fangwei-cen">
      <input type="text" placeholder="请输入防伪码" class="fangweima">
      <div class="fangweiyanzhengma">
        <input type="text" placeholder="请输入验证码" class="yanzhengma"><input type="text" class="num" id="num" value="3297" @click="yzm">
      </div>
      <input type="button" value="查询" class="chaxun">
    </div>
    <div class="Hw-Wd-fangwei-bottom">
      <p>华为终端有限公司配件产品防伪验证网站域名为：<span>c-ver.huawei.com</span>,
      请注意鉴别！本网站所载的各种信息和数据真实有效，如因不可
        抗力或其他无法控制的原因造成网站查询系统奔溃或无法
        正常使用。请在系统恢复后查询，华为终端有限公司拥有对本网站最终解释权。
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Hw-Wd-fangwei",
        methods:{
          yzm(){
            let m = "";
            let str = "0123456789"
            for(let i=0;i<4;i++){
                var n = Math.floor(Math.random()*str.length)
                m += str[n];
            }
            document.getElementById("num").value = m;
          },
          goBack(){
            window.history.back(-1)
          }
        }
    }
</script>

<style>
  @import "../assets/css/Hw-Wd-fangwei.css"
</style>
