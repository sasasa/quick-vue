<script setup>
import { provide } from 'vue'
import InjectList from './InjectList.vue'
import useBook from '../composite/useBook.js'
const { books, onclick } = useBook()
provide('list', { books, onclick })
</script>

<template>
  <InjectList />
</template>

<style scoped>
</style>
