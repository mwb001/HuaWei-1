<template>
    <div>
      <div class="div1">国家/地区</div>
       <div class="mint" @click="gogo">
         <mt-index-list class="mt-da">
           <mt-index-section v-for="(letter,i) in citySortArr" :key="i" :index="letter" class="mt-index-section">
             <mt-cell  v-for="(cityName,i) in cityArr" :key="i" v-if="cityName.key == letter" :title="cityName.value " class="guojianame" @click="tiao(cityName)"></mt-cell>
           </mt-index-section>
         </mt-index-list>
         <div class="ddspan"></div>
       </div>
    </div>
</template>

<script>
  import city from "../assets/city"
  import { makePy } from "../assets/pinying"
  export default {
        name: "country",

    data(){
          return {
            guojia:[
              {
                index: 'A',
                list: ["阿拉伯","阿富汗"]
                // list:"阿富汗"
              },
              {
                index: 'B',
                list: ["巴基斯坦","巴拿马"]
                // list:"巴基斯坦"
              }
            ],
            cityData: [
              {
                'cityTp': "A",
                "cityCode": "ALB",
                "cityPl": "aerbaniva",
                "cityNamw": "阿尼巴尼亚"
              },
              {
                'cityTp': "A",
                "cityCode": "AUS",
                "cityPl": "aodaliya",
                "cityNamw": "澳大利亚"
              },
              {
                'cityTp': "B",
                "cityCode": "BHS",
                "cityPl": "bahama",
                "cityNamw": "巴哈马"
              },
              {
                'cityTp': "C",
                "cityCode": "PRK",
                "cityPl": "chaoxian",
                "cityNamw": "朝鲜"
              },
            ],
            arr: [],//存放初始筛选的城市名称
            cityArr: [],//存放第二次筛选后所有城市名称
            citySort: [],//存放初始获取城市首字母大写的数组
            citySortArr: []//存放第二次筛选重复，不存在的城市首字母数组

          }
    },
    methods:{
       tiao(n){

       },
      gogo(){
       this.$router.go(-1);

      }
    },
    created () {

      /**
       * 将json数据中的无用数据剔除
       */
      for (let i in city) {
        if (city[i].name != "请选择") {//将第一层数据中为 “请选择” 的剔除掉
          this.arr.push(city[i].name);
          for (let j in city[i].sub) {//将第二层数据中为 “请选择 和 其他” 的剔除掉
            if (
              city[i].sub[j].name != "请选择" &&
              city[i].sub[j].name != "其他"
            ) {
              this.arr.push(city[i].sub[j].name);//将处理后的数据存放在数组中，等待第二次筛选处理
            }
          }
        }
      }

      /**
       * 配置相关数据
       */
      for (let k in this.arr) {
        let cityKey = makePy(this.arr[k])[0].substring(0, 1);//获取每一个市区的首字母
        let cityValue = this.arr[k];//获取所有市区
        this.citySort[cityKey] = cityKey;//利用对象特性，剔除重复的字母，并将剔除后的字母存进对象中

        //将所有市区信息 以（ 字母 - 市区名 ）的格式存在至数组中
        this.cityArr[k] = {
          key: cityKey,
          value: cityValue
        };
      }

      /**
       * 将处理后的首字母数据对象，存放至数组中
       */
      for (let p in this.citySort) {
        this.citySortArr.push(this.citySort[p]);
      }

      /**
       * 将真实存在的市区首字母按A-Z进行排序
       */
      this.citySortArr = this.citySortArr.sort();

    }
    }
</script>

<style scoped>
  .div1{
    width:100%;
    height: 0.48rem;
    background:#f0f0f0;
    font-size:0.17rem;
    line-height:0.48rem;
    text-align:left;
    text-indent:0.2rem;
  }
  .mint{
    width:100%;
    height: 6.85rem;
    overflow-y: auto;
    position:relative;
  }
  ddspan{
      /*width:1rem;*/
    /*height: 2.24rem;*/
    /*position:absolute;*/
    /*background:white;*/
    /*margin-left:2rem;*/
    /*left:2rem;*/
    /*margin-left:2rem;*/
    /*z-index:88;*/
  }
  .mt-index-section{
    font-size:0.16rem;
    text-align:left;
    width:4rem;
    border-bottom:0.1rem solid #eee;
    z-index:3;
  }
  .guojianame{
    height: 100%;
    text-align:left;
    border:1px solid white;
    font-size:0.18rem;
    line-height: 0.3rem;
    text-indent: 0.3rem;
    border-bottom:1px solid #eee;
  }
  .mt-da{
    height: 100%;
    font-size:0.16rem;
    text-indent: 0.3rem;
  }
.mint-indexsection-index{
  color:red;
}
</style>
