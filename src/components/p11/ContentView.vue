<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  page_num: {
    type: String,
    required: false
  },
})
</script>
<template>
  <div class="article">
    <span>記事コード：{{ id }}</span>
    <div>
    ［<RouterLink v-bind:to="`/content/${id}/page/1`">1</RouterLink>］
    ［<RouterLink v-bind:to="`/content/${id}/page/2`">2</RouterLink>］
    ［<RouterLink v-bind:to="`/content/${id}/page/3`">3</RouterLink>］
    </div>
    <hr />
    <RouterView />
  </div>
</template>

<style scoped>
</style>