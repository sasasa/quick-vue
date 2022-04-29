<script setup>
defineProps(['name'])

// defineProps({
//   name: {
//     type: String,
//     required: true,
//     validator: v => v.length <= 5
//   }
// })

// defineProps({
//   name: {
//     type: Object,
//     default: () => ({ value: '権兵衛' })
//   }
// })
</script>

<template>
  <div>こんにちは、{{ name }}さん！</div>
  <!-- <div>こんにちは、{{ name.value }}さん！</div> -->
</template>

<style scoped>
</style>
