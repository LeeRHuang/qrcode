<template>
  <div id="app">
    <nav>
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        :to="tab.path"
        :class="{ active: currentPath === tab.path }"
        @click="setActiveTab(tab.path)"
      >
        {{ tab.label }}
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const currentPath = ref(route.path);

    const tabs = [
      { path: '/qrcode', label: '二维码' },
      { path: '/url', label: 'URL 编解码' },
      { path: '/json', label: 'JSON 解析' },
      { path: '/image', label: '图片压缩' },
      { path: '/device', label: '设备型号' },
    ];

    const setActiveTab = (path) => {
      currentPath.value = path;
    };

    onMounted(() => {
      setActiveTab(route.path);
    });

    return {
      tabs,
      currentPath,
      setActiveTab,
    };
  },
};
</script>

<style scoped>
#app {
  background-color: #f0f0f0; /* 浅灰色背景 */
  min-height: 100vh;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff; /* 白色背景 */
  height: 60px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

router-link {
  text-decoration: none;
  color: #333;
  padding: 10px 20px;
  transition: color 0.3s;
}

router-link.active {
  color: #32cd32; /* 浅绿色高亮 */
  font-weight: bold;
}

router-link:hover {
  color: #32cd32; /* 浅绿色悬停效果 */
}
</style>
