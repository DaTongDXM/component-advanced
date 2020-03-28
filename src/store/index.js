import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsList: []
  },
  getters: {
    getAllPrice: state => {
      return state.goodsList.reduce((total, cur) => {
        return total + cur.price * cur.number
      }, 0)
    },
    getCar: state => {
      let arr = state.goodsList.filter(item => {
        if (item.number > 0) return true
      })
      return [...arr]
    }
  },
  mutations: {
    add (state, item) {
      let result = state.goodsList.some(good => {
        if (good.id == item.id) {
          good.number += 1
          return true
        }
      })
      if (!result) {
        Vue.set(item, 'number', 1)
        state.goodsList.push(item)
      }
    },
    remove (state, item) {
      let result = state.goodsList.some(good => {
        if (good.number == 0) return false
        if (good.id == item.id) {
          good.number -= 1
          return true
        }
      })
    }
  },
  actions: {

  }
})
