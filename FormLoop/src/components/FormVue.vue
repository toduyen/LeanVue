<template>
  <form @submit.prevent="addUsername">
    <input type="text" name="address" v-model="tempUsername">
    <button>Click add</button>
    <div v-for="item in fileterComputers">
      <input type="checkbox" name="checkbox" v-model="item['status']">
      <p :class="{done: item['status']}">{{item['name']}}</p>
      <button @click="removeItem(item)">X</button>
    </div>
  </form>
  <div>
    <button @click="templeHide = !templeHide">{{templeHide ? 'True' : 'false'}}</button>
  </div>
  <p ref="p">VICTIM</p>
</template>

<script>
let i = 0;
export default {
  name: "FormVue",
  data(){
    return{
      username:[
        {
          id: i++,
          name: 'abe',
          status: true
        },
        {
          id: i++,
          name: 'abe2',
          status: false
        },
        {
          id: i++,
          name: 'abe3',
          status: true
        }
      ],
      tempUsername: '',
      templeHide: false,
    }
  },
  methods:{
    addUsername(){
      this.username.push({id: i++ , name: this.tempUsername , status: false})
      this.tempUsername = ''
    },
    removeItem(item){
      this.username = this.username.filter((el) => el !== item)
    }
  },
  computed:{
    fileterComputers(){
      return this.templeHide ? this.username.filter((el) => !el.status) : this.username
    }
  },
  emits: ['reponse'],
  created() {
    this.$emit('reponse' , 'hahahahahahX3')
  }
}
</script>

<style scoped>
  .done{
    text-decoration: line-through;
  }
</style>