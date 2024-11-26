<template>
  <div>
    <h2>JSON 解析</h2>
    <textarea
      v-model="jsonInput"
      placeholder="输入 JSON 字符串"
      :style="{ width: '100%', height: '200px' }"
    ></textarea>
    <button @click="formatJson">格式化 JSON</button>
    <div v-if="error" style="color: red;">{{ error }}</div>
    <pre v-if="formattedJson">{{ formattedJson }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonInput: '',
      formattedJson: '',
      error: ''
    };
  },
  methods: {
    formatJson() {
      try {
        this.error = '';
        const parsedJson = JSON.parse(this.jsonInput);
        this.formattedJson = JSON.stringify(parsedJson, null, 2);
      } catch (e) {
        this.error = '输入的字符串不是有效的 JSON 格式';
        this.formattedJson = '';
      }
    }
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
}
</style>
