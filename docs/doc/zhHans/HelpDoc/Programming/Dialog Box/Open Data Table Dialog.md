---
title: 打开数据表格对话框
order: 7
---

# 打开数据表格对话框

## 功能说明

:::tip 功能描述
打开数据表格对话框
:::

## 配置项说明

### 常规

**指令输入**

- **提示说明**`string`: 为数据表格的使用方法进行说明，让使用者更加容易理解

- **对话框标题**`string`: 对话框标题


**指令输出**

- **按钮名称**`string`: 指定一个变量名称，该变量用于保存点击的按钮名称

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

