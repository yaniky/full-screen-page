## 使用
- 添加
```js
yarn add @yaniky/full-page
```

- 使用
```xml
<template>
    <div class="wrap" ref="container">
        <div class="full-page" style="background: red">page1</div>
        <div class="full-page" style="background: green">page2</div>
        <div class="full-page" style="background: blue">page3</div>
        <div class="full-page" style="background: black">page4</div>
        <div class="full-page" style="background: gray">page5</div>
    </div>
</template>
```
```js
import { FullPage } from "@yaniky/full-page";

new FullPage({
  container: this.$refs.container,
  class: "full-page",
  change: function(cur) {
    console.log(cur)
  },
  setPageRatio: true, // is reset page by baseWith and baseHeight
  baseWith: 750,
  baseHeight: 1334
});
```
