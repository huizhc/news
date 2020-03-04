import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
    header: true,
    loading: false
};
export default new VueX.Store({
    state,
    getters,
    mutations,
    actions
})