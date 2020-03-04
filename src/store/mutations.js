const mutations = {
    showHeader (state) {
        state.header = true
    },
    hideHeader (state) {
        state.header = false
    },
    showLoading (state) {
        state.loading = true
    },
    hideLoading (state) {
        state.loading = false
    }
}
export default mutations;