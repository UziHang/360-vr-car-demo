import { defineConfig } from 'umi';
import path from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true, //编译加hash
  dva: {
    immer: true, // 表示是否启用 immer 以方便修改 reducer
    hmr: true, // 表示是否启用 dva model 的热更新
  },
  alias: {
    // 配置别名，对引用路径进行映射。第二步在tsconfig.json文件下面增加对应映射，可以忽略，但是会提示找不到模块,反人类的设计
    components: path.resolve(__dirname, '../src/components/'),
    utils: path.resolve(__dirname, '../src/utils/'),
    assets: path.resolve(__dirname, '../src/assets/'),
  },
  base: '/carVR/',
  publicPath: '/carVR/',
  dynamicImport: {
    //配置打包按需加载
    // loading: '@/components/Loading',
  },

  routes: [{ path: '/', component: '@/pages/index', title: 'VR 看车demo' }],
  fastRefresh: {},
});
