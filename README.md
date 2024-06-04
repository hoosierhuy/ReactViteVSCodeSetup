This is a starter template to setup React with ViteJS in VS Code.
YouTube video: https://www.youtube.com/watch?v=p0akKP9UasQ

# As of June 4th, 2024, please install NPM Packages with `npm i --legacy-peer-deps` because with ESLint 9.x, there was breaking changes and Vite packages needs to catch all.#

One thing I did not cover in the video is the `eslint-plugin-react-hooks` package, which enforces the rules of Hooks, (https://react.dev/warnings/invalid-hook-call-warning). This package is implemented in the `eslintrc.json` file, in the "extends" array, as `"plugin:react-hooks/recommended"`. You can read more about it here: https://www.npmjs.com/package/eslint-plugin-react-hooks.

I have removed the caret `^` in front of each NPM package so that you will install all known working packages.

I have also provided a VS Code `VSCODE_Settings_Example.json` file for your convinience, you can cherry pick whatever rule/rules that works for you.
