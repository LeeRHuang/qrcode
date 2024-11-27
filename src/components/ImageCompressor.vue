<template>
  <div class="image-compressor">
    <h2>图片压缩</h2>
    <div class="container">
      <div
        class="upload-area"
        @dragover.prevent
        @drop.prevent="handleDrop"
      >
        <input type="file" @change="handleFileSelect" accept="image/*" />
        <p>拖入图片或点击选择文件</p>
      </div>
      <div v-if="compressedImageUrl" class="output-area">
        <img :src="compressedImageUrl" alt="Compressed Image" />
        <a :href="compressedImageUrl" download="compressed-image.jpg">下载压缩后的图片</a>
      </div>
    </div>
  </div>
</template>

<script>
import imageCompression from 'browser-image-compression';

export default {
  data() {
    return {
      compressedImageUrl: null
    };
  },
  methods: {
    async handleFileSelect(event) {
      const file = event.target.files[0];
      if (file) {
        await this.compressImage(file);
      }
    },
    async handleDrop(event) {
      const file = event.dataTransfer.files[0];
      if (file) {
        await this.compressImage(file);
      }
    },
    async compressImage(file) {
      try {
        const options = {
          maxSizeMB: 1, // Maximum size in MB
          maxWidthOrHeight: 1920, // Max width or height
          useWebWorker: true // Use web worker for faster compression
        };
        const compressedFile = await imageCompression(file, options);
        this.compressedImageUrl = URL.createObjectURL(compressedFile);
      } catch (error) {
        console.error('Image compression error:', error);
      }
    }
  }
};
</script>

<style scoped>
.image-compressor {
  text-align: center;
  margin: 20px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.upload-area {
  border: 2px dashed #ccc;
  padding: 20px;
  margin-right: 20px;
  cursor: pointer;
  flex: 1;
}

.output-area {
  flex: 1;
  text-align: center;
}

.output-area img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.download-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}
</style>
