<template>
  <p>{{message.split('').reverse().join("")}}</p>
  <p>{{counter.count}}</p>
  <div>
    <h1 :class="cssAttribute">Hello anh em</h1>
    <button @click="increment">{{counter.count}}</button>
  </div>
  <div>
    <input :value="message" @input="onInput"/>
    <input type="text" v-model="twoWayBind"/>
    <p>Two way bind {{twoWayBind}}</p>
  </div>
  <div>
    <p v-if="twoWayBind === '0'">Chon dung roi</p>
    <p v-else>Khum dung zui</p>
  </div>
</template>

<script>
export default {
  name: "NewComp",
  data(){
    return{
      message: 'hahahahha',
      counter: {
        count: 0
      },
      cssAttribute: 'title',
      twoWayBind: 'hello'
    }
  },
  methods:{
    increment(){
      this.counter.count++;
    },
    onInput(e){
      this.message = e.target.value;
    }
  }
}
</script>

<style scoped>
  .title{
    color:red;
  }
</style>