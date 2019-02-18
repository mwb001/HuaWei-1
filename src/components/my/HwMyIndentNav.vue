<template>
  <router-link to="" tag="li">
    <i :class="data.iconClass"></i>
    <span>{{data.word}}</span>
  </router-link>
</template>

<script>
  export default {
    name: "HwMyIndentNav",
    props : ['data']
  }
</script>

<style scoped>
li{
  flex: 1; color: #767676; font-size: .15rem;
  display: flex; align-items: center; justify-content: center; flex-direction: column;
}
li i{
  font-size: .28rem;margin-bottom: .1rem;
}
</style>
