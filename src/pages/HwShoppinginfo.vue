<template>
    <div class="appSon">
      <header>
        <div class="back" @click="prev"><img src="../../static/img/zjt.jpg"></div>
        <div class="nav">
          <a href="#shop">商品<span></span></a>
          <a href="#pingjia">评价<span></span></a>
          <a href="#intro">参数<span></span></a>
          <a href="#info">详情<span></span></a>
        </div>
        <div class="hide_nav">
          <img src="../../static/img/ysd.gif">
          <ul  class="hide_nav_nav">
            <li><router-link to="">
              <i class="iconfont  icon-shouye"></i><span>首页</span>
            </router-link></li>
            <li><router-link to="">
              <i class="iconfont  icon-sousuo"></i><span>搜索</span>
            </router-link></li>
            <li><router-link to="">
              <i class="iconfont  icon-fen_lei2"></i><span>分类</span>
            </router-link></li>
            <li><router-link to="">
              <i class="iconfont  icon-gouwuche"></i><span>购物车</span>
            </router-link></li>
            <li><router-link to="/my">
              <i class="iconfont  icon-wode"></i><span>我的</span>
            </router-link></li>
            <li><router-link to="">
              <img src="../../static/img/share.jpg" alt=""><span>分享</span>
            </router-link></li>
          </ul>
        </div>
      </header>


      <div class="main">
        <div class="goTop"></div>

        <ul class="header">
          <li @click="prev"><img src="../../static/img/icon_back_grey.png" ></li>
          <li>
            <img src="../../static/img/icon_more_grey.png" >
            <ul class="hide_nav_nav">
              <li><router-link to="">
                <i class="iconfont  icon-shouye"></i><span>首页</span>
              </router-link></li>
              <li><router-link to="">
                <i class="iconfont  icon-sousuo"></i><span>搜索</span>
              </router-link></li>
              <li><router-link to="">
                <i class="iconfont  icon-fen_lei2"></i><span>分类</span>
              </router-link></li>
              <li><router-link to="">
                <i class="iconfont  icon-gouwuche"></i><span>购物车</span>
              </router-link></li>
              <li><router-link to="/my">
                <i class="iconfont  icon-wode"></i><span>我的</span>
              </router-link></li>
              <li><router-link to="">
                <img src="../../static/img/share.jpg" alt=""><span>分享</span>
              </router-link></li>
            </ul>
          </li>
        </ul>

        <!--商品-->
        <div id="shop"  class="scroll_nav shop">
          <div class="banner">
            <hw-shoppinginfo-banner></hw-shoppinginfo-banner>
          </div>

          <div class="priceAndName">
            <div class="shopPrice">￥ <b>1899</b></div>
            <div class="shopName">荣耀V20 麒麟980 魅眼全视屏 4800万AI超清摄影 全网通6GB+128GB 标配版 幻夜黑 套餐一</div>
            <div class="shopReNameOne">
              【2月14日10:08开售】购机享多重权益，下单付款后预计一周内发货
            </div>
            <div class="shopReNameTwo">
              麒麟980处理器|4800万像素摄像头|4000mAh大容量电池|超级快充
            </div>
          </div>

          <div class="active">
            <div class="cuxiao">
              <p>促销</p>
              <ul>
                <li>
                  <span>赠送积分</span><span>购买即赠商城积分，积分可抵现</span>
                </li>
              </ul>
              <img class="cuxiao_info_div" src="../../static/img/ysd.gif">
            </div>

            <div class="cuxiao_div">
              <div class="cuxiao_info">
                <div class="cuxiao_header">
                  <h3>促销</h3> <i class="iconfont icon-error"></i>
                </div>
                <div class="cuxiao_section">
                  <ul>
                    <li>
                      <span>赠送积分</span><span>购买即赠商城积分，积分可抵现gfbtvhgcsegvyvrtgcvgrh</span>
                    </li>
                  </ul>
                </div>
                <div class="cuxiao_footer">确定</div>
              </div>
            </div>
          </div>

          <div class="attrs">
            <div class="attrsList">
                <p>颜色</p>
                <ul class="attrsValue">
                  <li class="attrs_curr_value">魅海蓝</li><li>幻夜黑</li><li>魅力红</li><li>幻影红</li><li>幻影蓝</li>
                </ul>
            </div>
            <div class="attrsList">
              <p>版本</p>
              <ul class="attrsValue">
                <li class="attrs_curr_value">全网通 6GB+128GB</li><li>全网通 8GB+128GB</li><li>MOSCHINO联名版</li>
              </ul>
            </div>
            <div class="attrsList">
              <p>类型</p>
              <ul class="attrsValue">
                <li class="attrs_curr_value">官方标配</li><li>套餐一</li><li>套餐二</li><li>套餐三</li>
              </ul>
            </div>
            <div class="attrsList">
              <p>数量</p>
              <ul class="attrsCount">
                <a class="minus" href="javascript:void(0)">-</a>
                <span>1</span>
                <a class="add" href="javascript:void(0)">+</a>
              </ul>
            </div>
          </div>

          <div class="tuijian">
            <p>推荐</p>
            <ul class="tuijianList">
              <li>荣耀FlyPods系列无线耳机</li><li>荣耀存储</li>
              <li>荣耀手表</li><li>荣耀无线耳机青春版</li>
            </ul>
          </div>

          <div class="oldFreshNew">
            <div class="imgs"><img src="../../static/img/icon_replace_grey.png"></div>
            <p>
              <span>以旧换新</span>
              <span>旧机回收最高抵5599元</span>
            </p>
          </div>
        </div>

        <!--评价-->
        <div id="pingjia" class="scroll_nav pingjia">
          <div class="pingjia_header">
            <h6>用户评价 (<span>43543</span>)</h6>
            <p><span>98%</span> 好评 <i class="iconfont icon-youjiantou"></i></p>
          </div>
          <div class="pingjia_section">
            <ul class="pingjia_list">
              <li>
                <div class="word">
                  <div class="user">
                    <div class="user_tx"><img src="../../static/img/defaultface_user_after.png"></div>
                    <div class="user_name">
                      <h6>漂***移</h6>
                      <p>
                        <img src="../../static/img/star.jpg">
                        <img src="../../static/img/star.jpg">
                        <img src="../../static/img/star.jpg">
                        <img src="../../static/img/star.jpg">
                        <img src="../../static/img/star.jpg">
                      </p>
                    </div>
                  </div>
                  <div class="text">
                    手机颜值太高，系统运行非常流畅。不亏是中国人的手机——荣耀
                  </div>
                </div>
                <div class="imgss"><img src="../../static/img/2.jpg"></div>
              </li>
              <li>
                <div class="word">
                  <div class="user">
                    <div class="user_tx"><img src="../../static/img/defaultface_user_after.png"></div>
                    <div class="user_name">
                      <h6>漂***移</h6>
                      <p>
                        <img src="../../static/img/star.jpg">
                        <img src="../../static/img/star.jpg">
                        <img src="../../static/img/star.jpg">
                        <img src="../../static/img/star.jpg">
                        <img src="../../static/img/star.jpg">
                      </p>
                    </div>
                  </div>
                  <div class="text">
                    手机颜值太高，系统运行非常流畅。不亏是中国人的手机——荣耀
                  </div>
                </div>
                <div class="imgss"><img src="../../static/img/2.jpg"></div>
              </li>
              <li>
                <div class="word">
                  <div class="user">
                    <div class="user_tx"><img src="../../static/img/defaultface_user_after.png"></div>
                    <div class="user_name">
                      <h6>漂***移</h6>
                      <p>
                        <img src="../../static/img/star.jpg">
                        <img src="../../static/img/star.jpg">
                        <img src="../../static/img/star.jpg">
                        <img src="../../static/img/star.jpg">
                        <img src="../../static/img/star.jpg">
                      </p>
                    </div>
                  </div>
                  <div class="text">
                    手机颜值太高，系统运行非常流畅。不亏是中国人的手机——荣耀
                  </div>
                </div>
                <div class="imgss"><img src="../../static/img/2.jpg"></div>
              </li>
            </ul>
          </div>
          <div class="pingjia_footer">
            <router-link to="">查看全部评价</router-link>
            <router-link to="">购买咨询 (<span>3254</span>)</router-link>
          </div>
          <div class="pingjia_end">
            <img src="../../static/img/icon-line.png">
          </div>
        </div>

        <!--参数-->
        <div id="intro" class="scroll_nav intro">
          <h6>规格参数</h6>
          <table>
            <tr>
              <td>传播名</td>
              <td>荣耀V20</td>
            </tr>
            <tr>
              <td>后置摄像头</td>
              <td>4800万像素（f/1.8光圈）+TOF立体深感镜头，支持自动对焦。备注：不同拍照模式的照片像素可能有差异，请以实际为准。</td>
            </tr>
            <tr>
              <td>前置摄像头</td>
              <td>前置单摄：2500万像素，f/2.0光圈，支持固定焦距。备注：不同拍照模式的照片像素可能有差异，请以实际为准。</td>
            </tr>
          </table>
          <div class="more_intros">
            <router-link tag="p" to="/shopAttrs">查看全部参数</router-link>
          </div>
        </div>

        <!--详情-->
        <div id="info" class="scroll_nav info">
          <p><img src="../../static/img/3.jpg"></p>
          <p><img src="../../static/img/4.jpg"></p>
          <p><img src="../../static/img/5.jpg"></p>
          <p><img src="../../static/img/zrsm.jpg"></p>
        </div>

        <div class="shouhouAndTixing">
          <div class="shouhou">
            <p>售后服务</p>
            <ul>
              <li>本产品全国联保，享受三包服务，质保期为：一年质保</li>
              <li>如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受7天内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！</li>
              <li>售后服务电话：400-830-8300</li>
              <li>华为消费者BG官网： <router-link to="https://consumer.huawei.com/cn/">https://consumer.huawei.com/cn/</router-link></li>
            </ul>
          </div>
          <div class="shouhou tixing">
            <p>特别提醒</p>
            <ul>
              <li>以上页面中的产品图片及屏幕内容仅作示意，实物产品效果（包括但不仅限于外观、颜色、尺寸）和屏幕显示内容（包括但不仅限于背景、UI、配图）可能略有差异，请以实物为准。</li>
              <li>以上页面中的数据为理论值，均来自华为内部实验室，于特定测试环境下所得（请见各项具体说明），实际使用中可能因产品个体差异、软件版本、使用条件和环境因素不同略有不同，请以实际使用的情况为准。</li>
              <li>为提供尽可能准确的产品信息、规格参数、产品特性，华为或荣耀可能实时调整和修订以上页面中的文字描述、图片效果等内容，以求与实际产品性能、规格、指数、零部件等信息相匹配，由于产品批次和生产供应因素实时变化，如遇确有进行上述修改和调整必要的情形，恕不专门通知。</li>
            </ul>
          </div>
        </div>
      </div>


      <footer>
        <ul class="left">
          <li>
            <i class="iconfont icon-kefu"></i><span>客服</span>
          </li>
          <li>
            <i class="iconfont icon-gouwuche"></i><span>购物车</span>
          </li>
        </ul>
        <router-link to="" class="goPay">加入购物车</router-link>
      </footer>
    </div>
