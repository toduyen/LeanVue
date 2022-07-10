export default {
    updateCounter({commit}){
        commit('increMent','10000000')
    },
    async getApiUser({commit}){
        await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((json) => commit('getProduct',json))
    },
    async getApiUserId({commit},processid){
        await fetch(`https://jsonplaceholder.typicode.com/posts/${processid}`).then((res) => res.json()).then((json) => commit('getProduct',json))
    }
}