<template>
  <div class="json-parser">
    <h2>JSON 解析</h2>
    <div class="json-container">
      <textarea
        v-model="jsonInput"
        placeholder="输入 JSON 字符串"
        @input="formatJson"
      ></textarea>
      <div class="json-output">
        <vue-json-pretty
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
    <div v-if="error" class="error">{{ error }}</div>
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
      expandIcon: '<span style="color: skyblue;">+</span>',
      collapseIcon: '<span style="color: lightcoral;">-</span>',
      keyStyle: 'color: darkviolet;',
      valueStyle: 'color: green;'
    };
  },
  methods: {
    formatJson() {
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
}

.json-container {
  display: flex;
  width: 100%;
  max-width: 800px;
}

textarea {
  width: 50%;
  height: 400px;
  margin-right: 20px;
  padding: 10px;
  box-sizing: border-box;
}

.json-output {
  width: 50%;
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
