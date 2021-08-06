# TypeScript

## 主要内容

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d88a00458ce14c73bd3114239f5cb7e2~tplv-k3u1fbpfcp-zoom-1.image" style="zoom:50%;" /> 

## 认知

1. Ts是Js的超集
2. 本质上向这个语言添加了可选的静态类型和基于类的面向对象编程

### TypeScript 与 JavaScript 的区别

[掘金 · TS学习指南]: https://juejin.cn/post/6872111128135073806

| TypeScript                                     | JavaScript                                 |
| ---------------------------------------------- | ------------------------------------------ |
| JavaScript 的超集用于解决大型项目的代码复杂性  | 一种脚本语言，用于创建动态网页             |
| 可以在编译期间发现并纠正错误                   | 作为一种解释型语言，只能在运行时发现错误   |
| 强类型，支持静态和动态类型                     | 弱类型，没有静态类型选项                   |
| 最终被编译成 JavaScript 代码，使浏览器可以理解 | 可以直接在浏览器中使用                     |
| 支持模块、泛型和接口                           | 不支持模块，泛型或接口                     |
| 社区的支持仍在增长，而且还不是很大             | 大量的社区支持以及大量文档和解决问题的支持 |

###  典型 TypeScript 工作流程

![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dea0cbad55b246a8a7e65aec57273ade~tplv-k3u1fbpfcp-zoom-1.image) 

## 使用

##### 1.安装 TypeScript

```shell
$ npm install -g typescript
```

##### 2.验证 TypeScript

```shell
$ tsc -v 
# Version 4.0.2
```

##### 3.编译 TypeScript 文件

```shell
$ tsc helloworld.ts
# helloworld.ts => helloworld.js
```

















