const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue']
const excludeExtensions = [
  'test.js',
  'test.ts',
  'test.jsx',
  'test.tsx',
  'stories.js',
  'stories.ts',
  'stories.jsx',
  'stories.tsx',
  'stories.vue'
]
const typeExcludes = [
  'coverage',
  '.storybook',
  'storybook-static',
  'config',
  'dist',
  'node_modules/**',
  '*.cjs',
  '*.mjs',
  '**/__snapshots__/*',
  '**/__tests__',
  '**/*.test.js+(|x)',
  '**/*.test.ts+(|x)',
  '**/*.mdx',
  '**/*.story.jsx',
  '**/*.story.tsx',
  '**/*.stories.ts+(|x)',
]
module.exports = { extensions, excludeExtensions, typeExcludes }
