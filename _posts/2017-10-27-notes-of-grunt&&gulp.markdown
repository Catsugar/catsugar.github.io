---
layout: post
title:  "不靠谱学习笔记---grunt&&gulp&&webpack"
date:   2017-10-27
categories: note
tags:
- 笔记
- grunt
- gulp
- webpack
---


>这是一个不靠谱的学习笔记。想到啥写啥
##grunt
自动化工具

***

### 安装 grunt

``` bash
# install grunt
npm install -g grunt-cli

```

``` bash
# 安装工具
npm install load-grunt-tasks --save-dev
npm install time-grunt --save-dev

```


``` bash
# 安装工具
npm install load-grunt-tasks --save-dev
npm install time-grunt --save-dev

```

``` bash
# 安装文件删除和拷贝工具
npm install grunt-contrib-copy --save-dev  //文件拷贝
npm install grunt-contrib-clean --save-dev  //文件删除

```

***
### 安装 yeoman(脚手架工作)

``` bash
# install yeoman
npm install -g yo

```
### 安装 bower（web的包管理器）

``` bash
# install yeoman
npm install -g bower

```

今天踩了一个惊天巨坑。
解决bower命令找不到的问题。

``` bash
# NodeJs下建立"node_global"及"node_cache"两个文件夹
# 启动cmd，输入
npm config set prefix "C:\Program Files\nodejs\node_global"
npm config set cache "C:\Program Files\nodejs\node_cache"
# 增加path
```

### install generator
``` bash
npm install -g generator
# 生成
yo angular +项目名

```

***
### 安装 webpack

``` bash
# 初始化npm
npm init
# install
npm install webpack --save-dev
```

