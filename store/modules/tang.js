export default{
  state:{
    juan:[
      {img1:require("../../static/img/v3v5.jpg"),img2:require("../../static/img/quan20.jpg"),p1:"荣耀手机(除荣耀V20等新品)可用", f:200},
      {img1:require("../../static/img/v0v5.jpg"),img2:require("../../static/img/quan10.jpg"),p1:"荣耀手机(除荣耀V20等新品)可用", f:2},
      {img1:require("../../static/img/v0v5.jpg"),img2:require("../../static/img/quan50.jpg"),p1:"华为畅想9(32GB版)手机50元优惠券", f:2},
      {img1:require("../../static/img/v0v5.jpg"),img2:require("../../static/img/quan5.jpg"),p1:"荣耀手机(除荣耀V20等新品)可用", f:1},
      {img1:require("../../static/img/v0v5.jpg"),img2:require("../../static/img/quanyou.jpg"),p1:"加油宝150元加油券（华为商城会员专享）", f:5}
    ],
    hquan:[
      {num:200,p1:"限华为P20系列，畅享8e使用，不与其他优惠同享",riqi:"2019.2.2-2019.2.28"},
      {num:200,p1:"限华为Mate10 Pro、畅享8e 青春、麦芒7使用，不与其他优惠同享",riqi:"2019.2.3-2019.2.14"},
      {num:100,p1:"限华为nova3 128GB、P20系列、畅享8e使用，不与其他优惠同享",riqi:"2019.2.3-2019.2.14"},
      {num:50,p1:"限华为畅享9 32GB、畅享9Plus 64GB使用，不与其他优惠同享",riqi:"2019.2.3-2019.2.14"},
      {num:50,p1:"限华为指定配件使用，不与其他优惠同享",riqi:"2019.2.3-2019.2.14"},
      {num:20,p1:"限华为指定配件使用，不与其他优惠同享",riqi:"2019.2.3-2019.2.14"},
      {num:10,p1:"限华为指定配件使用，不与其他优惠同享",riqi:"2019.2.3-2019.2.14"}
    ],
    jif:[
      {img:require("../../static/img/mate.jpg"),p1:"Mate 20 Pro定制壳",f:2880,yf:59},
      {img:require("../../static/img/mate2.jpg"),p1:"Mate 20 定制壳",f:2880,yf:59}
    ],
    hui:[{img:require("../../static/img/hui1.png")},{img:require("../../static/img/hui4.png")},{img:require("../../static/img/hui2.png")},
      {img:require("../../static/img/hui5.png")},{img:require("../../static/img/hui3.png")},{img:require("../../static/img/hui6.png")}
    ],
    zj:[{p1:15339,p2:"华为体脂称"},
      {p1:15156,p2:"华为5元券"},{p1:13676,p2:"华为5元券"},{p1:15156,p2:"华为荣耀品牌10元优惠券"},
      {p1:15895,p2:"酒仙网399元红酒券"},{p1:13666,p2:"华为荣耀品牌10元优惠券"},{p1:13676,p2:"华为5元券"},{p1:13676,p2:"华为5元券"},{p1:13676,p2:"华为2积分"},
      {p1:13676,p2:"华为2积分"},{p1:13676,p2:"华为2积分"}, {p1:15895,p2:"酒仙网399元红酒券"}, {p1:15895,p2:"酒仙网399元红酒券"}, {p1:15895,p2:"酒仙网399元红酒券"},
      {p1:13676,p2:"华为8积分"}, {p1:13676,p2:"华为8积分"}, {p1:13676,p2:"华为2积分"},{p1:13676,p2:"华为5元券"}
    ],
    fkimg:[],
    fankui:[],
    n:0,
  },
  mutations: {
    "addzj":(state,pay)=>{
      state.zj.push({p1:pay.p1,p2:pay.p2});
    },
    "addfk":(state,data)=>{
      state.fankui.push(data);
    },
    "addn":(state,n)=>{
       state.n=n;
    }
  },
  actions: {
    addzj(store,pay){
      store.commit("addzj",pay)
    },
    addfk(store,data){
      store.commit("addfk",data)
    },
    addn(store,n){
      store.commit("addn",n);
    }
  },
  getters:{
    "getjuan":(state)=>{
      return state.juan;
    },
    "gethquan":(state)=>{
      return state.hquan;
    },
    "getjif":(state)=>{
      return state.jif;
    },
    "gethui":(state)=>{
       return state.hui;
    },
    "getzj":(state)=>{
      return state.zj;
    },
    "getimgs":(state)=>{
      return state.fkimg;
    },
    "getfankui":(state)=>{
      return state.fankui
    },
    "getn":(state)=>{
      return state.n
    }
  }
}
