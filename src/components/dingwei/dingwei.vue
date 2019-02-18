<template>
  <div>
    <h1 class="hhh1">{{LocationCity}}</h1>
  </div>
</template>

<script>
    export default {
        name: "dingwei",
      data(){
        return {
          currentCity:"",
          LocationCity:"正在定位",
        }
      },
      mounted(){
           setTimeout(()=>{
             this.test();
           },1000)

      },
      methods:{
          test(){
            const geolocation = new BMap.Geolocation();
            let myCity = new BMap.LocalCity()
           // console.log(geolocation);
            var _this = this;
            geolocation.getCurrentPosition(function getinfo(position){
              let city = position.address.city;             //获取城市信息
              let province = position.address.province;    //获取省份信息
              _this.LocationCity = city
              console.log(city,province);
            }, function(e) {
              _this.LocationCity = "定位失败"
            }, {provider: 'baidu'});

          },
        test2(){
          let url="http://api.map.baidu.com/location/ip";
          let params={
             ak:"WePFwFs2Yj0rBeqG2pdZt7CnZgHcE0iC",
          }
          this.getRequest(url,params);
          // this.getRequest3(url,params);
        },
        getRequest(url,params)
        {
          return new Promise((res, req) => {
            this.$http.get(url,{
                params: params
              },
              {emulateJSON: true,changeOrigin:true}
            ).then((res) => {
                console.log(res);
              }).catch((req) => {
                console.log(req);
              });
          });
        },
        getRequest2(url,params){
          return new Promise((resolve, reject) => {
            this.$http.get(url, params).then(function (res) {
              console.log(res.city);
            }, function (res) {
              console.log(res.address);
            })
          })
        },
        getRequest3(url,params){
          // var map = new BMap.Map("allmap");
          // var point =new BMap.Point(113.30,23.1200);
          // map.centerAndZoom(point,15);
          this.$http.get("http://api.map.baidu.com/location/ip",{
            ak:"WePFwFs2Yj0rBeqG2pdZt7CnZgHcE0iC"
          },{
            // emulateJSON:true
          }).then(function(res){
            console.log(res.data);
          },function(res){
            console.log(res.status)
          });
        },

      }
    }
</script>

<style scoped>
.hhh1{
  font-size:0.14rem;
  color:#303030;
  line-height: 0.3rem;
  text-align:center;
}
</style>
