# react的ssr脚手架

> + react18
> + 处理ts使用@babel/preset-typescript，更快，缺点是缺少类型校验，所以添加tsconfig.json做类型提示（仅限于提示）

## 组件库

> + antd`v5`
> + antd版本5使用了css in js，默认支持按需加载，所以`babel-plugin-import在antd里没有意义了`

## css处理

> + 使用styled-components来处理

## 预渲染逻辑

> serve

## 命令

> + 为让其依次执行，使用 npm-run-all

## 使用

> + 预览：npm run preview
