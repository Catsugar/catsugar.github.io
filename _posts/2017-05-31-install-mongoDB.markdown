---
layout: post
title:  "几个安装的记录"
date:   2017-6-1
categories: note
tags:
- MongoDB
- install

---
## 记录一下Vue脚手架搭建过程。

#### 安装npm,vue

```
cnpm install npm -g
cnpm install vue
```
#### 安装 vue-cli

```
cnpm install --global vue-cli

```
#### 创建模板

```
vue init webpack  (your project name)

```

#### 编译环境
```
cd (your project name)
cnpm install
cnpm run dev

访问 http://localhost:8088
```

<hr>

## 记录一下webpack安装过程。

#### 初始化npm

```
npm  init

```
#### 安装webpack

```
npm  install webpack --save-dev

```
#### 打包

```
webpack （文件名） （打包后的文件名）
```
#### 安装loader

```
npm install style-loader css-loader --save-dev
webpack （文件名） （打包后的文件名） --module-bind 'css=style-loader!css-loader' --watch
```

<hr>

## 记录一下mongoDB安装过程。

#### 官网下载包

```
http://www.mongodb.org/downloads

```
#### 建立存储数据的目录

```
c:\>cd c:\

c:\>mkdir data

c:\>cd data

c:\data>mkdir db

c:\data>cd db

c:\data\db>

```
#### 打包

```
mongod --dbpath D:\MongoDB\data
```
#### 浏览器输入http://localhost:27017/

