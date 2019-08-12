# Icon 图标

> 此图标库使用 Remix icon内的图标。[项目地址](https://github.com/Remix-Design/remixicon)

### 引入

```javascript
import { Icon } from 'zui'
Vue.use(Icon)
```

如果你已经全局项目引用，则可以直接使用`Icon`组件

### 代码演示

- 可以直接传入需要展示的图标名称 `name`。同时，可以设置图标的字体大小和样式。

```javascript
// 填充样式图标
<Icon name="rocket" :size="30" type="fill"></Icon>

// 线性样式图标
<Icon name="rocket" :size="30" type="line"></Icon>
```

- 你可以在 `name` 属性内传入 图片链接 。此时图标以传入的图片进行展示。

```javascript
<Icon name="../../../../docs/assets/logo.png" :size="30"></Icon>
```

- 此外图标支持传入 `info` 属性进行徽章信息展示。默认无背景颜色，可以传入 `primary`、 `success`、 `warning` 和 `danger` 进行背景颜色设置。

```javascript
// 默认样式 徽章 展示
<Icon name="instagram" type="fill" :size="30" info="10"></Icon>

// 设置徽章背景颜色
<Icon name="instagram" type="fill" :size="30" info="10" infoType="warning"></Icon>
```

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
| name | 图标名称。当传入 图片链接 ，则以图片形式展示图标。 | `String` | - |
| size | 图标大小，默认为 `20px` | `Number` | 20 |
| type | 图标类型。支持样式：`fill`、`line` | `String` | line |
| info | 图标徽章 | `String` | - |
| infoType | 徽章背景样式。可用样式有：`primary`、`success`、`warning`、`danger` | `String` | - |

### Event

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击图标时触发 | - |
