<template>
    <div class="service">
      <a href="javascript:void(0)"><i :class="data.tit"></i><p>{{data.tit1}}</p></a>
    </div>
</template>

<script>
    export default {
        name: "HwJxSectionIndent",
      props:['data']
    }
</script>

<style scoped>
.service{
  width: 20%;
  height: .8rem;
}
.service a{
  height: .8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.service a .icon-youhuiquan{
  font-weight: 100;
}
.service a .icon-wentiquestions1,.service a .icon-daipingjia{
  font-size: .24rem;
  margin-bottom: .05rem;
}
  .iconfont{
    font-size: .3rem;
    color: #ff483c;
    font-weight: 600;
  }

  p{
    font-size: .12rem;
    color: #333333;
  }
</style>
