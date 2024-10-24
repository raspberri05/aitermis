---
sidebar_position: 1
---

# Introduction

## Installation

```bash
pip install aitermis
```

## Upgrading to the latest version

```bash
pip install aitermis -U
```
## Binaries

You can find downloadable binaries for aitermis on our [PyPi project page](https://pypi.org/project/aitermis/)

## Basic usage example

### Input

```bash
a 'create new next.js app'
```

### Output

```bash
Do you want to execute the command 'npx create-next-app'? (y/n): y
```

In this example, when you ask aitermis to find the command to create a new Next.js app, it finds the command, then asks if you want to execute it. If yes, it will execute the command, opening the Next.js project creation cli.
