<script setup>
import InjectList from './InjectList.vue'
import { ref, provide } from 'vue'
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
const onclick = isbn => {
  books.value = books.value.filter(b => b.isbn !== isbn)
}
// provide('list', books)
provide('list', { books, onclick })
</script>

<template>
  <InjectList />
</template>

<style scoped>
</style>
