<template>
  <footer class="footer">
    <p>&copy; {{ currentYear }} Vue Projects by OSCZ</p>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: #b644d9;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: 20px;
}
</style>
