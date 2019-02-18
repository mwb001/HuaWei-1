<template>
    <div>
      <div class="add_head">
        <img src="../../static/img/youjiantou.jpg" alt=""  @click="goback">
        <h1>添加收货地址</h1>
      </div>
      <div class="add_info">
        <form>
          <div class="add_info_a">
            <div class="add_pho">
              <p class="add_info_b">
                <span class="add_b">收货人</span>
                <input type="text" placeholder="请输入2-10个字" v-model="p1" @input="shru">
                <span class="xiaoshi">×</span>
              </p>
              <p class="add_info_b">
                <span class="add_b">手机号码</span>
                <input type="text" placeholder="请输入11位手机号码">
                <span class="xiaoshi">×</span>
              </p>
            </div>
            <div class="add_peo">
              <img src="../../static/img/lianxi.jpg" alt="">
              <p>选联系人</p>
            </div>
          </div>
          <p class="add_info_b">
            <span>备选号码</span>
            <input type="text" placeholder="固话或其他手机号码">
            <span class="xiaoshi">×</span>
          </p>
          <p class="add_info_b">
            <span>所在地区</span>
            <input type="text" placeholder="省-市-区-街道">
            <span class="xiaoshi">×</span>
          </p>
          <p class="add_info_b">
            <span>详细地址</span>
            <input type="text" placeholder="小区、门牌号等">
            <span class="xiaoshi">×</span>
          </p>

          <p class="static">
              <input type="checkbox" class="checbox_box">
              <span>设置为默认地址</span>
          </p>

          <div class="confirm">
            <button>取消</button>
            <button>确认</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HwAddRess",
        methods:{
          goback(){
            this.$router.go(-1)
          },
          shru(){
            // $(".add_info_b input").each(function (){
              console.log(this.p1);
              if (this.p1.length != 0) {
                $(".xiaoshi").css({"display": "block"})
                $(".add_pho .add_info_b .add_b").eq(i).css({"width": "50%"})
              } else {
                $(".xiaoshi").css({"display": "none"})
                $(".add_pho .add_info_b .add_b").css({"width": "30%"})
              }
            // })
          }
        },
         data(){
            return {
               p1:"",
            }
         },
        watch:{
          p1(){

          }
        }
    }
</script>

<style scoped>
  .add_head{
    height: .46rem;
    line-height: .46rem;
    position: relative;
    background: #ffffff;
  }
  .add_head h1{
    font-size: .18rem;
    text-align: center;
    font-weight: 500;
  }
  .add_head img{
    width: .12rem;
    height: .18rem;
    position: absolute;
    left: .15rem;
    top: .15rem;
  }
  .add_info input {
    border: none;
    outline-style: none;
  }
  .add_info input::-webkit-input-placeholder{
    color: #bbb;
    font-size: .16rem;
  }
  .add_info_a{
    width: 95%;
    display: flex;
    border-bottom:1px solid #eee;
    margin-left: .2rem;
  }
  .add_info_a span{
    width: 30%;
  }
  .add_pho{
    width: 78%;
  }
  .add_info_b{
    font-size: .16rem;
    display: flex;
    margin:0 .2rem ;
    padding: .1rem 0;
    border-bottom: 1px solid #eee;
  }
  .add_pho .add_info_b{
    margin: 0;
  }
  .add_pho .add_info_b .add_b{
    width: 30%;
  }
  .add_info_b span{
    width: 25%;
    display: block;
    color: #333;
  }
  .add_info_b .xiaoshi{
    text-align: right;
    margin-right: .1rem;
    display: none;
  }
  .add_peo{
    width: 20%;
    border-left: 1px solid #eee;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: .16rem;
  }
  .add_peo img {
    width: .32rem;
  }
  .add_peo p{
    margin-top: .1rem;
  }
  .static{
    display: flex;
    margin: .2rem;
  }
  .add_info .static input {
    margin-left: 0;
  }
  .static span{
    display: block;
    font-size: .18rem;
    font-weight: 500;
    margin-left: .2rem;
  }
  .checbox_box{
    width: .24rem;
    height: .24rem;
    -webkit-appearance: none;
    outline: none;
    border: none;
    background: url(../../static/img/xuan.png) left center no-repeat;
    background-position: 0 0;
    -webkit-background-size: .24rem;
    background-size: .24rem;
  }
  .checbox_box:checked{
    background: url(../../static/img/xuan.png) left center no-repeat;
    background-position: 0 -.24rem;
    -webkit-background-size: .24rem;
    background-size: .24rem;
  }
  .confirm{
    display: flex;
    justify-content: center;
  }
  .confirm button{
    width: 45%;
    margin:.2rem .08rem;
    font-size: .16rem;
    border-radius: .4rem;
    border: none;
    padding: .1rem 0;
    outline: none;
  }
  .confirm button:nth-child(1){
    background: #fff;
    border: 1px solid #eee;
    color: #333;
  }
  .confirm button:nth-child(2){
    background: #ca151e;
    color: #fff;
  }
</style>
