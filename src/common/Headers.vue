<template>
  <div class="index-hea">
    <div class="header">
      <div class="search">
        <input type="text" placeholder="荣耀V20" class="rrrrna">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <router-link to="/HwIndexMes" tag="i" class="iconfont icon-xiaoxi"></router-link>
    </div>
    <ul>
      <!--<router-link to="/" tag="li" class="on">推荐</router-link>-->
      <!--<router-link to="/huawei" tag="li">华为</router-link>-->
      <!--<router-link to="/" tag="li" >荣耀</router-link>-->
      <!--<router-link to="/"  tag="li">新品</router-link>-->
      <!--<router-link to="/" tag="li">数码惠</router-link>-->
      <!--<router-link to="/" tag="li">智选</router-link>-->
      <li v-for="(n,i) in list" :key="i" @click="cc(i)">{{n}}</li>
    </ul>
  </div>
</template>
<script>
    import {mapGetters} from "vuex";
   import "jquery"
export default {
  computed:mapGetters({
      n:"getn",
  }),
  name: 'Headers',
  data (){
      return {
        list:["推荐","华为","荣耀","新品","数码惠","智选"],
      }
  },
  mounted(){
 this.huan();
  },
    watch:{
     n:function (n,o) {
        this.huan();
     }
    },
  methods:{
     huan(){
       $(".index-hea ul li").removeClass("on");
       $(".index-hea ul li").eq(this.n).addClass("on");
     },
    cc(i){
           this.$store.dispatch("addn",i);
            if(i===0){
              this.$router.push("/");
            }else if(i===1){
              this.$router.push("/huawei");
            }else if(i===2){
               this.$router.push("/rongyao");
            }else if(i===3){
              this.$router.push("/hwxp");
            }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rrrrna{
   outline:none;
}
</style>
