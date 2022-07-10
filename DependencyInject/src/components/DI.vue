<template>
  <ChildOne/>
</template>

<script>
import ChildOne from './Child/ChildOne.vue'
export default {

  name: "DI",
  components:{
      ChildOne
  },
  provide(){
    return{
      message: 'Childer'
    }
  }
}
</script>

<style scoped>

</style>