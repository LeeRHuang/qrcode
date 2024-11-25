<template>
  <div class="url-encoder-decoder">
    <h2>URL 编解码</h2>
    <div class="input-section">
      <label for="url-input">输入 URL:</label>
      <input
        id="url-input"
        type="text"
        v-model="url"
        placeholder="请输入 URL"
      />
    </div>
    <button @click="encodeUrl">编码 URL</button>
    <div class="output-section">
      <label for="encoded-url">编码结果:</label>
      <input
        id="encoded-url"
        type="text"
        :value="encodedUrl"
        readonly
        placeholder="编码后的 URL"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const url = ref('');
    const encodedUrl = ref('');

    const encodeUrl = () => {
      encodedUrl.value = encodeURIComponent(url.value);
    };

    return {
      url,
      encodedUrl,
      encodeUrl,
    };
  },
};
</script>

<style scoped>
.url-encoder-decoder {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-section,
.output-section {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #32cd32;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #28a428;
}
</style>
