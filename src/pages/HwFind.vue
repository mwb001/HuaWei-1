<template>
    <div class="appSon">
      <hw-search-header :data="data.pageTit"></hw-search-header>
      <div class="main">
        <hw-find-nav :data="data.navList"></hw-find-nav>

        <hw-find-headline :data="data.headline"></hw-find-headline>

        <hw-find-reputation :data="data.reputation"></hw-find-reputation>
      </div>
      <footers></footers>
    </div>
</template>

<script>
  import HwSearchHeader from "../components/public/HwSearchHeader"
  import footers from "../common/footers"
  import HwFindNav from "../components/find/HwFindNav"
  import HwFindHeadline from "../components/find/HwFindHeadline"
  import HwFindReputation from "../components/find/HwFindReputation"
  import data from "../api-server/data/find"
  export default {
    name: "HwFind",
    data(){
      return{
        data
      }
    },
    components:{
      HwSearchHeader,HwFindNav,HwFindHeadline,HwFindReputation,footers
    }
  }
</script>

<style scoped>
  b,strong{
    font-weight: normal;
  }
  em,i{
    font-style: normal;
  }
  input,select,textarea{
    outline: none;
  }
  .appSon{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .appSon .main{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
