<template>
  <div class="url-encoder-decoder">
    <h2>URL 编/解码</h2>
    <div class="input-section">
      <label for="url-input">输入 URL:</label>
      <input
        id="url-input"
        type="text"
        v-model="url"
        placeholder="请输入 URL"
      />
    </div>
    <div class="options-section">
      <label for="encoding-select">选择编码格式:</label>
      <select id="encoding-select" v-model="encoding">
        <option value="utf-8">UTF-8</option>
        <option value="gb2312">GB2312</option>
      </select>
    </div>
    <div class="button-section">
      <button @click="encodeUrl">编码 URL</button>
      <button @click="decodeUrl">解码 URL</button>
      <button @click="clear">清除</button>
    </div>
    <div class="output-section">
      <label for="result-url">结果:</label>
      <input
        id="result-url"
        type="text"
        :value="resultUrl"
        readonly
        placeholder="结果 URL"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const url = ref('');
    const resultUrl = ref('');
    const encoding = ref('utf-8');

    const encodeUrl = () => {
      if (encoding.value === 'utf-8') {
        resultUrl.value = encodeURIComponent(url.value);
      } else if (encoding.value === 'gb2312') {
        // GB2312 encoding logic (Note: JavaScript does not natively support GB2312 encoding)
        resultUrl.value = encodeURIComponent(url.value); // Placeholder for demonstration
      }
    };

    const decodeUrl = () => {
      resultUrl.value = decodeURIComponent(url.value);
    };

    const clear = () => {
      url.value = '';
      resultUrl.value = '';
    };

    return {
      url,
      resultUrl,
      encoding,
      encodeUrl,
      decodeUrl,
      clear,
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
.options-section,
.output-section {
  margin-bottom: 20px;
}

.button-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="text"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  flex: 1;
  margin: 0 5px;
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
