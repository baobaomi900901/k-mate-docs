---
title: 合并数据表
order: 14
---

# 合并数据表

## 功能说明

:::tip 功能描述
将指定数据表与当前数据表合并，指定是否保留更改以及如何处理当前数据表中缺少的架构。
:::

![合并数据表](../../../assets/合并数据表_command.png)

## 配置项说明

### 常规

**指令输入**

- **目标**`TDataTable`: 要将源数据表合并到的数据表对象。

- **来源**`TDataTable`: 要添加到目标数据表的数据表对象。

- **缺少架构操作**`Integer`: 缺少架构操作


**指令输出**

当前指令无输出

### 错误处理

- **打印错误日志**`Boolean`：当指令运行出错时，打印错误日志到【日志】面板。默认勾选。

- **处理方式**`Integer`：

 - **终止流程**：指令运行出错时，终止流程。

 - **忽略异常并继续执行**：指令运行出错时，忽略异常，继续执行流程。

 - **重试此指令**：指令运行出错时，重试运行指定次数指令，每次重试间隔指定时长。

## 使用示例

**流程逻辑描述：** 

## 常见错误及处理

无

## 常见问题解答

无

