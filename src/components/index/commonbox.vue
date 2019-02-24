<template>
  <div class="commonbox">
    <div class="jptuijian">
      <h2>{{data.title}}</h2>
      <ul class="pul">
        <li v-for="(p,index) in data.pcon" :key="index" @click="goShopping(p)">
          <a href="#">
            <div class="comp">
              <img :src="p.img[1]" alt="">
              <span v-if="p.cuciao.one">{{p.cuciao.one[0]}}</span>
            </div>
            <p class="pname">{{p.name}}</p>
            <p class="mprice">{{p.price}}</p>
          </a>
        </li>
      </ul>
      <contentitem :data="data1.jingpin"></contentitem>
      <p class="more" @click="showMore(id)">{{data.more}}<i class="iconfont icon-youjiantou"></i></p>
    </div>
  </div>
</template>

<script>
  import contentitem from "./contentitem"
  import data1 from "../../api-server/data/common"
    export default {
        name: "commonbox",
        props:["data","id"],
        data(){
          return {
            data1
          }
        },
        components:{
          contentitem
        },
        methods:{
          goShopping(data){
              this.$router.push({
                name : "HwShoppinginfo",
                params : {
                  produce : data
                }
              })
          },
          showMore(id){
            $(".commonbox").eq(id).find(".pul").css("height","auto")
          }
        }
    }
</script>

<style scoped>

</style>
