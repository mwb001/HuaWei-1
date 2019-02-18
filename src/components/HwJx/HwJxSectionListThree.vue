<template>
    <li>
      <p>{{data.tit1}}</p>
      <h6><span>{{data.tit2}}</span><strong>{{data.tit3}}</strong><em>{{data.tit4}}</em></h6>
    </li>
</template>

<script>
    export default {
        name: "HwJxSectionListThree",
      props:['data']
    }
</script>

<style scoped>
  li{
    width: 85%;
    flex-shrink: 0;
    flex-wrap: nowrap;
    margin-left:.16rem;
    background: white;
    border-radius: 15px;
    padding: .15rem .1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0.04rem 0.14rem 0 rgba(207,213,215,.3);
  }
p{
  font-size: .16rem;
  color: #333333;
  line-height: .25rem;
}
  h6{
    font-weight: 100;
    font-size: .14rem;
    color: #333333;
    /*padding-top: .2rem;*/
    text-indent: .1rem;
  }
  h6 strong{
    color: #888888;
    font-weight: 100;
    padding: 0 .05rem;
  }
  h6 em{
    font-style: normal;
  }
</style>
