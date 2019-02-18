<template>
    <div class="list">
      <ul :class="tro.troclass">
        <!--<li :key="index" v-for="(n ,index) of tro.trouble">-->
          <!--<a href="##">{{n.trotitle}}</a>-->
        <!--</li>-->
        <li><a href="##" class="active">常见问题</a></li>
        <li><a href="##">购物指南</a></li>
        <li><a href="##">售后服务</a></li>
        <li><a href="##">用户权益</a></li>

      </ul>
        <div class="trolist tro_act">
          <!--<a :key="index" v-for="(s,index) of n.torlist" href="##">{{s}}</a>-->
          <a href="##">发什么快递</a>
          <a href="##">下单后从哪儿发货</a>
          <a href="##">查询华为客户中心(售后网点)地址</a>
          <a href="##">如何判断想要够买的商品是否有货</a>
          <a href="##">商品到货后如何签收</a>
          <a href="##">如何查询产品配件的维修价格</a>
          <a href="##">是否支持分期付款</a>
          <a href="##">订单多长时间内支付有效</a>
          <a href="##">购买的手机包含哪些配件</a>
          <a href="##">收货地址如何修改</a>
          <a href="##">退货时间从什么时侯算起</a>
          <a href="##">购买商品是否有赠品</a>
          <a href="##">保修政策</a>
          <a href="##">为什么看不到V码</a>
          <a href="##">如何提高账号安全性</a>
          <a href="##">手机端电子发票下载存储路径是在哪里</a>
          <a href="##">诈骗订单场景问题</a>
        </div>
        <div class="trolist">
          <a href="##">点单操作</a>
          <a href="##">支付帮助</a>
          <a href="##">免息分期</a>
          <a href="##">物流帮助</a>
          <a href="##">保障服务</a>
        </div>
        <div class="trolist">
          <a href="##">保修政策</a>
          <a href="##">退换货政策</a>
          <a href="##">手机寄修服务</a>
          <a href="##">门店维修</a>
          <a href="##">维修配件价格查询</a>
          <a href="##">发票相关问题</a>
          <a href="##">退款方式及周期</a>
          <a href="##">消费者权益服务e站</a>
        </div>
        <div class="trolist">
          <a href="##">代金券说明</a>
          <a href="##">优惠券说明</a>
          <a href="##">Vmall积分说明</a>
          <a href="##">优购码说明</a>
          <a href="##">优购码说明</a>
        </div>
      <p class="kefu">找不到想要的，试试<a href="##">在线客服</a>吧~</p>
    </div>
</template>

<script>
  // import $ from ""
    export default {
        name: "SeverConsult",
        props:["tro"],
       data(){
         return {
            n:0,
         }
       },
        mounted() {
          $(".list li a").each(function(i){
            $(this).mouseover(function () {
              $(".list li a").each(function(i){
                $(this).removeClass("active");
                // console.log($(".list>div").eq(i))
                $(".list>div").eq(i).css({display:"none"})
              })
              $(this).addClass("active");
              $(".list>div").eq(i).css({display:"block"})
            })
          })


        }
    }
</script>

<style scoped>
  .list{
    padding: 0 .2rem;
    min-height: 6.5rem;
  }
  .trouble{
    display: flex;
  }
  .trouble li{
    padding: 0 .1rem;
  }
  .trouble li:nth-child(1){
    padding: 0 ;
  }
  .trouble a{
    display: block;
    font-size: .14rem;
    color: #333;
    margin: .1rem 0;
    padding: .05rem;
  }
  .trouble .active{
    border: 1px solid #ca411d;
    border-radius: 10px;
    color: #ca411d;
  }
  .trolist{
    display: none;
  }
  .tro_act{
    display: block;
  }
  .trolist a{
    display: block;
    font-size: .15rem;
    color: #333;
    padding: .1rem 0;
    border-top:1px solid #eee;
  }
  .kefu{
    font-size: .14rem;
    color: #888;
    text-align: center;
    line-height: .3rem;
  }
  .kefu a{
    color: #CA141D;
  }

</style>
