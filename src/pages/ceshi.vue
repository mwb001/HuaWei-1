<template>
  <div>
    <!--<dingwei2></dingwei2>-->
    <!--<mybutton></mybutton>-->
    <!--<yzm></yzm>-->
    <Dingwei></Dingwei>
     <yzm :replace="num"></yzm>
     <button @click="huan">测试按钮</button>
  </div>
</template>

<script>
    import Dingwei from "@/components/dingwei/dingwei";
    // import yzm from "../myelement/packages/yzm"
    export default {
        name: "ceshi",
      components: {Dingwei},
      data(){
         return {
          num:0,
         }
      },
      methods:{
          huan(){
            ++this.num;
          }
      }
    }
</script>

<style scoped>

</style>
