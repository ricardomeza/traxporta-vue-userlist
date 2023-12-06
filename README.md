# Traxporta User List

This project enables users to filter the list of users retrieved from the API.

## ⚙️ Project Setup

This project uses the new All-in-one JavaScript runtime [Bun](https://bun.sh/).

```sh
bun install
```

## 🔥 Compile and Hot-Reload for Development

```sh
bun run dev
```

## ✅ Type-Check, Compile and Minify for Production

```sh
bun run build
```

## 🧪 Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
bun run test:unit
```

## 🧪🖼️ Run End-to-End Tests with [Playwright](https://playwright.dev)

### Install browsers for the first run

```sh
bunx playwright install
```

#### When testing on CI, must build the project first

```sh
bun run build
```

#### Runs the end-to-end tests

```sh
bun  run  test:e2e
```

#### Runs the tests only on Chromium

```sh
bun  run  test:e2e  --  --project=chromium
```

#### Runs the tests of a specific file

```sh
bun  run  test:e2e  --  tests/example.test.ts
```

#### Runs the tests in debug mode

```sh
bun  run  test:e2e  --  --debug
```

## 🔦 Lint with [ESLint](https://eslint.org/)

```sh
bun run lint
```
