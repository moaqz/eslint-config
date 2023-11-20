## Usage

This package exports a [flat ESLint configuration](https://eslint.org/docs/latest/use/configure/configuration-files-new).

### Install

```bash
pnpm add -D eslint @moaqz/eslint-config
```

### Create config file

```js
// eslint.config.js
import moaqz from "@moaqz/eslint-config";

export default [moaqz];
```

### Add script for package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
