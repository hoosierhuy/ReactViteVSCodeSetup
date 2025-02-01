# This is a starter template to setup React with ViteJS in VS Code

## Adjust to fit your needs as necessary

## Updated on January 26th, 2025

With ESLint 9+ we can no longer use the .eslintrc.json file format, we have to use the `eslint.config.mjs` or the TypeScript equivalent if you are using TypeScript.
Documentation for migrating to ESLint 9+: <https://eslint.org/docs/latest/use/configure/migration-guide#start-using-flat-config-files>

Here is a link to useful ESLint CLI flags for your scripts: <https://eslint.org/docs/latest/use/command-line-interface>

YouTube video: https://www.youtube.com/watch?v=p0akKP9UasQ

One thing I did not cover in the video is the `eslint-plugin-react-hooks` package, which enforces the rules of Hooks, (https://react.dev/warnings/invalid-hook-call-warning). This package is implemented in the `eslintrc.json` file, in the "extends" array, as `"plugin:react-hooks/recommended"`. You can read more about it here: https://www.npmjs.com/package/eslint-plugin-react-hooks.

I have removed the caret `^` in front of each NPM package so that you will install all known working packages.

I have also provided a VS Code `VSCODE_Settings_Example.json` file for your convenience, you can cherry pick whatever rule/rules that works for you.

If you would like to donate to my coffee fund: https://www.buymeacoffee.com/huy_nguyen_usa
