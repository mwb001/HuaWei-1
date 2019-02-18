<template>
  <div class="reputation">
    <div class="title">{{data.title}}</div>

    <div class="reputation_list">
        <hw-find-reputation-item :data="data.list"></hw-find-reputation-item>
    </div>
  </div>
</template>

<script>
  import HwFindReputationItem from "./HwFindReputationItem"
  export default {
    name: "HwFindReputation",
    props:['data'],
    components:{
      HwFindReputationItem
    }
  }
</script>

<style scoped>
.reputation{
  padding: 0 .04rem;
}
.reputation .title{
  width: 100%; background: white; text-align: center;
  line-height: .5rem; font-size: .24rem; color: #026baf; font-weight: bold;
}
.reputation  .reputation_list{
  width: 100%;
}
</style>
