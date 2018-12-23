// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tabIndex: 1,
    dataArray: []
  },
  mutations: {
    tabChange (state, index) {
      const obj = state
      obj.tabIndex = index
    },
    addElement (state, newData) {
      const obj = state
      obj.dataArray.push(newData)
    },
    delElement (state, index) {
      const obj = state
      obj.dataArray.splice(index, 1)
    }
  }
})

export default store
