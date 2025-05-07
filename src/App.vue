<template>
  <header-component />
  <main>
    <RouterView />
  </main>
  <footer-component />
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/shared/Header.vue'
import FooterComponent from './components/shared/Footer.vue'
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

main {
  padding: 20px;
  min-height: calc(100vh - 140px);
}
</style>
