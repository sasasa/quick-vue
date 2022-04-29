<script setup>
import MyHeavy from './MyHeavy.vue'
</script>

<template>
  <Suspense>
    <template v-slot:default>
      <MyHeavy />
    </template>
    <template v-slot:fallback>
      コンポーネントをロード中です…
    </template>
  </Suspense>
</template>

<style scoped>
</style>
