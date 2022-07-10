<template>
<p ref="p">HAHAHHA</p>
  <button @click="count++">{{count}}</button>
  <AddComp @response="(el) => childData = el"/>
  <p>{{childData}}</p>
</template>

<script>
import AddComp from "./AddComp.vue"
export default {
  name: "LifeCycleRef",
  mounted() {
    this.$refs.p.textContent = 'muahahha'
  },
  data(){
    return{
      count: 0,
      childData: ''
    }
  },
  watch:{
    count(newcount){
      console.log(`thay doi nha ${newcount}`)
    }
  },
  components:{
    AddComp
  }
}
</script>

<style scoped>

</style>