# React Scaffold

[![npm version](https://badge.fury.io/js/rscaffold.svg)](https://badge.fury.io/js/rscaffold)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Asciinema Demo](https://asciinema.org/a/5wDXqgoMHSj9aG7h5vB4DWl1S)

A slighlty opinionated React Scaffold Tool by Mike3run because we all hate repetition...

```bash
$ npm install rscaffold plop
```

Now in your `plopfile.js`

```js
module.exports = plop => {
  plop.load('rscaffold')
}
```

In your package.json add this to your scripts:

```json
"plop": "plop"
```

and finally in your terminal:

```bash
$ npm run plop
```

No need for global bamboozles.

## Available Commands

* component
* container

## Protip

Add a plugin to your terminal to run local npm bin executables like a boss:

I recommend [`add-local-binaries-to-path`](https://www.npmjs.com/package/add-local-binaries-to-path)

```bash
$ npm install -g add-local-binaries-to-path
```

That's it, never worry about local binaries again.

```sh
$ plop
```

Dab dab dab

2017 [Miguel Palau 🐟](https://www.twitter.com/mpalau) Made with 💖 and hate for boilerplate 💀
