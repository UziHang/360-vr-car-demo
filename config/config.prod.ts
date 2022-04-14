import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    // dev 环境的请求基础地址
    'process.env.baseUrl': 'https://vr.lijiumedia.com',
    'process.env.imageUrl': 'https://vrimg.lijiumedia.com/',
  },
});
