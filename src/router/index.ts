import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import QRCodeGenerator from '../components/QRCodeGenerator.vue';
import URLEncoderDecoder from '../components/URLEncoderDecoder.vue';
import JSONParser from '../components/JSONParser.vue';
import ImageCompressor from '../components/ImageCompressor.vue';
import DeviceInfo from '../components/DeviceInfo.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/qrcode', component: QRCodeGenerator },
  { path: '/url', component: URLEncoderDecoder },
  { path: '/json', component: JSONParser },
  { path: '/image', component: ImageCompressor },
  { path: '/device', component: DeviceInfo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
