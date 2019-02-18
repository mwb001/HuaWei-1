<template>
  <div class="headline">

    <hw-find-headline-title :data="data.title"></hw-find-headline-title>

    <hw-find-headline-nav :data="data.navImg"></hw-find-headline-nav>

    <hw-find-headline-list :data="data.headlineList"></hw-find-headline-list>

    <a class="more" href="javascript:void(0)">点击查看更多></a>

  </div>
</template>

<script>
  import HwFindHeadlineTitle from "./HwFindHeadlineTitle"
  import HwFindHeadlineNav from "./HwFindHeadlineNav"
  import HwFindHeadlineList from "./HwFindHeadlineList"
  export default {
    name: "HwFindHeadline",
    props:['data'],
    components:{
      HwFindHeadlineTitle,HwFindHeadlineNav,HwFindHeadlineList
    }
  }
</script>

<style scoped>
  .headline{
    width: 100%;
    border-bottom: 2px solid #f5f7f6;
  }
  .headline .more{
    width: 100%; height: .55rem;font-weight: bold; font-size: .16rem;
     color: black; display: flex; align-items: center; justify-content: center;
  }
</style>
