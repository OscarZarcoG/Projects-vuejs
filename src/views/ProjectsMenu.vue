<template>
  <div class="projects-menu">
    <h1>Proyectos</h1>
    <div class="category">
      <h2>Proyectos Básicos</h2>
      <div class="projects-grid">
        <RouterLink to="/projects/calculator" class="project-card">
          <div class="project-icon">🧮</div>
          <h3>Calculadora</h3>
          <p>Una calculadora simple con operaciones básicas</p>
        </RouterLink>
        <RouterLink to="/projects/currency-converter" class="project-card">
          <div class="project-icon">💱</div>
          <h3>Conversor de Monedas</h3>
          <p>Convierte entre diferentes divisas</p>
        </RouterLink>
        <RouterLink to="/projects/todo-list" class="project-card">
          <div class="project-icon">✅</div>
          <h3>Lista de Tareas</h3>
          <p>Gestiona tus tareas pendientes</p>
        </RouterLink>
        <RouterLink to="/projects/password-generator" class="project-card">
          <div class="project-icon">🔒</div>
          <h3>Generador de Contraseñas</h3>
          <p>Crea contraseñas seguras</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.projects-menu {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #b568e1;
  margin-bottom: 30px;
  text-align: center;
}

.category {
  margin-bottom: 40px;
}

h2 {
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.project-card {
  display: block;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  text-decoration: none;
  color: #333;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.project-icon {
  font-size: 2rem;
  margin-bottom: 15px;
}

.project-card h3 {
  margin: 10px 0;
  color: #b568e1;
}

.project-card p {
  color: #666;
  font-size: 0.9rem;
}
</style>
