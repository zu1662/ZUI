# Button 按钮

### 引入

``` javascript
import { Button } from 'zui';

Vue.use(Button);
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`success`、`warning`、`danger`五种类型，默认为`default`

```html
<zui-button type="default">默认按钮</zui-button>
<zui-button type="primary">主要按钮</zui-button>
<zui-button type="success">成功按钮</zui-button>
<zui-button type="warning">警告按钮</zui-button>
<zui-button type="danger">危险按钮</zui-button>
```

### 镂空按钮

通过`hollow`属性将按钮设置为镂空按钮，镂空按钮的文字为按钮颜色，背景为白色。

```html
<zui-button hollow type="primary">镂空按钮</zui-button>
<zui-button hollow type="danger">镂空按钮</zui-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，禁用状态下按钮不可点击

```html
<zui-button disabled type="primary">禁用状态</zui-button>
<zui-button disabled type="danger">禁用状态</zui-button>
```

### 图标按钮

通过`icon`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。
可以只传入要设置的 `图标名称`，此时图标属性为默认；也可以以对象的状态传入，设置 `icon` 的各种属性。

```html
<zui-button icon="search" type="primary" />
<zui-button icon="loader" hollow type="success">按钮</zui-button>
<zui-button icon="https://cn.vuejs.org/images/logo.png" hollow type="danger">按钮</zui-button>
<zui-button :icon="{name: 'information', size: 20, type: 'fill'}" hollow type="success">按钮</zui-button>
```

### 按钮形状

通过`round`设置圆角按钮，通过`circle`设置圆形按钮

```html
<zui-button round type="primary">圆角按钮</zui-button>
<zui-button circle icon="loader" hollow type="success"></zui-button>
```

### 流体按钮

通过 `fluit` 设置按钮宽度自适应

```html
<zui-button fluit type="primary">流体按钮</zui-button>
<zui-button fluit hollow type="primary">流体按钮</zui-button>
```

## API

### Props

| 参数 | 说明 | 类型 |可选值| 默认值 |
|------|------|------|------|------|
| type | 按钮类型 | `String` | `defalut`、`primary`、`success`、`warning`、`danger` | `default` |
| hollow | 是否为镂空按钮 | `Boolean` | - | `false` |
| round | 是否为圆角按钮 | `Boolean` | - | `false` |
| circle | 是否为圆形按钮 | `Boolean` | - | `false` |
| disabled | 是否为禁用按钮 | `Boolean` | - | `false` |
| fluit | 是否为流体按钮 | `Boolean` | - | `false` |
| icon | 设置图标显示，支持所有icon图标。可以只传入 `图标名称`；也可以传入 `图标的属性对象` | `String`、`Object` | - | - |
| native-type | 原生 type 属性 | `String` | `button`、`submit`、`reset` | `button` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击按钮，且按钮状态不为禁用时触发 | event: Event |
