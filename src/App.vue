<template>
  <div id="app">
    <nav>
      <router-link to="/qrcode">二维码</router-link>
      <router-link to="/url">URL 编解码</router-link>
      <router-link to="/json">JSON 解析</router-link>
      <router-link to="/image">图片压缩</router-link>
      <router-link to="/device">设备型号</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  background-color: #f8f9fa;
  padding: 10px;
}
</style>
