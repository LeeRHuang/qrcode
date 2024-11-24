<script setup lang="ts">
import { ref } from 'vue'
import QRCode from 'qrcode'

// Define a ref to hold the input text
const inputText = ref('')

// Define a ref to hold the generated QR code data URL
const qrCodeDataUrl = ref('')

// Define a ref to hold the history of generated QR codes
const qrCodeHistory = ref<{ text: string, dataUrl: string }[]>([])

// Function to generate QR code
const generateQRCode = async () => {
  try {
    const dataUrl = await QRCode.toDataURL(inputText.value)
    qrCodeDataUrl.value = dataUrl
    // Add the generated QR code to the history
    qrCodeHistory.value.push({ text: inputText.value, dataUrl })
  } catch (error) {
    console.error('Failed to generate QR code:', error)
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-6 flex flex-col items-center">
      <textarea v-model="inputText" placeholder="请输入文本" class="w-1/2 h-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"></textarea>
      <button @click="generateQRCode" class="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition mb-4">生成</button>
      <div v-if="qrCodeDataUrl" class="text-center">
        <img :src="qrCodeDataUrl" alt="Generated QR Code" class="mx-auto mb-2" />
        <a :href="qrCodeDataUrl" download="qrcode.png" class="text-blue-500 hover:underline">Download QR Code</a>
      </div>
    </div>

    <!-- QR Code History -->
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 class="text-xl font-bold mb-4 text-center">QR Code History</h2>
      <ul>
        <li v-for="(item, index) in qrCodeHistory" :key="index" class="mb-4">
          <div class="flex items-center justify-between">
            <span class="text-gray-700">{{ item.text }}</span>
            <img :src="item.dataUrl" alt="QR Code" class="w-16 h-16 ml-4" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* No additional styles needed as Tailwind CSS handles styling */
</style>
