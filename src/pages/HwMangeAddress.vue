<template>
    <div class="add">
        <div class="add_head">
          <img src="../../static/img/youjiantou.jpg" alt="" @click="goback">
          <h1>管理收货地址</h1>
        </div>
        <div class="add_middle">
          <img class="kong_img" src="../../static/img/kong.jpg" alt="">
          <ul class="add_list">
            <li class="add_item"  id="add_item">
              <div class="add_lis">
                <p class="lis_a">
                  <span>要不到()</span>
                  <span>1502958065</span>
                </p>
                <p class="lis_b">陕西&nbsp;&nbsp;西安市&nbsp;&nbsp;雁塔区&nbsp;&nbsp;丈八沟街道&nbsp;&nbsp;陕西省西安市雁塔区</p>
              </div>
              <div class="static_add">
                <p class="checkbox">
                  <input type="checkbox" checked class="check_box">
                  <span>默认地址</span>
                </p>
                <ul class="bianji">
                  <li class="bj" @click="gomange">
                    <img src="../../static/img/bianji.jpg" alt="">
                    <p>编辑</p>
                  </li>
                  <li class="del" @click="del">
                    <img src="../../static/img/del.jpg" alt="">
                    <p>删除</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="del_box" id="del_box">
            <div class="con">
                <h4>提示</h4>
                <p class="coninfo">您确认要删除该地址吗？</p>
                <p class="true">
                  <span class="qu" @click="quxiao">取消</span>
                  <span class="true_a" @click="queren">确认</span>
                </p>
            </div>
          </div>
        </div>
        <div class="add_ress" @click="goadd">
          <img src="../../static/img/add.jpg" alt="">
            <p>新增收货地址</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: "MangeAddress",
        methods:{
            goadd(){
              this.$router.push({path:"/add"})
            },
            goback(){
              this.$router.go(-1)
            },
            gomange(){
              this.$router.push({path:"/add"})
            },
            del(){
              $(".del_box").css({"display":"block"})
            },
            quxiao(){
                $(".del_box").css({"display":"none"})
            },
            queren(){
              console.log($(this).parents("#del_box").prev().children("#add_item"))
              $("#del_box").css({"display":"none"})
            }
        }
    }
</script>

<style scoped>
  .add{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
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
  .add_middle{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    background: #f9f9f9;
  }
  .add_middle .kong_img{
    display: none;
    width: .84rem;
    height: 1.2rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .add_list{
    /*border-top: 1px solid #c84a17;*/
    /*border-bottom: 1px solid #c84a17;*/
    background: #fff;
    padding:.1rem .2rem;
  }
  .add_lis {
    padding: .1rem 0;
    border-bottom: 1px solid #eee;
  }
  .lis_a{
    display: flex;
  }
  .lis_a span{
    font-size: .16rem;
    line-height: .2rem;
    vertical-align: middle;
    display: block;
  }
  .lis_a span:nth-child(2){
    margin-left: .3rem;
  }
  .add_lis .lis_b{
    color: #949494;
    font-size: .14rem;
    margin-top:.05rem;
  }
  .static_add{
    font-size: .16rem;
    color: #949494;
    display: flex;
    padding-top:.1rem;
  }
  .checkbox{
    width: 45%;
    display: flex;
  }
  .check_box{
    width: .21rem;
    height: .21rem;
    -webkit-appearance: none;
    outline: none;
    border: none;
    background: url(../../static/img/xuan.png) left center no-repeat;
    background-position: 0 0;
    -webkit-background-size: .21rem;
    background-size: .21rem;
    margin-right: .1rem;
  }
  .check_box:checked{
    background: url(../../static/img/xuan.png) left center no-repeat;
    background-position: 0 -.21rem;
    -webkit-background-size: .21rem;
    background-size: .21rem;
  }
  .bianji{
    width: 45%;
    display: flex;
    justify-content: space-between;
  }
  .bianji li{
    display: flex;
  }
  .bianji li img{
    margin-right: .1rem;
    margin-left: .2rem;
  }
  .add_ress{
    width: 85%;
    height: .46rem;
    font-size: .16rem;
    color: #fff;
    -webkit-border-radius: .2rem;
    -moz-border-radius: .2rem;
    border-radius: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e1392c;
    margin: 0 auto;
  }
  .add_ress img{
    margin-right: .1rem;
  }
  /*删除提示框*/
  .del_box{
    width: 100%;
    height: 100%;
    background: rgba(140,140,140,.6);
    position: fixed;
    left: 0;
    top: 0;
    display: none;
  }
  .con{
    width: 80%;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    left: 10%;
    top: 40%;
    text-align: center;
  }
  .con h4{
    display: block;
    font-size: .18rem;
    font-weight: 600;
    margin-top: .1rem;
  }
  .con .coninfo{
    font-size: .14rem;
    line-height: .6rem;
  }
  .true {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .true span{
    width: 50%;
    display: block;
    font-size: .14rem;
    padding: .1rem 0;
    border-top: 2px solid #eee;
  }
  .true span:nth-child(1){
    border-right: 2px solid #eee;
  }
</style>

