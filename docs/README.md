<!-- <img src="icon.png" align="right" /> -->

# @autopack/rpack [](https://github.com/yanppanmichael/@autopack/rpack#readme)

> 📦 基于 rollup 的 React 包基础核心构建工具
> One common construction and package tool for Reactcomponents based on Rollup 📦

## ✨ 特性

- 基于 rollup 的基础核心构建工具
- 支持 react
- 支持自定义banner，可通过指定package中__cusBannerString__字段值修改本工具品牌名称

## 🚀 快速开始

### 安装

```bash
npm i -D @autopack/rpack # 或 yarn add -D @autopack/rpack
```

### 使用

**第一步**：package.json 中新增 scripts：

```js
  "scripts": {
    "build": "NODE_ENV=production @autopack/rpack build"
  },
```

**第二步**：命令行进入项目目录，运行：

```bash
npm run build # 或 yarn build
```

@autopack/rpack 默认以 `src/index.js` 为入口，在 `dist` 目录输出 `'umd', 'es', 'cjs', 'iife', 'amd'` 五种格式的构建包（包含未压缩和已压缩版本）。

### 自定义配置

可在项目根目录新建 `autopack.config.js` 自定义 @autopack/rpack 构建配置（或在 `package.json` 中使用 `autopackConfig` 对象配置）。

支持自定义banner，可通过指定package.json文件中__cusBannerString__字段值修改本工具品牌名称。

如需指定打包需要隔离的依赖包，则可配置 formatConfig 属性对象

```js
  "formatConfig": {
    [format]: {
      external: ['xxx']
    }
  },
```

如需整体隔离 dependences 全体依赖包，可指定 isolateDep: true

```js
  "formatConfig": {
    [format]: {
      isolateDep: true,
    }
  },
```

debug 状态会自动开启 rollup-serve，可配置 templateBase 属性指定模版 index.html 所在路径

```js
  "formatConfig": {
    templateBase: 'examples/',
  },
```

batchPackage 布尔状态会自动开启批量打包, 默认批量路径为"./packages"，可配置 input 数组属性指定input路径文件

```js
  "batchPackage": true,
```

[@autopack/rpack 默认配置/配置示例]()

```js
/**
 * @autopack/rpack 默认配置
 */
module.exports = ({ pkg } = {}) => {
  return {
    // 输入
    input: 'src/index.tsx,

    // 输出
    output: {
      // 目录
      directory: 'dist',
      // 包名
      name: /\//.test(pkg.name) ? pkg.name.match(/\/(.+)/)[1] : pkg.name,
      // 格式
      format: ['umd', 'es', 'cjs', 'iife', 'amd'],
      // 顶部注释
      banner: `/*!
* ${pkg.name} with v${pkg.version}
* Author: ${pkg.author}
* Built on ${new Date().toLocaleDateString()}
* Released under the ${
        pkg.license
      } License Copyright (c) 2021-${new Date().getFullYear()}
*/`
    },
    formatConfig: {
      umd: {
        // 打包屏蔽的外部模块
        external: ['lodash', 'moment'],
        // 外部pkg.dependences依赖不屏蔽
        isolateDep: false
      },
      es: {
        external: ['lodash', 'moment'],
        // 自动屏蔽全部pkg.dependences依赖
        isolateDep: true
      },
      cjs: {
        external: [],
        isolateDep: false
      },
      iife: {
        external: [],
        isolateDep: false
      },
      amd: {
        external: [],
        isolateDep: false
      }
    },
    skipAlert: true, //重复路径是否提示覆盖并继续构建，默认不提示
    templateBase: 'examples/',
    batchPackage: false, //是否批量打包packages路径下的组件, 默认打包路径, 会覆盖input路径
    replaceMaps: {}
  }
}
```

<br>
<br>
😉😘 如果感觉它对你有帮助，请点一下 <b>⭐️<a href="https://github.com/YanPanMichael/@autopack/rpack.git">Star</a></b> 感谢支持~

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2022-present, YanPan