</template>

<script>
  import HwShoppinginfoBanner from "../components/shoppingInfo/HwShoppinginfoBanner"
  import Swiper from "swiper"
  import "../../node_modules/swiper/dist/css/swiper.css"
  import "../../node_modules/swiper/dist/js/swiper.js"
  export default {
    name: "HwShoppinginfo",
    components:{
      HwShoppinginfoBanner
    },
    Swiper,
    methods:{
      prev(){
        this.$router.go(-1);
      }
    },
    mounted(){
      // 轮播图
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          disableOnInteraction: false, delay: 1500
        },
        pagination: {
          el: '.swiper-pagination',type: 'fraction',
        }
      })
      // 头部导航的切换
      $('header .nav a').each(function(){
        $(this).click(function(){
          $('header .nav a').each(function(){
            $(this).css('color','#333')
            $(this).find('span').css('display','none')
          })
          $(this).css('color','#ca141d')
          $(this).find('span').css('display','block')
        })
      })
      // 头部隐藏导航的显示隐藏
      $('header .hide_nav').click(function(){
        $(this).find('ul').toggle()
      })
      $('.header li:nth-child(2)').click(function(){
        $(this).find('ul').toggle()
      })
      // 滚动条到一定距离带有导航的头部显示隐藏
      $('.main').scroll(function(){
        if($('.main').scrollTop() >= 100){
          $('header').css('display','flex')
        }else{
          $('header').css('display','none')
        }
      })
      // 促销详情的显示隐藏
      $('.active .cuxiao>img').click(function(){
        $('.cuxiao_div').css('display','block')
        $('.cuxiao_div .cuxiao_info').animate({bottom : "0"})
      })
      $('.cuxiao_div .cuxiao_header .iconfont').click(function() {
        $('.cuxiao_div').css('display','none')
        $('.cuxiao_div .cuxiao_info').animate({bottom: "-100%"})
      })
      $('.cuxiao_div .cuxiao_footer').click(function() {
        $('.cuxiao_div').css('display','none')
        $('.cuxiao_div .cuxiao_info').animate({bottom: "-100%"})
      })
      // 参数的选中状态的切换
      $('.attrs .attrsList').each(function(i){
        $(this).find('.attrsValue li').each(function(){
          $(this).click(function(){
            $('.attrs .attrsList').eq(i).find('.attrsValue li').each(function(){
              $(this).removeClass("attrs_curr_value")
            })
            $(this).addClass("attrs_curr_value")
          })
        })
      })
      // 数量的修改
      $('.add').click(function(){
        let shopNum = parseInt($(this).parent().find('span').html());
        if(shopNum>=5){
          $(this).parent().find('span').html(5)
        }else{
          $(this).parent().find('span').html(++shopNum);
        }
      })
      $('.minus').click(function(){
        let shopNum = parseInt($(this).parent().find('span').html());
        if(shopNum<=1){
          $(this).parent().find('span').html(1)
        }else{
          $(this).parent().find('span').html(--shopNum)
        }
      })
      // 回顶部按钮的显示隐藏
      $('.main').scroll(function(){
        if($('.main').scrollTop() >= 120){
          $('.goTop').css('display','block')
        }else{
          $('.goTop').css('display','none')
        }
      })
      // 回顶部
      $('.goTop').click(function(){
        let scrollTop = $('.main').scrollTop();
        goTop();
        function goTop(){
          if(scrollTop>0){
            scrollTop-=100;
            $('.main').scrollTop(scrollTop)
          }
          setTimeout(goTop,10)
        }

      })
      // 滚动条滚动对应的导航高亮显示
      $('.main').scroll(function(){
        $('.scroll_nav').each(function(i){
          if($(this).offset().top <= 150){
            $('header .nav a').each(function(){
              $(this).css('color','#333')
              $(this).find('span').css('display','none')
            })
            $('header .nav a').eq(i).css('color','#ca141d')
            $('header .nav a').eq(i).find('span').css('display','block')
          }
        })
      })

    }
  }
