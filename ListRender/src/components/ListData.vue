<template>
  <form @submit.prevent="addArtis">
    <input v-model="textName"/>
    <button>SEND</button>
  </form>
  <ul>
    <li v-for="i in username" :key="i.id">
      <p>{{i.title}}</p>
      <button @click="removeArtis(i)">X</button>
    </li>
  </ul>
</template>

<script>

let i = 0;
export default {
  name: "ListData",
  data(){
    return{
      username: [
        {
          id: i++,
          title: 'nghe si'
        },
        {
          id: i++,
          title: 'nghe si 2'
        },
        {
          id: i++,
          title: 'nghe si 3'
        },
        {
          id: i++,
          title: 'nghe si 4'
        },
        {
          id: i++,
          title: 'nghe si 5'
        }
      ],
      textName: '',
    }
  },
  methods:{
    addArtis(){
      this.username.push({id: i++ , title: this.textName})
      this.textName = ''
    },
    removeArtis(todo){
      this.username = this.username.filter((el) => el !== todo)
    }
  }
}
</script>

<style scoped>

</style>