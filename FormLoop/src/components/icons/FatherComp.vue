<template>
  <FormVue :ref="(el) => child = el" @reponse="(el) => dataChild = el"></FormVue>
  <p>Cha: {{dataChild}}</p>
</template>

<script>
import FormVue from '../FormVue.vue';
export default {
  name: "FatherComp",
  components:{
    FormVue
  },
  data(){
    return{
      child: '',
      dataChild: ''
    }
  },
  mounted() {
    console.log(this.child.$refs.p.innerText)
  }
}
</script>

<style scoped>

</style>