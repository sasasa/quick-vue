<script setup>
import { inject } from 'vue'
// const books = inject('list')
// const books = inject('list', [])
const { books, onclick } = inject('list')
</script>

<template>
  <table class="table">
    <th>ISBN</th><th>書名</th><th>価格</th><th></th>
    <tr v-for="b in books" v-bind:key="b.isbn">
      <td>{{ b.isbn }}</td>
      <td>{{ b.title }}</td>
      <td>{{ b.price }}円</td>
      <td><input type="button" value="削除" v-on:click="onclick(b.isbn)" /></td>
    </tr>
  </table>
</template>

<style scoped>
</style>
