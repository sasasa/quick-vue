import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
    // ceiling: (state) => {
    //   const round = 10
    //   return Math.ceil(state.counter / round) * round
    // },
    ceiling: (state) => {
      return round => Math.ceil(state.counter / round) * round
    }
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
