### 安装

```bash
npm i -D @autopack/rpack # 或 yarn add -D @autopack/rpack
```

### 使用

**第一步**：package.json 中新增 scripts：

```js
  "scripts": {
    "build": "NODE_ENV=production rpack build"
  },
```

**第二步**：命令行进入项目目录，运行：

```bash
npm run build # 或 yarn build
```

@autopack/rpack 默认以 `src/index.tsx` 为入口，在 `dist` 目录输出 `'umd', 'es', 'cjs', 'iife', 'amd'` 五种格式的构建包（包含未压缩和已压缩版本）。