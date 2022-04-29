<script setup>
import { ref } from 'vue'
const gender = ref('男性')
</script>

<template>
  <form>
    <label for="man">男性</label>
    <input type="radio" id="man" value="男性" v-model="gender" />
    <br />
    <label for="woman">女性</label>
    <input type="radio" id="woman" value="女性" v-model="gender" />
    <br />
    <label for="other">その他</label>
    <input type="radio" id="other" value="その他" v-model="gender" />
  </form>
  <p> 性別：{{ gender }}</p>
</template>

<style scoped>
</style>
