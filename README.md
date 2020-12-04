# Blog Generator

A simple generator for simple blog content, for [elf](ttps://github.com/11in/elf) and [elfin](https://github.com/11in/elfin).

## Usage

Add to your `elf.config.js`:

```js
module.exports = {
    functions: {
        scaffold: {},
        generators: {
            commands: [
                require('@11in/elf-generator-blog'),
            ]
        }
    }
}
```

This module includes a `--categories` option for the generator.
Items passed to this option will be treated as values in an array.