<template>
  <div class="password-generator">
    <h1>Generador de Contraseñas</h1>

    <div class="password-display">
      <input type="text" :value="generatedPassword" readonly ref="passwordInput" />
      <button @click="copyToClipboard" class="copy-btn" :title="copyButtonText">
        {{ copied ? '✓' : '📋' }}
      </button>
    </div>

    <div class="password-length">
      <label>Longitud: {{ passwordLength }}</label>
      <input type="range" v-model="passwordLength" min="6" max="30" @input="generatePassword" />
    </div>

    <div class="settings">
      <div class="setting">
        <input
          type="checkbox"
          id="uppercase"
          v-model="includeUppercase"
          @change="generatePassword"
        />
        <label for="uppercase">Incluir Mayúsculas (A-Z)</label>
      </div>

      <div class="setting">
        <input
          type="checkbox"
          id="lowercase"
          v-model="includeLowercase"
          @change="generatePassword"
        />
        <label for="lowercase">Incluir Minúsculas (a-z)</label>
      </div>

      <div class="setting">
        <input type="checkbox" id="numbers" v-model="includeNumbers" @change="generatePassword" />
        <label for="numbers">Incluir Números (0-9)</label>
      </div>

      <div class="setting">
        <input type="checkbox" id="symbols" v-model="includeSymbols" @change="generatePassword" />
        <label for="symbols">Incluir Símbolos (@#$%)</label>
      </div>
    </div>

    <div class="strength-meter">
      <div class="strength-label">Fortaleza:</div>
      <div class="strength-bars">
        <div
          v-for="(bar, index) in 4"
          :key="index"
          class="strength-bar"
          :class="{ active: index < passwordStrength }"
        ></div>
      </div>
      <div class="strength-text">{{ strengthText }}</div>
    </div>

    <button class="generate-btn" @click="generatePassword">Generar Contraseña</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const passwordLength = ref(12)
const includeUppercase = ref(true)
const includeLowercase = ref(true)
const includeNumbers = ref(true)
const includeSymbols = ref(false)
const generatedPassword = ref('')
const copied = ref(false)
const copyButtonText = ref('Copiar al portapapeles')
const passwordInput = ref(null)

const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
const numberChars = '0123456789'
const symbolChars = '!@#$%^&*()_-+=<>?/'

const generatePassword = () => {
  let charset = ''
  let generatedPwd = ''

  if (
    !includeUppercase.value &&
    !includeLowercase.value &&
    !includeNumbers.value &&
    !includeSymbols.value
  ) {
    includeLowercase.value = true
  }

  if (includeUppercase.value) charset += upperCaseChars
  if (includeLowercase.value) charset += lowerCaseChars
  if (includeNumbers.value) charset += numberChars
  if (includeSymbols.value) charset += symbolChars

  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    generatedPwd += charset[randomIndex]
  }

  generatedPassword.value = generatedPwd
  copied.value = false
  copyButtonText.value = 'Copiar al portapapeles'
}

const copyToClipboard = () => {
  if (passwordInput.value) {
    passwordInput.value.select()
    document.execCommand('copy')
    copied.value = true
    copyButtonText.value = '¡Copiado!'

    setTimeout(() => {
      copied.value = false
      copyButtonText.value = 'Copiar al portapapeles'
    }, 2000)
  }
}

const passwordStrength = computed(() => {
  let strength = 0

  if (passwordLength.value >= 8) strength += 1
  if (passwordLength.value >= 12) strength += 1

  let varietyCount = 0
  if (includeUppercase.value) varietyCount++
  if (includeLowercase.value) varietyCount++
  if (includeNumbers.value) varietyCount++
  if (includeSymbols.value) varietyCount++

  if (varietyCount >= 3) strength += 1
  if (varietyCount >= 4) strength += 1

  return strength
})

const strengthText = computed(() => {
  switch (passwordStrength.value) {
    case 0:
      return 'Muy débil'
    case 1:
      return 'Débil'
    case 2:
      return 'Media'
    case 3:
      return 'Fuerte'
    case 4:
      return 'Muy fuerte'
    default:
      return ''
  }
})

onMounted(() => {
  generatePassword()
})
</script>

<style scoped>
.password-generator {
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

.password-display {
  display: flex;
  margin-bottom: 20px;
}

.password-display input {
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
  font-family: monospace;
  background-color: #f9f9f9;
}

.copy-btn {
  padding: 0 15px;
  background-color: #b568e1;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;
}

.copy-btn:hover {
  background-color: #400364;
}

.password-length {
  margin-bottom: 20px;
}

.password-length label {
  display: block;
  margin-bottom: 10px;
}

.password-length input {
  width: 100%;
  cursor: pointer;
}

.settings {
  margin-bottom: 20px;
}

.setting {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.setting input[type='checkbox'] {
  margin-right: 10px;
  cursor: pointer;
}

.strength-meter {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.strength-label {
  margin-right: 10px;
  font-weight: bold;
}

.strength-bars {
  display: flex;
  gap: 5px;
  margin-right: 10px;
}

.strength-bar {
  height: 10px;
  width: 25px;
  background-color: #ddd;
  border-radius: 2px;
}

.strength-bar.active:nth-child(1) {
  background-color: #ff1100;
}

.strength-bar.active:nth-child(2) {
  background-color: #ff9900;
}

.strength-bar.active:nth-child(3) {
  background-color: #ffff00;
}

.strength-bar.active:nth-child(4) {
  background-color: #4caf50;
}

.strength-text {
  font-weight: bold;
}

.generate-btn {
  width: 100%;
  padding: 12px;
  background-color: #b568e1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  font-weight: bold;
}

.generate-btn:hover {
  background-color: #4f0d76;
}
</style>
