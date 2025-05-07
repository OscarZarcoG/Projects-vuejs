<template>
  <div class="home">
    <h1>Proyecto de proyectos</h1>
    <p>Este es un proyecto que contiene múltiples mini-proyectos desarrollados con Vue.js.</p>
    <div class="actions">
      <RouterLink to="/projects" class="btn">Ver Proyectos</RouterLink>
    </div>
    <div class="features">
      <div class="feature">
        <router-link to="/projects">
          <h3>Proyectos Básicos</h3>
          <p>Calculadora, Conversor de Monedas, Lista de Tareas, etc</p>
        </router-link>
      </div>
      <div class="feature">
        <router-link to="/projects">
          <h3>Proyectos Intermedios</h3>
          <p>Próximamente: Aplicaciones con mayor complejidad</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}

h1 {
  color: #b568e1;
  margin-bottom: 20px;
}

.actions {
  margin: 30px 0;
}

.btn {
  display: inline-block;
  background-color: #bb4edc;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #62127a;
}

.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
}

.feature {
  flex: 1;
  min-width: 300px;
  margin: 15px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.feature h3 {
  color: #a972ba;
}
</style>
