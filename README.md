## 使用
- 添加
```js
yarn add @yaniky/full-page
```

- 使用
```js
import { FullPage } from "@yaniky/full-page";

new FullPage({
  container: this.$refs.container,
  class: "full-page",
  change: function(cur) {
    console.log(cur)
  }
});
```
