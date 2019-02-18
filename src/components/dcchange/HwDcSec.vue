<template>
  <section>
    <!-- sn码 -->
    <input type="text" placeholder="输入8-20位SN号" value="6583fc67"/>
    <!-- 温馨提示 -->
    <div class="wxts">
      <h3>温馨提示：</h3>
      <div>手机拨号键输入*#06#可查看相应SN号;<br/>
        产品包装盒或手机背贴上有相应的SN号;<br/>
        打开手机设置->系统->关于手机->状态信息查询,可查看相应SN号
      </div>
    </div>
    <!-- 购买说明 -->
    <div class="wxts gmsm">
      <h3>购买说明:</h3>
      <div>
        1、99元换电池服务仅限于指定机型购买，购买后有效期为30天。
        点击查看<a href="">可购买机型;</a><br/>
        2、如您购买该商品后未使用，系统将在有效期（30天）过后3个
        工作日内进行审核，对未使用的订单进行自动退款，并于1-7个
        工作日退至原支付账户；<br/>
        3、改商品不支持有效期内随时退款，如未使用，到期系统自动
        退款，给您造成的不便，敬请谅解；<br/>
        4、请在购买前仔细阅读<a href="">《购买协议与使用规则》</a>
        ，您的付费购买行为将被视为您了解并同意详情所述内容；<br/>
        5、该服务产品购买后需要在华为授权服务中心实现电池更换，
        您可通过直接到店、<a href="">预约</a>、<a href="">寄修</a>
        等形式接收服务；<br/>
        6、如在购买过程中能够遇到问题，请拨打华为客户服务热线
        400-830-8300咨询。<br/>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "HwDcSec"
    }
</script>

<style scoped>
  /* section */
  section{
    /*display: flex;*/
    box-sizing: border-box;
    width:100%;
    background:#f7f9f8;
    padding:.2rem .16rem .14rem .16rem;
    overflow-x: hidden;
    overflow-y: auto;
    flex:1;
  }
  section input{
    display: block;
    box-sizing: border-box;
    width:100%;
    height:.35rem;
    border:.01rem solid#dddddd;
    border-radius: .175rem;
    background: white;
    font-size:.11rem;
    color:#242424;
    line-height: .35rem;
    padding-left:.23rem;
    margin-bottom:.14rem;
  }
  /* 温馨提示 */
  .wxts h3{
    font-size:.14rem;
    color:#3f4140;
    font-weight: normal;
    padding-bottom:5px;
  }
  .wxts div{
    font-size:.14rem;
    line-height:.18rem;
    color:#9a9a9a;
  }
  .wxts div a{
    display: inline-block;
    color:#4185ff;
    text-decoration: underline;
  }
  .gmsm{
    margin-top:.14rem;
  }
</style>
