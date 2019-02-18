<template>
    <div class="searchAndBanner">
      <router-link to="" class="search">搜索你要卖的机型<i class="iconfont icon-sousuo"></i></router-link>
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../../static/img/6368445457319816001061583557.png" alt=""></div>
            <div class="swiper-slide"><img src="../../../static/img/6368447031865413401099120482.png" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="can">
        <div class="can_top">
          <div class="shu"></div>
          <p>您可以卖</p>
        </div>
        <div class="can_bot">
          <a href="javascript:void(0)">
            <img src="../../../static/img/phone1.png" alt="">
            <span>手机</span>
          </a>
          <a href="javascript:void(0)">
            <img src="../../../static/img/pad1.png" alt="">
            <span>平板</span>
          </a>
          <a href="javascript:void(0)">
            <img src="../../../static/img/pc1.png" alt="">
            <span>笔记本</span>
          </a>
          <a href="javascript:void(0)">
            <img src="../../../static/img/camera1.png" alt="">
            <span>相机</span>
          </a>
          <a href="javascript:void(0)">
            <img src="../../../static/img/watch1.png" alt="">
            <span>数码</span>
          </a>
        </div>
      </div>

      <div class="type">
        <div class="can_top">
          <div class="shu"></div>
          <p>热卖机型</p>
        </div>
        <div class="uls">
          <ul class="uli">
            <hw-jx-section-list :key="index" v-for="(n,index) in data.products" :data="n"></hw-jx-section-list>
          </ul>
        </div>
      </div>

      <div class="advantage">
        <div class="can_top">
          <div class="shu"></div>
          <p>我们的优势</p>
        </div>
        <div class="recycle">
          <div class="recycle_l">
            <h4>信用回收</h4>
            <h6>最高立得2000元预付款</h6>
            <p>限购新机 后寄旧机</p>
            <img class="imgm" src="../../../static/img/credit_part_pic.png" alt="">
          </div>
          <div class="recycle_r">
            <div class="recycle_r_t">
              <div class="recycle_r_t_le">
                <h4>交易便捷</h4>
                <h6>顺丰上门取件</h6>
                <h6>质检员上门服务</h6>
              </div>
              <div class="recycle_r_t_bo">
                <img src="../../../static/img/convient_part_pic.png" alt="">
              </div>
            </div>
            <div class="recycle_r_t">
              <div class="recycle_r_t_le">
                <h4>安全放心</h4>
                <h6>Blancco专业工具</h6>
                <h6>清除隐私</h6>
              </div>
              <div class="recycle_r_t_bo">
                <img src="../../../static/img/security_part_pic.png" alt="">
              </div>
            </div>
            </div>
          </div>
        </div>

      <div class="flow">
        <div class="can_top">
          <div class="shu"></div>
          <p>信息回收流程</p>
        </div>
        <div class="submit">
          <ul>
            <hw-jx-section-list-two :key="index" v-for="(n,index) in data.icons" :data="n"></hw-jx-section-list-two>
          </ul>
        </div>
      </div>

      <div class="evaluate">
        <div class="can_top">
          <div class="shu"></div>
          <p>用户评价</p>
        </div>
        <div class="particulars">
          <ul>
            <hw-jx-section-list-three :key="index" v-for="(n,index) in data.particulars" :data="n"></hw-jx-section-list-three>
          </ul>
        </div>
      </div>

      <div class="user">
        <hw-jx-section-fir :key="index" v-for="(n,index) in data.user" :data="n"></hw-jx-section-fir>
      </div>

      <div class="indent">
        <hw-jx-section-indent :key="index" v-for="(n,index) in data.indent" :data="n"></hw-jx-section-indent>
      </div>

      <div class="store">
        <div class="photo">
          <img class="imgs" src="../../../static/img/huawei_logo.png" alt="">
          <img class="imgm" src="../../../static/img/check_logo.png" alt="">
          <img class="imgg" src="../../../static/img/ahs_logo.png" alt="">
        </div>
        <p>以旧换新服务由华为商城指定合作伙伴爱回收提供</p>
      </div>


    </div>
</template>

<script>
  import HwJxSectionList from "../HwJx/HwJxSectionList"
  import HwJxSectionListTwo from "../HwJx/HwJxSectionListTwo"
  import HwJxSectionListThree from "../HwJx/HwJxSectionListThree"
  import HwJxSectionFir from "../HwJx/HwJxSectionFir"
  import HwJxSectionIndent from "../HwJx/HwJxSectionIndent"
    export default {
        name: "HwJxSection",
      props:['data'],
      components:{
        HwJxSectionList,HwJxSectionListTwo,HwJxSectionListThree,HwJxSectionFir,HwJxSectionIndent
      }
    }
</script>

