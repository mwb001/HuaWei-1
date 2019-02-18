<template>
  <div class="commonbox">
    <div class="jptuijian">
      <h2>{{data.title}}</h2>
      <ul class="pul">
        <li v-for="p in data.pcon">
          <a href="#">
            <div class="comp">
              <img :src="p.imgs" alt="">
              <span>{{p.title}}</span>
            </div>
            <p class="pname">{{p.pname}}</p>
            <p class="mprice">{{p.mprice}}</p>
          </a>
        </li>
      </ul>
      <contentitem :data="data1.jingpin"></contentitem>
      <p class="more">{{data.more}}<i class="iconfont icon-youjiantou"></i></p>
    </div>
  </div>
</template>

<script>
  import contentitem from "./contentitem"
  import data1 from "../../api-server/data/common"
    export default {
        name: "commonbox",
        props:["data"],
        data(){
          return {
            data1
          }
        },
        components:{
          contentitem
        }
    }
</script>

<style scoped>

</style>
