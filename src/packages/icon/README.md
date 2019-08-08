# Icon 图标

> 此图标库使用 Remix icon内的图标。[项目地址](https://github.com/Remix-Design/remixicon)

### 引入

```javascript
import { Icon } from 'zui'
Vue.use(Icon)
```

如果你已经全局项目引用，则可以直接在使用`Icon`组件

### 代码演示

可以直接传入需要展示的图标名称 `name`。同时，可以设置图标的字体大小和样式。

```javascript
<Icon name="rocket" :size="30" type="line"></Icon>
```

> #### TODO
>
> - 支持图片链接传入，设置图标
> - 支持图标徽章显示

### 自定义图标

你可以添加自己的图标，以完善现有图标库。

```javascript
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-classname::before {
  content: '\e626';
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 图标名称 | `String` | - |
| size | 图标大小 | `Number` | 12 |
| type | 图标类型 | `String` | line |

### Event

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击图标时触发 | - |