<style scoped>
.searchAndBanner{
  padding: .1rem .15rem;
  /*padding-top: .1rem;*/
}
.search{
  display: block; width: 100%; height: .3rem;
  background: #f8f8f8; border-radius: 15px; border: none;
  color: #777777; text-align: center; font-size: .12rem;
  position: relative; line-height: .3rem;
}
.search .iconfont{
    font-size: .18rem; position: absolute; left: 1.2rem; top: .07rem;
  }
.banner{
  width: 100%;
  /*height:1.5rem;*/
  margin-top: .1rem;
  border-radius: 8px;
}
.swiper-container,.swiper-slide,.swiper-slide img{
  width: 100%;
  height:100%;
  display: block;
  border-radius: 8px;
}
  .swiper-pagination{
    width: 100%;
    height: .2rem;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.swiper-pagination span{
  width: .2rem;
  height: .2rem;
  display: inline-block;
  border-radius: 50%;
  opacity: 0.2;
}
  .can{
    width: 100%;
    height: 1.5rem;
    margin-top: .05rem;
  }
  .can_top{
    height: .5rem;
    display: flex;
    align-items: center;
  }
  .can_top p{
    font-size: .18rem;
    color: #000;
    margin-left: .1rem;
    font-weight: 600;
  }
  .shu{
    width: .05rem;
    height: .2rem;
    background: #ff2824;
  }


.can_bot{
  height: 1rem;
  display: flex;
}
.can_bot a{
  display: flex;
  width: 20%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.can_bot a img{
  display: block;
  width: 90%;
  height: 65%;
}
.can_bot a span{
  font-size: .15rem;
  color: #333333;
}

.type{
  width: 100%;
  height: 2.3rem;
  margin-top: .1rem;
}
.uls{
  width: 100%;
  height: 1.8rem;
}
.uls ul::-webkit-scrollbar{
  display: none;
}
  .uli{
    width: 100%;
    height: 1.8rem;
    display: flex;
    overflow-x: auto;
  }

  .advantage{
    height: 2.5rem;
    margin-top: .1rem;
  }
  .recycle{
    height: 2rem;
    display: flex;
    margin-top: .1rem;
  }
  .recycle_l{
    width: 50%;
    height: 2rem;
    padding-left: .1rem;
  }
.recycle_l h4{
  font-size: .2rem;
  color: #333333;
  margin-top: .05rem;
}
.recycle_l h6{
  font-size: .14rem;
  color: #666666;
  margin-top: .05rem;
}
.recycle_l p{
  width: 80%;
  height: .2rem;
  background: #26d3a5;
  color: #ffffff;
  font-size: .14rem;
  margin-top: .05rem;
  border-radius: 10px;
  text-align: center;
}
.recycle_l .imgm{
  display: block;
  width: 70%;
  height: 50%;
  margin: .05rem auto 0;
}
  .recycle_r{
    width: 50%;
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .recycle_r_t{
    width: 100%;
    height: 48%;
    display: flex;
  }
.recycle_r_t .recycle_r_t_le{
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /*text-indent: .05rem;*/
}
.recycle_r_t .recycle_r_t_le h4{
  font-size: .18rem;
  color: #333333;
  margin-top: .05rem;
}
.recycle_r_t .recycle_r_t_le h6{
  font-size: .1rem;
  color: #b26c8c;
  margin-top: .05rem;
  font-weight: 100;
}
.recycle_r_t .recycle_r_t_bo{
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.recycle_r_t .recycle_r_t_bo img{
  display: block;
  width: 50%;
  height: 50%;
}
  .flow{
    width: 100%;
    height: 1.5rem;
    margin-top: .15rem;
  }
  .submit{
    width: 100%;
    height: 1rem;
  }
  .submit ul{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
  }
.evaluate{
  width: 100%;
  height: 1.8rem;
  margin-top: .15rem;
}
  .particulars{
    width: 100%;
    height: 1.3rem;
  }
.particulars ul::-webkit-scrollbar{
  display: none;
}
.particulars ul{
  width: 100%;
  padding: .2rem 0;
  display: flex;
  overflow-x: auto;
  margin-top: .05rem;
}
  .user{
    margin-top: .15rem;
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: space-between;
  }
.indent{
  width: 100%;
  height: .8rem;
  margin-top: .1rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f3f3f3;;
  border-bottom: 1px solid #f3f3f3;
}
  .store{
    width: 100%;
    height: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .photo{
    width: 100%;
    height: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.photo .imgs{
  display: block;
  width: 30%;
  height: 35%;
}
.photo .imgm{
  display: block;
  width: 4%;
  height: 30%;
  padding: 0 .15rem;
}
  .photo .imgg{
    display: block;
    width: 20%;
    height: 35%;
  }
  .store p{
    width: 100%;
    font-size: .1rem;
    color: #d2d4de;
    text-align: center;
  }

</style>
