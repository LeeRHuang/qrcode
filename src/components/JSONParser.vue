<template>
  <div class="json-parser">
    <header class="header">
      <h1>JSON 解析器</h1>
      <p>输入 JSON 字符串并查看格式化结果</p>
    </header>
    <div class="json-container">
      <div class="input-section">
        <textarea
          v-model="jsonInput"
          placeholder="输入 JSON 字符串"
          @input="formatJson"
        ></textarea>
        <div v-if="error" class="error">{{ error }}</div>
      </div>
      <div class="output-section">
        <div class="json-output">
          <vue-json-pretty
            v-if="parsedJson"
            :data="parsedJson"
            :deep="1"
            :showLineNumber="false"
            :expandIcon="expandIcon"
            :collapseIcon="collapseIcon"
            :keyStyle="keyStyle"
            :valueStyle="valueStyle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

export default {
  components: {
    VueJsonPretty
  },
  data() {
    return {
      jsonInput: '',
      parsedJson: null,
      error: '',
      expandIcon: '<span style="color: lightcoral;">+</span>', // Collapsed state
      collapseIcon: '<span style="color: teal;">-</span>', // Expanded state
      keyStyle: 'color: darkviolet;',
      valueStyle: 'color: green;'
    };
  },
  methods: {
    formatJson() {
      if (!this.jsonInput.trim()) {
        this.parsedJson = null;
        this.error = '';
        return;
      }
      try {
        this.error = '';
        this.parsedJson = JSON.parse(this.jsonInput);
      } catch (e) {
        this.error = '输入的字符串不是有效的 JSON 格式';
        this.parsedJson = null;
      }
    }
  }
};
</script>

<style scoped>
.json-parser {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.json-container {
  display: flex;
  width: 100%;
  max-width: 800px;
}

.input-section,
.output-section {
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
}

textarea {
  width: 100%;
  height: 400px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #e8f0fe;
}

.json-output {
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 10px;
  box-sizing: border-box;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
