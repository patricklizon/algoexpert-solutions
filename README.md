# algoexpert.io &middot; ![test workflow](https://github.com/patricklizon/algoexpert-solutions/actions/workflows/test.yml/badge.svg)

My solutions to algorithmic problems.

## Table of content

* [Prerequisites](#prerequisites)
* [Setup](#setup)
* [Scripts](#scripts)
* [Stack](#stack)

## Prerequisites

* [Node](https://nodejs.org/en/) - version specified in [.nvmrc](/.nvmrc) file.
* [npm](https://www.npmjs.com/) - usually comes with node.

_It's recommended to use node version manger (ie. [fnm](https://github.com/Schniz/fnm)), for easier switching between different projects._

## Setup

```sh
# Install dependencies
npm ci

# Start tests in watch mode
npm run test
```

## Scripts

Summary of defined npm scripts.

### Test

| Script          | Description                   |
| --------------- | ----------------------------- |
| `test:run`      | run tests                     |
| `test`          | run tests in watch mode       |
| `test:types`    | validates TS types            |
| `test:format`   | validates code formatting     |
| `test:lint`     | validates linting rules       |

### Fix

| Script       | Description                |
| ------------ | -------------------------- |
| `fix:format` | tries to fix formatting    |
| `fix:lint`   | tries to fix linter issues |

## Stack

* [TypeScript](https://www.typescriptlang.org/) - typed language build on top of JavaScript
