## Installation

1. Install the package:

```bash
pnpm add -D eslint @moaqz/eslint-config
```

2. Create a `.eslintrc` file in your project's root directory and extend the `@moaqz` configuration:

```json
{
  "extends": "@moaqz",
  "rules": {
    /* ... */
  }
}
```

3. Add the following scripts to your `package.json` to run ESLint:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```