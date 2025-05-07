<template>
  <h1>Simple Calculator</h1>
  <div class="calculator">
    <div class="display">{{ currentValue || '0' }}</div>
    <div class="buttons">
      <button @click="appendNumber('7')">7</button>
      <button @click="appendNumber('8')">8</button>
      <button @click="appendNumber('9')">9</button>
      <button @click="setOperation('/')">/</button>
      <button @click="appendNumber('4')">4</button>
      <button @click="appendNumber('5')">5</button>
      <button @click="appendNumber('6')">6</button>
      <button @click="setOperation('*')">*</button>
      <button @click="appendNumber('1')">1</button>
      <button @click="appendNumber('2')">2</button>
      <button @click="appendNumber('3')">3</button>
      <button @click="setOperation('-')">-</button>
      <button @click="appendNumber('0')">0</button>
      <button @click="appendDecimal()">.</button>
      <button @click="calculate()">=</button>
      <button @click="setOperation('+')">+</button>
      <button @click="clear()" class="clear">C</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentValue = ref('')
const previousValue = ref('')
const operation = ref('')
const resetInput = ref(false)

const appendNumber = (number: string) => {
  if (resetInput.value) {
    currentValue.value = ''
    resetInput.value = false
  }
  currentValue.value += number
}

const appendDecimal = () => {
  if (resetInput.value) {
    currentValue.value = ''
    resetInput.value = false
  }
  if (currentValue.value.includes('.')) return
  currentValue.value += '.'
}

const clear = () => {
  currentValue.value = ''
  previousValue.value = ''
  operation.value = ''
}

const setOperation = (op: string) => {
  if (currentValue.value === '') return

  if (previousValue.value !== '') {
    calculate()
  }

  operation.value = op
  previousValue.value = currentValue.value
  resetInput.value = true
}

const calculate = () => {
  let result = 0
  const prev = parseFloat(previousValue.value)
  const current = parseFloat(currentValue.value)

  if (isNaN(prev) || isNaN(current)) return

  switch (operation.value) {
    case '+':
      result = prev + current
      break
    case '-':
      result = prev - current
      break
    case '*':
      result = prev * current
      break
    case '/':
      if (current !== 0) {
        result = prev / current
      } else {
        currentValue.value = 'Error'
        previousValue.value = ''
        operation.value = ''
        return
      }
      break
    default:
      return
  }

  currentValue.value = result.toString()
  previousValue.value = ''
  operation.value = ''
}
</script>

<style scoped>
.calculator {
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: #f4f4f4;
}

.display {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
  text-align: right;
  font-size: 24px;
  height: 40px;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

button {
  padding: 15px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #eaeaea;
}

.clear {
  grid-column: span 4;
  background-color: #ff9999;
}

.clear:hover {
  background-color: #ff6666;
}

h1 {
  text-align: center;
  color: #6e0ba7;
  margin-bottom: 30px;
}
</style>
