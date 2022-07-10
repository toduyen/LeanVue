<template>
  <p>{{message}}</p>
</template>

<script>
export default {
  name: "ChildTwo",
  inject: ['message']
}
</script>

<style scoped>

</style>