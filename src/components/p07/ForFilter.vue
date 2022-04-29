<script setup>
import { ref, computed } from 'vue'
const books = ref([
  {
    isbn: '978-4-7981-5382-7',
    title: '独習C# 新版',
    price: 3600
  },
  {
    isbn: '978-4-7741-9618-3',
    title: 'Ruby on Rails 超入門',
    price: 2060
  },
  {
    isbn: '978-4-7981-5202-8',
    title: 'Androidアプリ開発の教科書',
    price: 2750
  },
  {
    isbn: '978-4-7741-9572-8',
    title: '3ステップでしっかり学ぶ MySQL入門',
    price: 2480
  },
  {
    isbn: '978-4-8222-5355-4',
    title: 'アプリを作ろう！Visual C#入門',
    price: 2000
  }
])
const cheapBooks = computed(() => {
  return books.value.filter(b => b.price < 2500)
})
</script>

<template>
  <table class="table">
    <th>ISBN</th><th>書名</th><th>価格</th>
    <tr v-for="b in cheapBooks" v-bind:key="b.isbn">
      <td>{{ b.isbn }}</td>
      <td>{{ b.title }}</td>
      <td>{{ b.price }}円</td>
    </tr>
  </table>
</template>

<style scoped>
</style>
