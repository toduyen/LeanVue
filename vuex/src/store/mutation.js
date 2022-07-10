export default {
    increMent(state , payload){
        state.count = payload;
    },
    getProduct(state , payload){
        state.product = payload;
    }
}