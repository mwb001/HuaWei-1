<template>
  <div class="index-hea">
    <div class="header">
      <div class="search">
        <input type="text" placeholder="荣耀V20">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <i class="iconfont icon-xiaoxi"></i>
    </div>
  </div>
</template>
<script>
  import $ from "jquery"
export default {
  name: 'Headers',
  mounted(){
    $(".index-hea ul a").click(function(){
      $(".index-hea ul a").removeClass("on")
      $(this).addClass("on")
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