</script>

<style scoped>
.appSon{
  height: 100%; display: flex; flex-direction: column; background: #f9f9f9;
}
.main{
  flex: 1; overflow-y: auto; overflow-x: hidden; position: relative;
}
header{
  padding: 0 .15rem; height: .5rem; background: white;
  display: flex; align-items: center; justify-content: space-between; display: none;
}
header .back,header .back img{
  width: .3rem; height: .3rem;
}
header .nav{
  width: 70%; height: .5rem;
  display: flex; align-items: center; justify-content: space-around;
}
header .nav a{
  font-size: .17rem; color: #333; position: relative;
}
header .nav a:first-child{
  color: #ca141d;
}
header .nav a span{
  width: .28rem; height: 2px; background: #ca141d;
  position: absolute; left: 0.03rem; top: .26rem; display: none;
}
header .nav a:first-child span{
  display: block;
}
header .hide_nav{
  position: relative;
}
header .hide_nav,header .hide_nav>img{
  width: .3rem; height: .3rem;
}
.hide_nav_nav{
  width: 1.2rem; background: rgba(255,255,255,.2);
  box-shadow: 0rem 0rem 0.25rem 0rem rgba(0,0,0,0.1);
  border-radius: .05rem;  font-size: .15rem;
  position: absolute; right: 0; top: .4rem; display: none; z-index: 90;
}
.hide_nav_nav li{
  width: 100%; line-height: .45rem; border-bottom: 1px solid rgba(255,255,255,0.8);
}
.hide_nav_nav li a{
  width: 100%; height: 100%; font-size: .17rem; color: #333;
  display: flex; align-items: center;
}
.hide_nav_nav li a .iconfont{
  font-size: .22rem; color: #333; margin-left: .2rem; margin-right: .15rem;
}
.hide_nav_nav li a img{
  width: .22rem; height: .22rem; margin-left: .2rem; margin-right: .15rem;
}


