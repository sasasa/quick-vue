<script setup>
</script>

<template>
  <nav>
    ［<RouterLink to="/">Home</RouterLink>］
    ［<RouterLink to="/about">About</RouterLink>］
    ［<RouterLink to="/article/108">Article</RouterLink>］
    <!-- ［<RouterLink v-bind:to="{ name: 'article', params: { id: 108 }}">Article</RouterLink>］ -->
    ［<RouterLink to="/multi/108">MultiView</RouterLink>］
    ［<RouterLink to="/content/108">NestView</RouterLink>］
  </nav>
  <hr />
  <RouterView />
  <!-- <hr /> -->
  <RouterView name="sub" />
</template>

<style scoped>
/* 
.router-link-active {
  background-color: yellow;
}
*/
</style>
