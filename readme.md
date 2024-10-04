# quickdev

a cli tool to help speed up dev setup

## Getting Started with Local Development

1. `npm install` (only needs to be done once)
2. `npm run dev`

-   When you edit the source code in src/ and save, nodemon will automatically recompile the changes to javascript and perform linting and styling
-   With nodemon running, you can test the usage of the cli within the root level of the repository (provided you do not have qdev installed as a package from npm itself)

### File Structure

```
quickdev
├── dist (typescript files are compiled to this folder to publish to npm's registry)
│   ├── ...
├── node_modules
│   ├── ...
└── src
    ├── index.ts (entry point for the cli)
    ├── commands (each cli command has a separate file)
    ├── data (json data used in commands)
    └── helpers (helper functions for reused code)
```

## Usage

### Installation

`npm i -g qdev`

### Using the CLI

[[put list of commands here]]