.goTop{
  width: .7rem; height: .7rem; border-radius: 50%;
  background: url("../../static/img/button-top.png");
  background-size: 100%; display: none;
  position: fixed; right: .2rem; bottom: .5rem;
}



.header{
  width: 100%; height: .5rem; background: transparent;
  display: flex; align-items: center; justify-content: space-between;
  position: absolute; left: 0; top: 0; z-index: 100;
}
.header>li{
  width: .35rem; height: .35rem; display: flex;
}
.header>li img{
  width: 100%; height: 100%;
}
.header>li:first-child{
  margin-left: .2rem;
}
.header>li:last-child{
  margin-right: .2rem; position: relative;
}


.shop{
  width: 100%;
}
.shop .banner{
  width: 100%; height: 4.5rem; background: white; margin-bottom: .02rem;
}
.shop .priceAndName{
  padding: .15rem; font-size: .15rem;
  border-bottom: 1px solid rgba(234,234,234,0.5); background: white;
}
.shop .priceAndName .shopPrice{
  line-height: .3rem; font-size: .18rem; color: #cb1922; font-weight: bold;
}
.shop .priceAndName .shopPrice b{
  font-size: .22rem;
}
.shop .priceAndName .shopName{
  font-size: .18rem; color: #333333; font-weight: bold; margin-bottom: .04rem;
}
.shop .priceAndName .shopReNameOne{
  font-size: .14rem; color: #cb1922;
}
.shop .priceAndName .shopReNameTwo{
  font-size: .14rem; color: #898989;
}
.shop .active{
  padding: .1rem .15rem; margin-bottom: .1rem; background: white;
}
.shop .active .cuxiao{
  width: 100%; display: flex; align-items: center; justify-content: space-between;
}
.shop .active .cuxiao>p{
  font-size: .14rem; color: #8f8f8f;
}
.shop .active .cuxiao>ul{
  width: 75%; margin: 0 .15rem;
}
.shop .active .cuxiao>ul li{
  font-size: .14rem; line-height: .3rem; width: 100%;
  display: flex; align-items: center;
}
.shop .active .cuxiao>ul li span:first-child{
  color: #ef5a62; display: inline-block; line-height: .2rem;
  padding: 0 .1rem; border: 1px solid #ef5a62; margin-right: .15rem; border-radius: .2rem;
}
.shop .active .cuxiao>ul li span:last-child{
  color: #878787; display: inline-block; flex: 1;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.shop .active .cuxiao>img{
  width: .25rem; height: .25rem;
}
.shop .active .cuxiao_div{
  position: fixed; left: 0; bottom: 0; z-index: 100;
  width: 100%; height: 100%; background: rgba(0,0,0,.2); display: none;
}
.shop .active .cuxiao_div .cuxiao_info{
  width: 100%; height: 60%; position: absolute; left: 0; bottom: -100%;
  border-top-right-radius: .1rem; border-top-left-radius: .1rem;
  background: white; display: flex; flex-direction: column;
}
.shop .active .cuxiao_div .cuxiao_info .cuxiao_header{
  height: 10%; padding: 0 .15rem;
  display: flex; align-items: center; justify-content: space-between;
  font-size: .17rem; color: #191919;
}
.shop .active .cuxiao_div .cuxiao_info .cuxiao_header .iconfont{
  font-size: .3rem; color: lightgrey;
}
.shop .active .cuxiao_div .cuxiao_info .cuxiao_section{
  flex: 1; padding: .15rem; background: white;
  overflow-y: auto;
}
.shop .active .cuxiao_div .cuxiao_info .cuxiao_section ul{
  width: 100%; height: 100%;
}
.shop .active .cuxiao_div .cuxiao_info .cuxiao_section ul li{
  font-size: .14rem; line-height: .3rem; width: 100%;
  display: flex; align-items: center;
}
.shop .active .cuxiao_div .cuxiao_info .cuxiao_section ul li span:first-child{
  color: #ef5a62; display: inline-block; line-height: .2rem;
  padding: 0 .1rem; border: 1px solid #ef5a62; margin-right: .15rem; border-radius: .2rem;
}
.shop .active .cuxiao_div .cuxiao_info .cuxiao_section ul li span:last-child{
  color: #333; display: inline-block; flex: 1;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.shop .active .cuxiao_div .cuxiao_info .cuxiao_footer{
  height: 10%; width: 80%; background: #ca141d;
  text-align: center; display: flex; align-items: center; justify-content: center;
  font-size: .17rem; color: white; border-radius: .3rem; margin: 2% auto;
}
.shop .attrs{
  padding: .1rem .15rem; background: white; margin-bottom: .1rem;
}
.shop .attrs .attrsList{
  width: 100%; display: flex; align-items: center; margin-bottom: .05rem;
}
.shop .attrs .attrsList p{
  width: 10%; font-size: .15rem; color: #666;
}
.shop .attrs .attrsList .attrsValue{
  flex: 1; margin: 0 .15rem; font-size: .15rem; color: #333;
}
.shop .attrs .attrsList .attrsValue li{
  float: left; border: 1px solid rgba(178,178,178,0.5); border-radius: 1rem;
  margin: .03rem .05rem; padding: .02rem .1rem;
}
.shop .attrs .attrsList .attrsValue .attrs_curr_value{
  border-color: #ca151e;color: #ca151e;
}
.shop .attrs .attrsList .attrsCount{
  flex: 1; padding-left: .2rem;
  display: flex; align-items: center; font-size: .2rem; color: #333;
}
.shop .attrs .attrsList .attrsCount a{
  display: block; width: .28rem;line-height: .28rem;
  text-align: center; color: #666;
  border-radius: 50%; border: 1px solid rgba(51,51,51,.3);
}
.shop .attrs .attrsList .attrsCount span{
  margin: 0 .1rem;
}
.shop .tuijian{
  padding: .1rem .15rem; background: white; margin-bottom: .1rem; display: flex; align-items: center;
}
.shop .tuijian p{
  width: 10%; font-size: .15rem; color: #666;
}
.shop .tuijian .tuijianList{
  flex: 1; font-size: .15rem; color: #333; margin: 0 .15rem;
}
.shop .tuijian .tuijianList li{
  float: left; background: #f3f3f3; border-radius: 1rem;
  margin: .03rem .05rem; padding: .02rem .1rem;
}
.shop .oldFreshNew{
  padding: .1rem .15rem; background: white; margin-bottom: .1rem;
  display: flex; align-items: center; justify-content: space-between;
}
.shop .oldFreshNew .imgs{
  width: 10%; height: .2rem;
}
.shop .oldFreshNew img{
  width: .2rem; height: .2rem;
}
.shop .oldFreshNew p{
  font-size: .15rem; color: #333; flex: 1; padding: 0 .15rem;
  display: flex;
}
.shop .oldFreshNew p span:nth-child(2){
  color: #999; margin-left: .2rem; display: block;
}


