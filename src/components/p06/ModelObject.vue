<script setup>
import { ref } from 'vue'
const unit = ref({})
</script>

<template>
  <form>
    <label for="kb">1KB：</label>
    <input type="radio" id="kb" v-model="unit"
      v-bind:value="{ name: 'キロバイト', size: 1024 }" /><br />
    <label for="mb">1MB：</label>
    <input type="radio" id="mb" v-model="unit"
      v-bind:value="{ name: 'メガバイト', size: 1048576 }" /><br />
    <label for="gb">1GB：</label>
    <input type="radio" id="gb" v-model="unit"
      v-bind:value="{ name: 'ギガバイト', size: 1073742000 }" />
  </form>
  <div>選択値：{{ unit.name }}／{{ unit.size }}byte</div>
</template>

<style scoped>
</style>
