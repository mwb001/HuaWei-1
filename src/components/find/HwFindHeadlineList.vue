<template>
    <div class="headline_list">
      <hw-find-headline-list-flag :data="data.flag"></hw-find-headline-list-flag>
      <hw-find-headline-list-con :data="data.list"></hw-find-headline-list-con>
    </div>
</template>

<script>
    import HwFindHeadlineListCon from "./HwFindHeadlineListCon"
    import HwFindHeadlineListFlag from "./HwFindHeadlineListFlag"
    export default {
      name: "HwFindHeadlineList",
      components : {
        HwFindHeadlineListCon,HwFindHeadlineListFlag
      },
      props:['data']
    }
</script>

<style scoped>
.headline_list{
  width: 100%;
}
</style>
