import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import vip from "@/pages/tang2"
import login from "@/pages/login"
import tongzhi from "@/pages/tongzhi"
import country from "@/pages/country"
import reg from "@/pages/reg"
import shezhi from "@/pages/shezhi"
import fankui from "@/pages/fankui"

import index from '@/pages/HwIndex'
import HwWdshiming from '@/pages/HwWdShiming'
import HwWdfangwei from '@/pages/HwWdFangwei'
import HwWdchangjian from '@/pages/HwWdChangjian'
import HwIndexMes from "../pages/HwIndexMes"
import HwWdDc from "../pages/HwWdDc"
import HwCar from "../pages/HwCar"
import HwIdxMallNew from "../pages/HwIdxMallNew"
import HwClass from "../pages/HwClass"
import HwWdShimingRenzheng from "../pages/HwWdShimingRenzheng"
import HwFind from '../pages/HwFind'
import HwMy from '../pages/HwMy'
import HwInvite from '../pages/HwInvite'
import HwYxg from '../pages/HwYxg'
import HwInviteStrategy from '../pages/HwInviteStrategy'
import HwInviteRule from '../pages/HwInviteRule'
import HwYxgRule from '../pages/HwYxgRule'
import HwShoppinginfo from '../pages/HwShoppinginfo'
import HwShoppinginfoAttrs from '../pages/HwShoppinginfoAttrs'
import HwXp from '../pages/HwXp'
import HwJx from "../pages/HwJx"
import HwXq from "../pages/HwXq"
import HwHuaWei from "../pages/HwHuaWei"
import HwRongYao from "../pages/HwRongYao"
import HwSever from "../pages/HwSever"
import HwMangeAddress from "../pages/HwMangeAddress"
import HwAddress from "../pages/HwAddress"

Vue.use(Router)

export default new Router({
  routes: [

    {
      path:"/login",
      name:"login",
      component:login
    },
    {
      path:"/tongzhi",
      name:"tongzhi",
      component:tongzhi
    },
    {
      path:"/country",
      name:"country",
      component:country
    },
    {
      path:"/reg",
      name:"reg",
      component:reg
    },
    {
      path:"/shezhi",
      name:"shezhi",
      component:shezhi
    },
    {
      path:"/fankui",
      name:"fankui",
      component:fankui
    },
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/vip',
      name: 'vip',
      component:vip,
    },
    {
      path: '/HwWdshiming',
      name: 'HwWdshiming',
      component: HwWdshiming
    },
    {
      path: '/HwWdfangwei',
      name: 'HwWdfangwei',
      component: HwWdfangwei
    },
    {
      path: '/HwWdchangjian',
      name: 'HwWdchangjian',
      component: HwWdchangjian
    },
    {
      path: '/HwIndexMes',
      name: 'HwIndexMes',
      component: HwIndexMes
    },
    {
      path: '/HwWdDc',
      name: 'HwWdDc',
      component: HwWdDc
    },
    {
      path: '/HwClass',
      name: 'HwClass',
      component: HwClass
    },
    {
      path: '/HwCar',
      name: 'HwCar',
      component: HwCar
    },
    {
      path: '/HwIdxMallNew',
      name: 'HwIdxMallNew',
      component: HwIdxMallNew
    },
    {
      path: '/renzheng',
      name: 'renzheng',
      component: HwWdShimingRenzheng
    },
    {
      path: '/HwFind', name: 'HwFind', component: HwFind
    },
    {
      path: '/HwMy', name: 'HwMy', component: HwMy
    },
    {
      path: '/HwInvite', name: 'HwInvite', component: HwInvite
    },
    {
      path: '/HwYxg', name: 'HwYxg', component: HwYxg
    },
    {
      path: '/HwInviteStrategy', name: 'HwInviteStrategy', component: HwInviteStrategy
    },
    {
      path: '/inviteRule', name: 'inviteRule', component: HwInviteRule
    },
    {
      path: '/YxgRule', name: 'YxgRule', component: HwYxgRule
    },
    {
      path: '/HwShoppinginfo', name: 'HwShoppinginfo', component: HwShoppinginfo
    },
    {
      path: '/HwShoppinginfoAttrs', name: 'HwShoppinginfoAttrs', component: HwShoppinginfoAttrs
    },
    {path: '/hwxp',component:HwXp},
    {path: '/jxx',name:"jxx",component:HwJx},
    {path: '/xq',component:HwXq},
    {//华为
      path:"/huawei",
      name:"HuaWei",
      component:HwHuaWei
    },
    {//荣耀
      path:"/RongYao",
      name:"RongYao",
      component:HwRongYao
    },
    {//服务中心
      path:"/sever",
      name:"HwSever",
      component:HwSever
    },
    {//管理收货地址
      path:"/mange",
      name:"MangeAddress",
      component:HwMangeAddress
    },
    {//添加收货地址
      path:"/add",
      name:"HwAddRess",
      component:HwAddress
    }

  ]
})