.pingjia{
  width: 100%;
}
.pingjia .pingjia_header{
  padding: 0 .15rem; background: white; height: .5rem; font-size: .15rem;
  display: flex; align-items: center; justify-content: space-between;
  color: #ca141d; color: #666;
}
.pingjia .pingjia_header h6{
  font-size: .17rem; color: #333;
}
.pingjia .pingjia_header p{
  font-size: .16rem; color: #666;
}
.pingjia .pingjia_header p span{
  color: #ca141d;
}
.pingjia .pingjia_header p .iconfont{
  font-size: .2rem; color: #666;
}
.pingjia .pingjia_section{
  padding: 0 .15rem; height: 1.8rem; font-size: .15rem;
  display: flex; align-items: center; background: white;
}
.pingjia .pingjia_section .pingjia_list{
  width: 100%; height: 1.7rem;
  display: flex; overflow-x: auto; align-items: center;
}
.pingjia .pingjia_section .pingjia_list::-webkit-scrollbar{
  display: none;
}
.pingjia .pingjia_section .pingjia_list li{
  width: 90%; height: 92%; box-shadow: 0rem 0rem 0.25rem 0rem rgba(0,0,0,0.1);
  margin: 0 .12rem; flex-shrink: 0; flex-wrap: nowrap;
  display: flex; align-items: center; justify-content: space-around;
}
.pingjia .pingjia_section .pingjia_list li .word{
  width: 60%; height: 1.2rem;
}
.pingjia .pingjia_section .pingjia_list li .word .user{
  width: 100%; height: .4rem;
  display: flex; align-items: center;
}
.pingjia .pingjia_section .pingjia_list li .word .user .user_tx,
.pingjia .pingjia_section .pingjia_list li .word .user .user_tx img{
  width: .3rem; height: .3rem;
}
.pingjia .pingjia_section .pingjia_list li .word .user .user_name{
  display: flex; flex-direction: column; justify-content: space-around;
  margin-left: .15rem;
}
.pingjia .pingjia_section .pingjia_list li .word .user .user_name p{
  display: flex; align-items: center; height: .16rem;
}
.pingjia .pingjia_section .pingjia_list li .word .user .user_name p img{
  margin-right:.05rem;
}
.pingjia .pingjia_section .pingjia_list li .word .text{
  padding: .1rem; font-size: .14rem; color: #333; overflow: hidden;
}
.pingjia .pingjia_section .pingjia_list li .imgss{
  width: 1.2rem; height: 1.2rem;
}
.pingjia .pingjia_section .pingjia_list li .imgss img{
  width: 100%; height: 100%;
}
.pingjia .pingjia_footer{
  padding: 0 .15rem; background: white; height: .6rem;
  display: flex; align-items: center; justify-content: center; font-size: .15rem;
}
.pingjia .pingjia_footer a{
  display: block; padding: 0 .2rem; line-height: .4rem; border: 1px solid #e0e0e0;
  border-radius: .3rem; font-size: .16rem; margin: 0 .1rem; color: #666;
}
.pingjia .pingjia_end{
  padding: 0 .15rem; height: .3rem; display: flex; align-items: center; justify-content: center;
}
.pingjia .pingjia_end img{
  width: 100%;
}


