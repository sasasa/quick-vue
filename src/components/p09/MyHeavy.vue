<script setup>
import { ref } from 'vue'
const msg = await new Promise((resolve) => {
  setTimeout(() => { resolve() }, 5000)
})
.then(() => ref('こんにちは、Suspense!!'))
</script>

<!-- 
<script>
import { ref } from 'vue'
export default {
  async setup() {
    const msg = await new Promise((resolve) => {
      setTimeout(() => { resolve() }, 5000)
    })
    .then(() => ref('こんにちは、Suspense!!'))
    return {
      msg
    }
  }
}
</script>
-->

<template>
  <div>{{ msg }}</div>
</template>

<style scoped>
</style>
