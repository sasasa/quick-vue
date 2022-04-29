<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const unsubscribe = store.$onAction(({ name, store, args, after, onError }) => {
    after(result => {
      localStorage['quick_vue'] = JSON.stringify(store.counter)
    })
    onError(error => {
      console.log(error)
    })    
})


const { counter } = storeToRefs(store)
// const { counter, ceiling } = storeToRefs(store)
const ceiling = computed(() => store.ceiling(10))

const onclick = () => {
  store.increment()
  // counter.value++
}
</script>
<template>
  <!-- カウンター値：{{ counter }} -->
  カウンター値：{{ counter }}/{{ ceiling }}
  <input type="button" v-on:click="onclick" value="+" />
</template>

<style scoped>
</style>