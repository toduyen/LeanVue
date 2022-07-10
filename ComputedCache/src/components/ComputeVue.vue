<template>
  <p>Hello anh em</p>
  <ul>
    <li v-for="i in viewData" :key="i.id">
      <input type="checkbox" v-model="i.state"/>
      <p :class="{done: i.state}">{{i?.title}}</p>
      <button @click="removeItem(i)">X</button>
    </li>
  </ul>
</template>

<script>
let i = 0;
export default {
  name: "ComputeVue",
  data(){
    return{
      username: [
        {
          id: i++,
          title: 'tuan phan 1',
          state: false
        },
        {
          id: i++,
          title: 'tuan phan 2',
          state: false
        },
        {
          id: i++,
          title: 'tuan phan 3',
          state: true
        }
      ],
      dataTemp: '',
      completeState: false
    }
  },
  methods:{
    addItem(){
      this.username.push({id: i++ , title: this.dataTemp , state: false})
      this.dataTemp = ''
    },
    removeItem(i){
      this.username = this.username.filter((el) => el !== i)
    }
  },
  computed:{
    viewData(){
      return this.completeState ? this.username.filter((el) => !el.state) : this.username;
    }
  }
}
</script>

<style scoped>
  .done{
    text-decoration: line-through;
  }
</style>