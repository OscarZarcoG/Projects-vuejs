<template>
  <div class="todo-app">
    <h1>Lista de Tareas</h1>

    <div class="add-task">
      <input
        type="text"
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Añadir nueva tarea..."
      />
      <button @click="addTask">Añadir</button>
    </div>

    <div class="filters">
      <button :class="{ active: filter === 'all' }" @click="filter = 'all'">Todas</button>
      <button :class="{ active: filter === 'active' }" @click="filter = 'active'">Activas</button>
      <button :class="{ active: filter === 'completed' }" @click="filter = 'completed'">
        Completadas
      </button>
    </div>

    <div class="task-list">
      <div v-if="filteredTasks.length === 0" class="empty-list">No hay tareas que mostrar</div>

      <div
        v-for="task in filteredTasks"
        :key="task.id"
        class="task-item"
        :class="{ completed: task.completed }"
      >
        <div class="task-content">
          <input type="checkbox" :checked="task.completed" @change="toggleTask(task.id)" />
          <span>{{ task.text }}</span>
        </div>
        <button @click="deleteTask(task.id)" class="delete-btn">×</button>
      </div>
    </div>

    <div class="task-stats" v-if="tasks.length > 0">
      <span>{{ activeTasksCount }} tareas pendientes</span>
      <button @click="clearCompleted" v-if="completedTasksCount > 0">Eliminar completadas</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const tasks = ref([
  { id: 1, text: 'Aprender Vue.js', completed: false },
  { id: 2, text: 'Crear una To-Do List', completed: true },
  { id: 3, text: 'Diseñar interfaz de usuario', completed: false },
])

const newTask = ref('')
const filter = ref('all')
const nextTaskId = ref(4)

const filteredTasks = computed(() => {
  switch (filter.value) {
    case 'active':
      return tasks.value.filter((task) => !task.completed)
    case 'completed':
      return tasks.value.filter((task) => task.completed)
    default:
      return tasks.value
  }
})

const activeTasksCount = computed(() => {
  return tasks.value.filter((task) => !task.completed).length
})

const completedTasksCount = computed(() => {
  return tasks.value.filter((task) => task.completed).length
})

const addTask = () => {
  if (newTask.value.trim() === '') return

  tasks.value.push({
    id: nextTaskId.value++,
    text: newTask.value.trim(),
    completed: false,
  })

  newTask.value = ''
}

const toggleTask = (id) => {
  const task = tasks.value.find((task) => task.id === id)
  if (task) {
    task.completed = !task.completed
  }
}

const deleteTask = (id) => {
  const index = tasks.value.findIndex((task) => task.id === id)
  if (index !== -1) {
    tasks.value.splice(index, 1)
  }
}

const clearCompleted = () => {
  tasks.value = tasks.value.filter((task) => !task.completed)
}
</script>

<style scoped>
.todo-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #6e0ba7;
  margin-bottom: 24px;
}

.add-task {
  display: flex;
  margin-bottom: 20px;
}

.add-task input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}

.add-task button {
  padding: 12px 20px;
  background-color: #9f31de;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.add-task button:hover {
  background-color: #4c176a;
}

.filters {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.filters button {
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid #ddd;
  margin: 0 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.filters button.active {
  background-color: #b568e1;
  color: white;
  border-color: #a343da;
}

.task-list {
  margin-bottom: 20px;
}

.empty-list {
  text-align: center;
  color: #888;
  padding: 20px 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #f9f9f9;
  margin-bottom: 8px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.task-item:hover {
  background-color: #f1f1f1;
}

.task-item.completed {
  background-color: #e8f5e9;
}

.task-item.completed span {
  text-decoration: line-through;
  color: #888;
}

.task-content {
  display: flex;
  align-items: center;
}

.task-content input[type='checkbox'] {
  margin-right: 10px;
  cursor: pointer;
}

.delete-btn {
  background-color: transparent;
  border: none;
  color: #ff5252;
  font-size: 20px;
  cursor: pointer;
  padding: 0 5px;
}

.delete-btn:hover {
  color: #ff1744;
}

.task-stats {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  border-top: 1px solid #eee;
  color: #666;
  font-size: 14px;
}

.task-stats button {
  background-color: transparent;
  border: none;
  color: #b568e1;
  cursor: pointer;
  font-size: 14px;
}

.task-stats button:hover {
  text-decoration: underline;
}
</style>
