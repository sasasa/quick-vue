<script setup>
import { ref } from 'vue'
const emails = ref([])
</script>

<template>
  <form>
    <label for="name">メールアドレス：</label>
    <textarea v-bind:value="emails.join(';')"
      v-on:input="emails=$event.target.value.split(';')"></textarea>
  </form>
  <ul>
    <li v-for="email in emails" v-bind:key="email">
      {{ email }}
    </li>
  </ul>
</template>

<style scoped>
</style>
