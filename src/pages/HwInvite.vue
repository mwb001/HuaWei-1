<template>
    <div class="appSon">
      <hw-word-header :data="data.page"></hw-word-header>

      <div class="main">
        <router-link tag="div" to="/inviteRule" class="activeRule">活动规则</router-link>

        <div class="yq_friend">
          <img src="../../static/img/yq_img_01.jpg">
          <img src="../../static/img/yq_img_02.jpg">
          <router-link  to="" class="yq">立即邀请好友</router-link>
          <router-link to="/inviteStrategy" class="look">查看活动攻略>></router-link>
        </div>

        <div class="moreActive">
          <div class="tit">
            <div class="line"></div><p>更多值得分享的活动</p><div class="line"></div>
          </div>
          <ul class="activeList">
            <hw-invite-active-item :key="index" v-for="(ab,index) in data.activeList" :data="ab"></hw-invite-active-item>
          </ul>
        </div>
      </div>

    </div>
</template>

<script>
  import HwWordHeader from "../components/public/HwWordHeader"
  import HwInviteActiveItem from "../components/invite/HwInviteActiveItem"
  import data from "../api-server/data/invite"
  export default {
    name: "HwInvite",
    components:{
      HwWordHeader,HwInviteActiveItem
    },
    data(){
      return{
        data
      }
    }
  }
</script>

<style scoped>
.appSon{
  height: 100%; display: flex; flex-direction: column; background: #f8f8f8;
}
.main{
  flex: 1; overflow-y: auto; overflow-x: hidden; position: relative;
}
.main .activeRule{
  position: absolute; right: 0; top: .1rem; line-height: .22rem; font-weight: lighter;
  font-size: .1rem; color: white;background: rgba(75,75,75,.5);
  padding: 0 .1rem; border-bottom-left-radius: .1rem;border-top-left-radius: .1rem;
}
.main .yq_friend{
  padding: 0 0 .2rem; background: white;
}
.main .yq_friend img{
  width: 100%; display: block;
}
.main .yq_friend a{
  width: 90%; text-align: center; display: block;
}
.main .yq_friend .yq{
  height: .52rem; background: #df4e53; font-size: .16rem; color: white;
  line-height: .52rem;margin: .1rem auto 0; border-radius: .04rem;
}
.main .yq_friend .look{
  line-height: .3rem; text-decoration: underline;
  margin: 0 auto; font-size: .14rem; color: #8a8a8a;
}
.main .moreActive{
  width: 100%; background: #fcf8f5; height: 8rem;
}
.main .moreActive .tit{
  width: 100%; height: .5rem; background: #f7f9f8;
  display: flex; align-items: center; justify-content: center;
}
.main .moreActive .tit .line{
  width: 12%; height: 1px; background: #868887;
}
.main .moreActive .tit p{
  padding: 0 .3rem; line-height: .5rem; font-size: .15rem; color: #878988;
}
.main .activeList{
  width: 100%; background: white;
}
.main .activeList>li:last-child{
  margin-bottom: 0;
}
</style>
