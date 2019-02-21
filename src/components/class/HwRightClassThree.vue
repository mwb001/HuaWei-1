<template>
  <li @click="toShoppinginfo(produce)">
    <img  :src="produce.img[0]">
    <p>{{produce.name}}</p>
  </li>
</template>

<script>
    export default {
        name: "HwRightClassThree",
      props:["data","produce","id","produceIndex"],
      methods:{
          toShoppinginfo(produce){
            this.$router.push({
              name : "HwShoppinginfo",
              params : {
                produce : produce
              }
            })
          }
      }
    }
</script>

<style scoped>
  .cshoplist li{
    width:33%;
    font-size:.1rem;
    color:#666666;
    margin-bottom:.19rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cshoplist li img{
    width:60%;
    max-width: .48rem;
    height:.48rem;
    margin-bottom: .11rem;
  }
  .cshoplist li p{
    width:80%; white-space: nowrap; text-overflow: ellipsis;
    overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
  }
</style>
