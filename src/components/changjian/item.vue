<template>
  <ul>
    <li v-for="(x,index1) in data" :key="index1">
      <div class="changjiantitle">
        <p>{{x.title}}</p>
        <span class="iconfont icon-xiajiantou" @click="showCon(index1)"></span>
      </div>
      <div class="changjianlist">
        <p v-for="(i,index) in x.ptitle" :key="index">{{i}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
  let str=document.getElementsByClassName('changjianlist');
  export default {
    name: "item",
    props:["data"],
    mounted(){
      for(var i=0;i<str.length;i++){
        str[i].style.height = '0px';//此处不展开
      }
    },
    methods:{
      showCon:function(index1){
        let contant = str[index1];
        let height = contant.getBoundingClientRect().height;    //获取页面元素的当前高度
        document.getElementsByClassName('icon-xiajiantou')[index1].style.transform = !!height?'rotateX(0deg)':'rotateX(180deg)';
        if (!!height) {
          contant.style.height = '0px';
        } else {
          contant.style.height = 'auto';
        }
      }
    }
  }
</script>

<style scoped>

</style>
