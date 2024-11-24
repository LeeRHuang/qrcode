<script setup lang="ts">
import { ref } from 'vue'
import QRCode from 'qrcode'

// Define a ref to hold the input text
const inputText = ref('')

// Define a ref to hold the generated QR code data URL
const qrCodeDataUrl = ref('')

// Function to generate QR code
const generateQRCode = async () => {
  try {
    qrCodeDataUrl.value = await QRCode.toDataURL(inputText.value)
  } catch (error) {
    console.error('Failed to generate QR code:', error)
  }
}
</script>

<template>
  <div>
    <div>
      <input type="text" v-model="inputText" placeholder="Enter text" />
      <button @click="generateQRCode">Generate QR Code</button>
    </div>
    <div v-if="qrCodeDataUrl">
      <img :src="qrCodeDataUrl" alt="Generated QR Code" />
      <a :href="qrCodeDataUrl" download="qrcode.png">Download QR Code</a>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

input[type="text"] {
  margin-right: 1em;
  padding: 0.5em;
  font-size: 1em;
}

button {
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
}

img {
  margin-top: 1em;
  max-width: 100%;
  height: auto;
}
</style>
