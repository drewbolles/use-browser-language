# use-browser-language

React hook to read the users' language from their browser.

Utilizes the [detect-browser-language](https://github.com/bukinoshita/detect-browser-language) package.

## Install

```
npm i use-browser-language
```

## Use

```js
import useBrowserLanguage from "use-browser-language";

function MyComponent() {
  const language = useBrowserLanguage();
  // ....
}
```
