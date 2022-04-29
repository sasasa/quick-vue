<script setup>
defineProps({
  page_num: {
    type: String,
    required: true
  },
})
</script>
<template>
  <div class="page">
    <span>ページ番号：{{ page_num }}</span>
  </div>
</template>

<style scoped>
</style>