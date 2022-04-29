<script setup>
import { reactive } from 'vue'
const member = reactive({
  name: '山田太郎',
  age: 30,
  mail: 'yamada@example.com'
})
</script>

<template>
  <ul>
    <li v-for="(value, key, i) in member" v-bind:key="key">
      {{ i + 1 }}. {{ key }} ：{{ value }}
    </li>
  </ul>
</template>

<style scoped>
</style>
