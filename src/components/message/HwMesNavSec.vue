<template>
  <li class="lis">
    {{data.tit}}
    <div v-if="data.is" class="xyd"></div>
  </li>
</template>

<script>
    export default {
        name: "HwMesNavSec",
      props:["data"]
    }
</script>

<style scoped>
li{
  width:33%;
  height:.41rem;
  font-size:.12rem;
  color: #383838;
  position: relative;
  line-height:.41rem;
  text-align: center;
}

.xyd{
  width:6px;
  height:6px;
  background: #d0101d;
  border-radius: 50%;
  position: absolute;
  top: 7px;
  right: 20px;
}
</style>
