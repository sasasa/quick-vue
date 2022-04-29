<script setup>
import { ref } from 'vue'

const message = ref('')
const help = () => {
  window.alert('20文字以内で入力してください')
}
</script>

<template>
  <form>
    <label for="message">メッセージ：</label><br />
    <textarea id="message" v-on:keyup.alt.enter="help" v-model="message">
    <!-- <textarea id="message" v-on:keyup.alt.enter.exact="help" v-model="message"> -->
    </textarea>
  </form>
</template>

<style scoped>
</style>
