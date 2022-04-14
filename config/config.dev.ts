import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    // dev 环境的请求基础地址
    'process.env.baseUrl': 'http://114.55.66.175:8080',
    'process.env.imageUrl': 'https://vrimg.lijiumedia.com/',
  },
});
