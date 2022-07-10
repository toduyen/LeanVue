<template>
  <p :id="titleClass">{{message.split('').reverse().join('')}}</p>
  <button @click="increment">{{counter}}</button>
  <input v-model="text"/>
  <p>{{text}}</p>
  <p v-if="text==='tuan'">em chao dai ka</p>
  <p v-else>hahahahha</p>
</template>

<script>
export default {
  name: "OneStep",
  data(){
    return{
      message: 'hahahhaha',
      titleClass: 'bindthu',
      counter: 0,
      text: ''
    }
  },
  methods:{
    increment(){
      this.counter++
    },
  }
}
</script>

<style scoped>
  #bindthu{
    color: red;
  }
</style>