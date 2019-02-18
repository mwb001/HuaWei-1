<template>
    <div class="sever_content">
        <h4>{{secon.title}}</h4>
        <ul :class = "secon.classname" v-if="secon.classname">
        <li class="severlist" :key="index" v-for="(n,index) of secon.severlist">
          <img :src="n.sevimg" alt="">
          <p>{{n.sevtitle}}</p>
        </li>
      </ul>
        <div class="sever_img">
          <img :src="secon.images" alt="">
        </div>
        <sever-consult v-if="secon.troclass" :tro = "secon"></sever-consult>
    </div>
</template>

<script>
    import SeverConsult from "./SeverConsult"
    export default {
        name: "SeverContent",
        props:["secon"],
        components:{
          SeverConsult
        }
    }
</script>

<style scoped>
  .sever_content h4{
    line-height: .38rem;
    font-size: .16rem;
    color: #b00e0e;
    font-weight: 500;
    padding-left:.15rem ;
    border-bottom: 1px solid #eee;
  }
  .severlis {
    display: flex;
    flex-wrap: wrap;

  }
  .severlis li{
    width: 25%;
    padding-top:.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .severlist img{
    width: .65rem;
    height: .50rem;
  }
  .severlist p{
    font-size: .12rem;
    color: #2f2f2f;
    line-height: .4rem;
  }
  .sever_img img {
    width: 100%;
  }
</style>
