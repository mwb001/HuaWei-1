<template>
  <div>
  <div class="title">
    <h3>{{data.tit}}</h3><a href="javascript:void(0)" class="declaration" v-if="data.retit">{{data.retit}}</a>

  </div>
  <div class="declaration_alert_page">
    <div class="declaration_alert">
      <div class="alert_header">声明</div>
      <div class="alert_section">
        <span>
          1. 本网站的转载内容中涉及的商品性能、参数和规格等均不代表官方信息，任何商品对应的参数和规格等信息仅以商品销售页面为准；
        </span>
        <span>
          2. 本网站转载的内容归版权人所有，均已注明转载来源，如版权人对转载及内容有任何异议，请与我们联系，我们会立即更正或者删除有关内容；
        </span>
        <span>
          3. 凡以任何行为实际使用本网站（包括但不限于注册、登录、使用、浏览等）视为您自愿接受本声明的约束。
        </span>
      </div>
      <div class="alert_footer">确认</div>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
      name: "HwFindHeadlineTitle",
      props:['data'],
      mounted(){
        $('.declaration').click(function(){
          $('.declaration_alert_page').show()
        })
        $('.alert_footer').click(function(){
          $('.declaration_alert_page').hide()
        })
      }
    }
</script>

<style scoped>

  .title{
    padding: 0 .12rem; height: .5rem; line-height: .5rem; position: relative; background: white;
  }
  .title h3{
    font-size: .24rem; color: #026baf; text-align: center;
  }
  .title a{
    position: absolute; right: 0rem; top: 0%; text-align: center;
    width: 15%; height: .5rem; line-height: .5rem; font-size: .13rem; color: #b9b9b9;
  }
  .declaration_alert_page{
    position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: none;
    background-color: rgba(0,0,0,.3); visibility: visible; min-height: 100%;
  }
  .declaration_alert{
    position: absolute; left: 50%; top: 50%; margin-left: -45%; margin-top: -1.7rem;
    width: 90%; height: 3.4rem; background: white; font-size: .2rem;
    border-radius: .1rem; display: flex; flex-direction: column;
  }
  .declaration_alert .alert_header{
    width: 100%; line-height: .5rem; text-align: center; font-weight: bold;
    font-size: .18rem; color: #333; border-bottom: 1px solid #eaeaea;
  }
  .declaration_alert .alert_section{
    padding: .2rem; height: 2rem;font-size: .15rem; color: #888;
    overflow-x: hidden; overflow-y: auto;
  }
  .declaration_alert .alert_section span{
    display: block; line-height: .25rem;
  }
  .declaration_alert .alert_footer{
    width: 100%; line-height: .5rem; text-align: center;
    font-size: .17rem; color: #ca141d; border-top: 1px solid #eee;
  }
</style>
