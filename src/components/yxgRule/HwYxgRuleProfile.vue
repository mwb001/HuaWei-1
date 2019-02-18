<template>
  <div class="ruleProfile">
    <div class="ruleProfileTitle">
      <div class="line"></div><p v-if="data.title">{{data.title}}</p><div class="line"></div>
    </div>
    <div class="ruleProfileCon">
      <div v-if="data.con.one" class="ruleProfileConOne">
        <p>{{data.con.one.tit}}</p>
        <img :src="data.con.one.img">
      </div>
      <div v-if="data.con.two" class="ruleProfileConOne ruleProfileConTwo">
        <p  v-if="data.con.two.tit">{{data.con.two.tit}}</p>
        <ul>
          <li :key="index" v-for="(ad,index) in data.con.two.text">{{ad}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HwYxgRuleProfile",
      props:['data']
    }
</script>

<style scoped>
  .ruleProfile {
    padding: .1rem .2rem .2rem;
  }
  .ruleProfile .ruleProfileTitle{
    height: .4rem; display: flex; align-items: center; justify-content: center;
    font-size: .18rem; color: #333;
  }
  .ruleProfile .ruleProfileTitle .line{
    width: 10%; height: 1px; background: #333; margin: 0 .1rem;
  }
  .ruleProfile .ruleProfileCon,
  .ruleProfile .ruleProfileCon .ruleProfileConOne{
    width: 100%;
  }
  .ruleProfile .ruleProfileCon .ruleProfileConOne p{
    line-height: .2rem; font-size: .17rem; color: #333; position: relative;
    text-indent: .15rem; margin: .1rem 0;
  }
  .ruleProfile .ruleProfileCon .ruleProfileConOne img{
    width: 100%;
  }
  .ruleProfile .ruleProfileCon .ruleProfileConOne p::before{
    content: ''; width: .15rem; height: .7rem; border-radius: .1rem; background-color: #ea3b3b;
    position: absolute; left: 0; top: .075em;
    -webkit-transform: scale(.25,.25); transform: scale(.25,.25);
    -webkit-transform-origin: left top;transform-origin: left top;
  }
  .ruleProfile .ruleProfileCon .ruleProfileConTwo ul{
    width: 100%;
    font-size: .14rem; color: #888;
  }
  .ruleProfile .ruleProfileCon .ruleProfileConTwo ul li{
    padding-left: .15rem; position: relative; line-height: .25rem;
  }
  .ruleProfile .ruleProfileCon .ruleProfileConTwo ul li::before{
    position: absolute; left: 0; top: .09rem;
    content: ''; width: .16rem; height: .16rem; border-radius: .6em; background-color: #888;
    -webkit-transform: scale(.5,.5); transform: scale(.5,.5);
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }
  .ruleProfile .ruleProfileCon .ruleProfileConTwo ul li span{
    color: #e54a4a;
  }
</style>
