# MMT-前端开发命名规范

## 项目命名

- 全部采用小写方式， 以下划线分隔。 例：`mmt-front-end`

## 目录命名

- 参照项目命名规则；

- 有复数结构时，要采用复数命名法

  例：`scripts`，`styles`，`images`，`data_models`

- ==vue==的项目中，components下的组件目录名，使用大驼峰命名

  例：`LeftBar`

## JS文件命名

- 参照项目命名规则。

  例：`account_model.js`

## CSS, SCSS文件命名

- 参照项目命名规则。

  例：`retina_sprites.css`



## Vue 规范

### 1. 代码结构

用不到的可以省略不写

```html
<template>
  <div id="my-component">
    <DemoComponent />
  </div>
</template>

<script>
import DemoComponent from '../components/DemoComponent'

export default {
  name: 'MyComponent',
  components: {
    DemoComponent
  },
  mixins: [],
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {}
  created () {},
  mounted () {},
  destroyed () {},
  methods: {},
}
</script>

<style lang="scss" scoped>
#my-component {
}
</style>
```

### 2. 语法：

- 缩进使用 tab（2 个空格）；
- 嵌套的节点应该缩进；
- 在属性上，使用双引号，不要使用单引号；
- 属性名全小写，用中划线（-）做分隔符；
- 要在自动闭合标签结尾处使用斜线；

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company_logo.png" alt="Company" />

    <!-- 属性名全小写，用中划线（-）做分隔符 -->
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
复制代码
```

### 3. 减少标签数量

在编写代码时，需要尽量避免多余的父节点；

```html
<!-- bad -->
<span class="avatar">
  <img src="..." />
</span>

<!-- good -->
<img class="avatar" src="..." />
```

### 4. 组件命名

**和父组件紧密耦合的子组件应该以父组件名作为前缀命名。**  因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

```html
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```

### 5. router命名

**Vue Router Path 命名采用 kebab-case 格式。** `/user_info`）或 `/userInfo`的单词会被当成一个单词，搜索引擎无法区分语义。

```javascript
{
  path: '/user-info', // 能解析成 user info
  name: 'UserInfo',
  component: UserInfo,
  meta: {
    title: ' - 用户',
    desc: ''
  }
}
```

### 6. 函数命名

- 命名方法：camelCase
- 命名规范：统一使用动词或者动词 + 名词形式

```javascript
// 1、普通情况下，使用动词 + 名词形式
// bad
go、nextPage、show、open、login

// good
jumpPage、openCarInfoDialog

// 2、请求数据方法，以 data 结尾
// bad
takeData、confirmData、getList、postForm

// good
getListData、postFormData

// 3、单个动词的情况
init、refresh、clear
```

| 动词 | 含义                         | 返回值                                                  |
| ---- | ---------------------------- | ------------------------------------------------------- |
| can  | 判断是否可执行某个动作 (权 ) | 函数返回一个布尔值。true：可执行；false：不可执行；     |
| has  | 判断是否含有某个值           | 函数返回一个布尔值。true：含有此值；false：不含有此值； |
| is   | 判断是否为某个值             | 函数返回一个布尔值。true：为某个值；false：不为某个值； |
| get  | 获取某个值                   | 函数返回一个非布尔值                                    |
| set  | 设置某个值                   | 无返回值、返回是否设置成功或者返回链式对象              |

### 7. 变量命名

- 标准变量采用==驼峰式命名==
- 常量全大写，用下划线连接
- 构造函数，大写第一个字母

```js
var thisIsMyName;

var MAX_COUNT = 10;

function Person(name) {
  this.name = name;
}
```

### 8. 变量声明

一个函数作用域中所有的变量声明尽量提到函数首部。如果可以使用 let 和 const 的，要使用 let 和 const。

```js
function doSomethingWithItems(items) {
  let value = 10,
  // other code
}
```

### 9. undefined

永远不要直接使用 undefined 进行变量判断；

使用 typeof 和字符串'undefined'对变量进行判断。

```js
// not good
if (person === undefined) {
    ...
}

// good
if (typeof person === 'undefined') {
    ...
}
```

### 10. 不允许存在多层嵌套的条件判断和循环（最多三层）

条件判断能使用三目运算符和逻辑运算符解决的，就不要使用条件判断，但是**谨记不要写太长的三目运算符。**

例：

```js
// bad
if (x === 10) {
  return 'valid';
} else {
  return 'invalid';
}

// good
return x === 10 ? 'valid' : 'invalid';

// bad
if (!x) {
  if (!y) {
    x = 1;
  } else {
    x = y;
  }
}

// good
x = x || y || 1;
```

### 11.  指令缩写

- **用 `:` 表示 `v-bind:`**
- **用 `@` 表示 `v-on:`**
- **用 `#` 表示 `v-slot:`**

