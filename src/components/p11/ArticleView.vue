<script setup>
defineProps({
  id: {
    type: String,
    required: true
  }
})

// propsオプションを指定しなかった場合
// import { useRoute } from 'vue-router'

// const route = useRoute()
// const id = route.params.id
</script>

<template>
  <div class="article">
    <span>記事コード：{{ id }}</span>
  </div>
</template>

<style scoped>
</style>