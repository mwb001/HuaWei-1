<template>
  <div class="rongyao">
    <headers></headers>

    <div class="class_advert">
      <advert-nav :navimg="rongyao.rongnavdata"></advert-nav>
      <class-product :fenl="rongyao"></class-product>
      <hua-wei-footer></hua-wei-footer>
    </div>

    <footers></footers>
  </div>
</template>

<script>
  import Headers from "../common/Headers"
  import AdvertNav from "../components/HuaWei/AdvertNav"
  import ClassProduct from "../components/HuaWei/ClassProduct"
  import HuaWeiFooter from "../common/HuaWeiFooter"
  import footers from "../common/footers"
  import rongyao from "../api-server/data/rongyaodata"
    export default {
        name: "RongYao",
        components: {
          Headers,
          AdvertNav,
          ClassProduct,
          HuaWeiFooter,
          footers
        },
        data(){
        return {
          rongyao
        }
      }
    }
</script>

<style scoped>
  .rongyao{
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .class_advert{
    background: #f9f7f8;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
