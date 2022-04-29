<script setup>
import { ref, toRef } from 'vue'
const props = defineProps({
  init: Number
})
const current = ref(props.init)
const onclick = () => current.value++
</script>

<template>
  <div>
    現在値は{{ current }}です！
    <input type="button" v-on:click="onclick" value="増加" />
  </div>
</template>

<style scoped>
</style>