.intro{
  width: 100%; background: white; margin-bottom: .65rem;
  position: relative;
}
.intro>h6{
  font-size: .17rem; color: #333; line-height: .5rem; background: white; padding: 0 .15rem;
}
.intro>table{
  padding: 0 .15rem;
}
.intro>table tr{
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  padding: .06rem 0;
}
.intro>table tr td:first-child{
  width: 25%; font-size: .14rem; color: #999;
}
.intro>table tr td:last-child{
  width: 74%; font-size: .14rem; color: #333; line-height: .23rem;
}
.intro>.more_intros{
  width: 100%; height: 1.5rem; background: url("../../static/img/icon_mask_specify.png");
  background-size: 100%;position: absolute; left: 0;bottom: -.65rem;
}
.intro>.more_intros p{
  width: 30%; padding: 0 .3rem; line-height: .4rem; text-align: center;
  font-size: .16rem; color: #333; border: 1px solid #e0e0e0;
  border-radius: .3rem; margin: .9rem auto .1rem;
}


.info{
  width: 100%; background: white;
}
.info>p{
  padding: 0 .15rem;
}
.info>p img{
  width: 100%;
}

.shouhouAndTixing{
  width: 100%; background: lightgoldenrodyellow;
}
.shouhouAndTixing .shouhou{
  padding: .1rem .15rem; background: white;
  font-size: .16rem; color: #333;
}
.shouhouAndTixing .shouhou p{
  font-weight: bold; line-height: .4rem;
}
.shouhouAndTixing ul{
  width: 100%;
}
.shouhouAndTixing ul li{
  line-height: .24rem; margin: .12rem 0; font-size: .15rem; position: relative;
  padding-left: .2rem; font-weight: lighter;
}
.shouhouAndTixing ul li a{
  color: #333;
}
.shouhouAndTixing ul li::before{
  content: ''; display: block;
  width: .1rem; height: .1rem;
  border-radius: 50%; background-color: #999;
  -webkit-transform: scale(0.5); transform: scale(0.5);
  position: absolute; left: 0; top: .06rem;
}



footer{
  padding: 0 .1rem; height: .55rem; background: white;
  display: flex; align-items: center; justify-content: space-between;
}
footer .left{
   height: 100%; margin-right: .2rem;
  display: flex; align-items: center; justify-content: space-between;
}
footer .left li{
  padding: 0 .1rem; height: .5rem; font-size: .15rem; color: #979797;
  display: flex; flex-direction: column; align-items: center; justify-content: space-around;
}
footer .left li .icon-kefu{
  margin-top: .02rem; font-weight: bold;
  font-size: .28rem; color: #3c3c3c;
}
footer .left li .icon-gouwuche{
  font-size: .24rem; margin-top: .03rem; color: #3c3c3c;
}
footer .goPay{
 flex: 1; height: 80%; background: #f62b1e; font-size: .15rem; color: white;
  display: flex; align-items: center; justify-content: center; border-radius: .25rem;
}
</style>
