<template>
  <div class="currency-converter">
    <h1>Conversor de Monedas</h1>
    <div class="converter-container">
      <div class="input-group">
        <input type="number" v-model="amount" @input="convert" placeholder="Cantidad" />
        <select v-model="fromCurrency" @change="convert">
          <option v-for="currency in currencies" :key="currency.code" :value="currency.code">
            {{ currency.name }} ({{ currency.code }})
          </option>
        </select>
      </div>

      <div class="swap-button">
        <button @click="swapCurrencies">⇄</button>
      </div>

      <div class="input-group">
        <input type="number" v-model="result" disabled />
        <select v-model="toCurrency" @change="convert">
          <option v-for="currency in currencies" :key="currency.code" :value="currency.code">
            {{ currency.name }} ({{ currency.code }})
          </option>
        </select>
      </div>
    </div>

    <div class="exchange-rate">
      <p v-if="amount && result">{{ amount }} {{ fromCurrency }} = {{ result }} {{ toCurrency }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const amount = ref(1)
const result = ref(0)
const fromCurrency = ref('USD')
const toCurrency = ref('EUR')

const exchangeRates = {
  USD: {
    EUR: 0.85,
    GBP: 0.74,
    JPY: 110.14,
    CAD: 1.25,
    AUD: 1.35,
    CNY: 6.45,
  },
  EUR: {
    USD: 1.18,
    GBP: 0.85,
    JPY: 130.0,
    CAD: 1.48,
    AUD: 1.6,
    CNY: 7.6,
  },
  GBP: {
    USD: 1.35,
    EUR: 1.18,
    JPY: 152.0,
    CAD: 1.73,
    AUD: 1.87,
    CNY: 8.9,
  },
  JPY: {
    USD: 0.0091,
    EUR: 0.0077,
    GBP: 0.0066,
    CAD: 0.011,
    AUD: 0.012,
    CNY: 0.058,
  },
  CAD: {
    USD: 0.8,
    EUR: 0.68,
    GBP: 0.58,
    JPY: 88.0,
    AUD: 1.08,
    CNY: 5.15,
  },
  AUD: {
    USD: 0.74,
    EUR: 0.63,
    GBP: 0.53,
    JPY: 81.0,
    CAD: 0.93,
    CNY: 4.75,
  },
  CNY: {
    USD: 0.155,
    EUR: 0.132,
    GBP: 0.112,
    JPY: 17.0,
    CAD: 0.194,
    AUD: 0.21,
  },
}

const currencies = ref([
  { code: 'USD', name: 'Dólar estadounidense' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'Libra esterlina' },
  { code: 'JPY', name: 'Yen japonés' },
  { code: 'CAD', name: 'Dólar canadiense' },
  { code: 'AUD', name: 'Dólar australiano' },
  { code: 'CNY', name: 'Yuan chino' },
])

const convert = () => {
  if (!amount.value) {
    result.value = 0
    return
  }

  if (fromCurrency.value === toCurrency.value) {
    result.value = amount.value
    return
  }

  const exchangeRate = exchangeRates[fromCurrency.value][toCurrency.value]
  result.value = (amount.value * exchangeRate).toFixed(2)
}

const swapCurrencies = () => {
  const temp = fromCurrency.value
  fromCurrency.value = toCurrency.value
  toCurrency.value = temp
  convert()
}

onMounted(() => {
  convert()
})
</script>

<style scoped>
.currency-converter {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.converter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;
}

.input-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
select {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

input:focus,
select:focus {
  outline: none;
  border-color: #b568e1;
}

.swap-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

.swap-button button {
  background-color: #b568e1;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.swap-button button:hover {
  background-color: #511f6e;
}

.exchange-rate {
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

h1 {
  text-align: center;
  color: #6e0ba7;
  margin-bottom: 30px;
}
</style>
