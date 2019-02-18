<template>
    <div>
      <div class="fenlei">
        <a href="##" :key="index" v-for="(n,index) of fenl.fenlei">
          <img :src="n.imgs">
          <p>{{n.info}}</p>
        </a>
      </div>
      <ul>
        <li :key="index" v-for="(n,index) of fenl.prolist">
          <img :src="n.imgs">
        </li>
      </ul>
      <class-product-list  :key="index" :listinfo = "n" v-for="(n,index) of fenl.productlist"></class-product-list>
    </div>
</template>

<script>
  import ClassProductList from "./ClassProductList"
    export default {
        name: "ClassProduct",
        components: {ClassProductList},
        props:["fenl"]
    }
</script>

<style scoped>
  .fenlei{
    height: .82rem;
    display: flex;
    align-items: center;
    background: #fff;
  }
  .fenlei a{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .fenlei img {
    width: .46rem;
    height: .46rem;
  }
  .fenlei p{
    color: #333;
    font-size: .12rem;
  }

  ul{
    display: flex;
    justify-content: space-between;
    padding: 2% 2% 0;
  }
  ul li {
    width: 49%;
    background: #fff;
  }
  li img {
    height: 1.03rem;
    width: 100%;
  }
</style>
