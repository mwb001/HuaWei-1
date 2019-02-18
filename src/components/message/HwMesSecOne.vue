<template>
  <li class="lim">
    <div class="mestit" :class="(keyy===i)?'tiao01':''"  @click="tiao(keyy)">
      <h3 class="mesh3">{{data.tit}}</h3>
      <div class="tittime">
        <p class="titp">{{data.time}}</p>
        <span class="iconfont icon-xiajiantou titspan"></span>
      </div>
    </div>
    <div class="messec">
      {{data.sec}}<div class="ppp"><p>{{data.seclj}}<img src="../../../static/img/more.png" alt=""></p></div>
    </div>
    <div class="messec01">
      {{data.sec}}<div class="ppp"><p>{{data.seclj}}<img src="../../../static/img/more.png" alt=""></p></div>
    </div>
  </li>
</template>

<script>
  import "jquery";
  // let str = document.getElementsByClassName("messec")[0];
  // let str=$(".messec");

  export default {
        name: "HwMesSecOne",
      props:["data","keyy"],
      data(){
        return {
          i:-1
        }
      },
      mounted(){
        let str=$(".messec");

        for(var i=0;i<str.length;i++){
          str.css("whiteSpace","nowrap");
        }
      },
      methods:{
         tiao:function(keyy){
           // $("#mmp").css({height:"3rem"})
           this.i=keyy

             if($('.messec01').eq(keyy).is(':hidden')){//如果当前隐藏
               $('.messec01').eq(keyy).show();//那么就显示div
               $(".messec").eq(keyy).hide();
               $( this ).eq(keyy).addClass( ".messec" )
             }else{//否则
               $('.messec01').eq(keyy).hide();//就隐藏div
               $(".messec").eq(keyy).show();
               $( this ).eq(keyy).removeClass( ".messec")
             }


         },
        hid:function(keyy){
          this.i=keyy
          $(".messec").eq(keyy).hide()
            $(".messec01").eq(keyy).hide()
        }
      }
    }
</script>

<style scoped>
  li{
    box-sizing: border-box;
    width:100%;
    border-top:.08rem solid #f3f3f3;
    padding:0px .25rem;
    background: white;
  }
  .mesh3{
    width:1.6rem;
    font-size:.14rem;
    color:#b41229;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  .mestit{
    height:.42rem;
    line-height: .42rem;
    width:100%;
    display: flex;
    justify-content:space-between;
  }
  .tiao01 .mesh3{
    color: #2c2c2c;
    overflow: visible;
  }
  .tiao01 .titp{
    display:none;
  }
  .tiao01 .titspan{
    transform:rotate( -180deg);
  }
.tittime{
  font-size:.1rem;
  color:#bdbdbd;
  line-height: .42rem;
  display: flex;
  align-items: center;
}
.titp{
  display: block;
}
  .tittime .iconfont{
    font-size: .14rem;
    margin-left:.13rem;
  }
  .messec{
    font-size:.15rem;
    color:#bfbfbf;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  .messec01{
    font-size:.15rem;
    color:#bfbfbf;
    overflow: hidden;
    display:none;
    white-space:pre-wrap;
    padding-bottom:.3rem;
  }
  .messec p,.messec01 p{
    display:inline;
    width:.9rem;
    color:#0a8d85;
    padding-bottom:2px;
  }
  .messec p img,.messec01 p img{
    display: inline;
    width:.14rem;
    height:.07rem;
    background: url("../../../static/img/more.png");
    background-size:100%;
  }
  .ppp,.messec01 .ppp{
    overflow: hidden;
    display:inline;
    padding-bottom:2px;
    border-bottom:1px solid #0a8d85;
  }

</style>



