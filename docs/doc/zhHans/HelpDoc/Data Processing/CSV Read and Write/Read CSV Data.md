---
title: 读取 CSV 数据
order: 1
---

# 读取 CSV 数据

## 功能说明

:::tip 功能描述
读取CSV文件内容
:::

## 配置项说明

### 常规

**指令输入**

- **首行是列头**`Boolean`: CSV文件首行是否是列头

- **内容分隔符**`Integer`: 选择内容分隔符，默认为逗号

- **文件编码**`Integer`: 选择文本编码格式，UTF-8-SIG为带有BOM的UTF-8

- **CSV文件路径**`string`: 输入CSV文件路径


**指令输出**

- **保存数据表至**`TDataTable`: 指定一个变量，用来保存读取的数据表

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

