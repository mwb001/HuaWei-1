<template>
  <div class="index-con">
    <Headers></Headers>
    <Contents :data="data"></Contents>
    <go-top></go-top>
    <footers></footers>
  </div>
</template>

<script>
     import $ from "jquery"
    import "../assets/css/index.css"
    import data from "../api-server/data/common"
    import Headers from "../common/Headers"
    import Contents from "../components/index/contents"
    import footers from "../common/footers"
    import goTop from "../components/index/goTop"
    export default {
        name: "Hw-index",
        components:{
            Headers,
            Contents,
            goTop,
            footers
        },
        data(){
            return {data}
        }
    }
</script>

<style>
  .index-con{
    display: flex;
    height: 100%;
    flex-direction: column;
  }
</style>
