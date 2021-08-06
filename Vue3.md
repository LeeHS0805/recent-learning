## Vue3

## 响应式

[Vue3响应式Props

### TS类型与Vue类型

```json
msg: {
      type: String as PropType<string>,
      required: true
    }
```



### 值的修改

vue的props是单向数据流，ts中将不允许你改变该值，但你仍可以利用`Computed`属性

```js
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```

### 类型推断问题

**问题**

在Props声明`requeired：true`时，ts仍会在使用时推断该变量可能为`undefined`

```js
const propsType = {
	age: {
		type: Number,
		required: true
	}
}

export default deineComponent({
	name: 'HelloWorld',
	props: PropsType,
	mounted() {
		this.age // 类型为number || undefined
	}
})
```

**解决办法**

在定义后面添加`as const`

PropsOptions 继承只读类型的ComponentPropsOptions，由于我们将props声明写到外面，ts检测类型时不能像在对象内声明那样将它视为`readOnly`属性，需要我们显式声明

```js
const propsType = {
	age: {
		type: Number,
		required: true
	}
} as const;
```



## h函数

### 使用

```js
const App = defineComponent({
  render() {
        return h("div", { id: "app" }, [
            h("img", { src: img }),
            h(HelloWorld, { msg: "HelloWorld" }),
            createVNode("h1", { class: "hello" }, "HelloWorld")
        ]
        );
  },
});
createApp(App).mount("#app");
```

### 函数定义

其实是`createVnode`的简单封装

```js
export function h(type: any, propsOrChildren?: any, children?: any): VNode {
  const l = arguments.length
  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
      // single vnode without props
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren])
      }
      // props without children
      return createVNode(type, propsOrChildren)
    } else {
      // omit props
      return createVNode(type, null, propsOrChildren)
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2)
    } else if (l === 3 && isVNode(children)) {
      children = [children]
    }
    return createVNode(type, propsOrChildren, children)
  }
}
```



## setup

### return的理解

`const number`放到内外效果是截然不同的。vue每次更新只是重新运行return出去的函数，不会重新执行`setup`，所以放外面的话每次都是引用闭包内的变量，不能实现数值增长

![image-20210802110155060](/Users/leehs/Library/Application Support/typora-user-images/image-20210802110155060.png) 



## jsx

### 安装

```
 yarn add @vue/babel-plugin-jsx
```

### 概览

<img src="/Users/leehs/Library/Application Support/typora-user-images/image-20210802154833154.png" alt="image-20210802154833154" style="zoom:150%;" /> 



## Json-Schema & AJV

### 使用

安装`ajv`

```
yarn add agv -S 
```

### 样例

```js
const Ajv = require("ajv")
const ajv = new Ajv()
const schema = {
  type: "object",
  properties: {
    foo: { type: "integer" },
    bar: { type: "string" }
  },
  required: ["foo"],
  additionalProperties: false
}
const data = { foo: 1, bar: "abc" }
const valid = ajv.validate(schema, data)
if (!valid) console.log(ajv.errors)
```

### AVG文档

**ajv-formats:**https://ajv.js.org/packages/ajv-formats.html

**ajv-keywords:**https://ajv.js.org/packages/ajv-keywords.html

#### 自定义`format`

```ts
ajv.addFormat("test", (data: never) => {
  return data === "abc"
})
```





