<script>
export default {
  inheritAttrs: false
}
</script>

<script setup>
defineProps({
  name: String
})
</script>

<template>
<div>こんにちは、{{ name }}さん！</div>
  <!-- <div v-bind="$attrs">こんにちは、{{ name }}さん！</div> -->
  <!-- <div v-bind:id="$attrs.id">こんにちは、{{ name }}さん！</div> -->
</template>

<style scoped>
</style>
