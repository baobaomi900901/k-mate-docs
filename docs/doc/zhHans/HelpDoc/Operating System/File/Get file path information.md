---
title: 获取文件路径信息
order: 8
---

# 获取文件路径信息

## 功能说明

:::tip 功能描述
获取文件路径的根目录、父目录、文件名、基本文件名和文件扩展名
:::

## 配置项说明

### 常规

**指令输入**

- **文件路径**`string`: 要获取的文件路径


**指令输出**

- **文件路径信息**`TList<String>`: 输入一个名字，用来保存文件路径信息

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

