<template>
  <p>{{getCouter}}</p>
  <button @click.stop="updateCounter">+</button>
  <pre>{{getProduct}}</pre>
  <button @click="getProductId">Calll</button>
</template>

<script>

import {mapGetters , mapMutations ,mapActions} from 'vuex'

export default {
  name: "CoutingVuex",
  data(){
    return{
      counting: 0
    }
  },
  computed:{
    ...mapGetters(['getCouter','getProduct'])
  },
  methods:{
    ...mapMutations(['increMent']),
    ...mapActions(['updateCounter']),
    getProductId(){
      this.$store.dispatch('getApiUserId',2)
    }
  },
  mounted() {
    this.$store.dispatch('getApiUser')
  }
}
</script>

<style scoped>

</style>