<template>
    <div class="appSon">
      <header>
        <img @click="prev" src="../../static/img/icon_ecWap_close.png">
      </header>
      <div class="main">
        <div class="bzqd">
          <h6>包装清单</h6>
          <ul>
            <li>手机 X 1</li><li>电池（内置） X 1</li>
            <li>快速指南 X 1</li><li>SuperCharge充电器 X 1</li>
            <li>三包凭证 X 1</li><li>Type-C 数据线 X 1</li>
            <li>取卡针 X 1</li><li>TPU 保护壳 X 1</li>
            <li>荣耀宣传卡片 X 1</li>
          </ul>
        </div>

        <div class="attrs">
          <h6>主要参数</h6>
          <table>
            <tr>
              <td>传播名</td><td>荣耀V20</td>
            </tr>
            <tr>
              <td>传播名</td>
              <td>荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20</td>
            </tr>
            <tr>
              <td>传播名</td>
              <td>荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20</td>
            </tr>
          </table>
        </div>
        <div class="attrs">
          <h6>主要参数</h6>
          <table>
            <tr>
              <td>传播名</td><td>荣耀V20</td>
            </tr>
            <tr>
              <td>传播名</td>
              <td>荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20</td>
            </tr>
            <tr>
              <td>传播名</td>
              <td>荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20</td>
            </tr>
          </table>
        </div>
        <div class="attrs">
          <h6>主要参数</h6>
          <table>
            <tr>
              <td>传播名</td><td>荣耀V20</td>
            </tr>
            <tr>
              <td>传播名</td>
              <td>荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20</td>
            </tr>
            <tr>
              <td>传播名</td>
              <td>荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20荣耀V20</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "HwShoppinginfoAttrs",
    methods:{
      prev(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
.appSon{
  height: 100%; display: flex; flex-direction: column;
}
.main{
  flex: 1; overflow-y: auto; overflow-x: hidden; position: relative;
}
header{
  width: 100%; position: absolute; left: 0; top: 0; overflow: hidden; z-index: 10;
}
header img{
  width: .25rem; height: .25rem; float: right; margin: .2rem .2rem;
}
.bzqd{
  padding: .15rem; margin-bottom: .1rem;
}
h6{
  font-size: .18rem; color: #333; line-height: .5rem;
}
.bzqd ul{
  width: 100%; overflow: hidden;
}
.bzqd ul li{
  float: left; width: 48%; line-height: .4rem; margin-right: 2%;
  font-size: .15rem; color: #333; font-weight: lighter;
}
.attrs{
  padding: .15rem; margin-bottom: .1rem;
}
.attrs table{
  width: 100%;
}
.attrs table tr{
  width: 100%; font-size: .15rem; display: flex;
}
.attrs table tr td{
  margin-bottom: .1rem;
}
.attrs table tr td:nth-child(1){
  width: 26%; color: #999; margin-right: 2%;
}
.attrs table tr td:nth-child(2){
  width: 72%; color: #666; line-height: .24rem;
}
</style>
