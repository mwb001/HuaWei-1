<template>
    <header>
      <h3>{{data}}</h3>
    </header>
</template>

<script>
    export default {
        name: "HwSearchHeader",
      props : ['data']
    }
</script>

<style scoped>
header{
  padding: 0 .12rem;
  height: .5rem;
  background: white;
  font-size: .2rem;
}
header h3{
  line-height: .5rem;
  text-align: center;
}
</style>
