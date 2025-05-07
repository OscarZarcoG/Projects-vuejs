import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsMenu from '../views/ProjectsMenu.vue'
import Calculator from '../projects/1-basic/1-Calculator/Calculator.vue'
import CurrencyConverter from '../projects/1-basic/2-Currency-Converter/CurrencyConverter.vue'
import ToDoList from '../projects/1-basic/3-To-Do-List/ToDoList.vue'
import PasswordGenerator from '../projects/1-basic/4-Password-Generator/PasswordGenerator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsMenu
    },
    {
      path: '/projects/calculator',
      name: 'calculator',
      component: Calculator
    },
    {
      path: '/projects/currency-converter',
      name: 'currency-converter',
      component: CurrencyConverter
    },
    {
      path: '/projects/todo-list',
      name: 'todo-list',
      component: ToDoList
    },
    {
      path: '/projects/password-generator',
      name: 'password-generator',
      component: PasswordGenerator
    }
  ]
})

export default router
