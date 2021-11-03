/*
 * @Description: vuex主入口
 * @Author: 逍遥子
 * @Date: 2021-11-03 23:00:08
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-03 23:25:51
 * @FilePath: /PnpmVite/src/store/index.js
 */
import { createStore } from 'vuex'

export default createStore({
    state: {
      name: 'Joker',
      count: 1,
    },
    mutations: {
      setTestA(state,value) {
        state.test.a = value
      },
      add(state) {
        state.count++;
      },
      reduce(state) {
          state.count--;
      }
    },
    actions: {
        reduceCount({ commit, state }) {
            commit('reduce')
        }
    },
    getters: {
        newCounts(state) {
            return state.count * 4
        }
    },
    modules: {
    }
  })