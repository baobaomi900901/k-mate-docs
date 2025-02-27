---
title: 截屏
order: 4
---

# 截屏

## 功能说明

:::tip 功能描述
对屏幕或者窗口截图，保存到剪切板或者文件
:::

## 配置项说明

### 常规

**指令输入**

- **图片保存位置**`string`: 图片保存在计算机上的位置

- **保存截屏至**`Integer`: 选择截屏的保存位置

- **Y2**`Integer`: 截屏区域Y2坐标

- **X2**`Integer`: 截屏区域X2坐标

- **Y1**`Integer`: 截屏区域Y1坐标

- **X1**`Integer`: 截屏区域X1坐标

- **截图区域**`Integer`: 截取的区域

- **窗口对象**`string`: 指定一个用于截取的窗口对象

- **截屏来源**`Integer`: 选择截取整个屏幕还是部分窗口


**指令输出**

- **用户是否取消截图**`string`: 输入一个变量用来保存用户是否取消了截图

### 错误处理

- **打印错误日志**`Boolean`：当指令运行出错时，打印错误日志到【日志】面板。默认勾选。

- **处理方式**`Integer`：

 - **终止流程**：指令运行出错时，终止流程。

 - **忽略异常并继续执行**：指令运行出错时，忽略异常，继续执行流程。

 - **重试此指令**：指令运行出错时，重试运行指定次数指令，每次重试间隔指定时长。

## 使用示例

流程逻辑描述：

## 常见错误及处理

无

## 常见问题解答

无

