[![npm (scoped)](https://img.shields.io/npm/v/@lirx/utils.svg)](https://www.npmjs.com/package/@lirx/utils)
![npm](https://img.shields.io/npm/dm/@lirx/utils.svg)
![NPM](https://img.shields.io/npm/l/@lirx/utils.svg)
![npm type definitions](https://img.shields.io/npm/types/@lirx/utils.svg)

## lirx/utils


[SOME EXAMPLES HERE](examples/README.md)


## 📦 Installation

```bash
yarn add @lirx/utils
# or
npm install @lirx/utils --save
```

This library supports:

- **common-js** (require): transpiled as es2015, with .cjs extension, useful for old nodejs versions
- **module** (esm import): transpiled as esnext, with .mjs extension (requires node resolution for external packages)

In a **node** environment the library works immediately (no extra tooling required),
however, in a **browser** environment, you'll probably need to resolve external imports thought a bundler like
[snowpack](https://www.snowpack.dev/),
[rollup](https://rollupjs.org/guide/en/),
[webpack](https://webpack.js.org/),
etc...
or directly using [skypack](https://www.skypack.dev/):
[https://cdn.skypack.dev/@lirx/utils](https://cdn.skypack.dev/@lirx/utils)
