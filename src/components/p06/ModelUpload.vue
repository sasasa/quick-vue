<script setup>
import { ref } from 'vue'
const result = ref('')
const upfile = ref(null)
const onclick = () => {
  const file = upfile.value.files[0]
  const form = new FormData()
  form.append('upfile', file, file.name)
  fetch('upload.php', {
    method: 'POST',
    body: form
  })
  .then(function(response) {
    return response.text()
  })  
  .then(function(text) {
    result.value = text
  })
}
</script>

<template>
  <form>
    <input type="file" ref="upfile" />
    <input type="button" value="アップロード" v-on:click="onclick" />
  </form>
  <div>{{ result }}</div>
</template>

<style scoped>
</style>
