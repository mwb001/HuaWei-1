<template>
  <div class="huawei">
    <headers></headers>

    <div class="class_advert">
      <advert-nav :navimg="huaweidata.navdata"></advert-nav>
      <class-product :fenl="huaweidata"></class-product>
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
  import huaweidata from "../api-server/data/huaweidata"
    export default {
        name: "HuaWei",
        components: {
          Headers,
          AdvertNav,
          ClassProduct,
          HuaWeiFooter,
          footers
        },
        data(){
          return {
            huaweidata
          }
        }
        // methods:{
        //   _initdata(){
        //     // fetch("http://localhost:3000/api/huawei").then(res=>{
        //     //   res.json().then(data=>{
        //     //     console.log(data);
        //     //   })
        //     // })
        //     huaWei.huaweidata((data)=>{
        //       this.huaweidata = data;
        //       console.log(this.huaweidata)
        //     })
        //   }
        // },
        // created(){
        //   this._initdata()
        // },

      }
</script>

<style scoped>
  .class_advert{
    background: #f9f7f8;
    /*background: #f9f7f8;*/
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .huawei{
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .class_advert{

  }
</style>
