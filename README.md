# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 学习笔记

2-5 【扩展学习】Mock 方案对比【更多 IT 教程 微信 z2018005801】.png

### 对比 mock 方案

1. 代码侵入
2. 请求拦截

例如 Mock.js 原理： 重写 XMLHttpRequest

`优点：`

1. 与前端代码分离
2. 可生成随机数据

`缺点`

1. 数据都是动态生成的假数据，无法真实模拟增删改查
2. 只支持 ajax,不支持 fetch

## 用 Custom Hook 提取并服用组件代码

> 自定义 hook 一定要以 use 开头
> react 18 以后的版本 在开发模式 严格模式下 useEffect 会执行两次

### TypeScript 基本知识梳理

> TypeScript 是“强类型”版的 JavaScript,当我们在代码中定义变量（包括普通变量、函数、组件、hook 等）的时候，TypeScript 允许我们在定义的同时指定其类型，这样使用者在使用不当的时候就会被及时报错提醒
> 经常用 TypeScript 的感受：比起原来的 JavaScript,TypeScript 带来了完全不一样的开发体验，bug 大大减少了，编辑器提示快了，代码更易读了，开发速度快了
> `TypeScript的类型`

1. number
   > 数字类型，包含小数、其他进制的数字
2. string
   > 字符串
3. array
   > 在 TS 中，array 一般指“所有元素类型相同”的值的集合
4. boolean
5. 函数
6. any
   > any 表示这个值可以是任何值，被定义为 any 就意味着不做任何类型检查
7. void
   > 表示函数不返回任何值或者返回 undefined
8. object
9. tuple
   > tuple 是“数量固定，类型可以各异”版的数组
10. enum
11. null 和 undefined
    > 在 TS 中既是一个值，也是一个类型
12. unknown
    > 是一个严格版的 any, 会做类型检查。unknow 不能赋值给任何变量，unknow 也不能读取任何方法
13. never

interface 不是一种类型 应该被翻译成接口，或者说使用上面介绍的类型，创建一个我们自己的类型

#### .d.ts

> .d.ts 文件可以让 JS 文件继续维持自己 JS 文件的身份，而拥有 TS 的类型保护
> 一般我们写业务代码不会用到，但是点击类型跳转一般会跳到.d.ts 文件。
