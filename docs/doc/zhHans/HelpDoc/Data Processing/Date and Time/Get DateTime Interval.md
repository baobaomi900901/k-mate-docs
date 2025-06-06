---
title: 获取时间间隔
order: 4
---

# 获取时间间隔

## 功能说明

:::tip 功能描述
获取两个日期对象的时间间隔
:::

![获取时间间隔](../../../assets/获取时间间隔_command.png)

## 配置项说明

### 常规

**指令输入**

- **起始时间**`TDateTime`: 请输入日期时间对象，代表起始时间

- **结束时间**`TDateTime`: 请输入日期时间对象，代表结束时间

- **时间单位**`Integer`: 请选择时间单位


**指令输出**

- **保存时间间隔至**`Integer`: 指定一个变量，用于保存时间间隔

### 高级

- **执行前的延迟(毫秒)**`Integer`: 指令执行前的等待时间

### 错误处理

- **打印错误日志**`Boolean`：当指令运行出错时，打印错误日志到【日志】面板。默认勾选。

- **处理方式**`Integer`：

 - **终止流程**：指令运行出错时，终止流程。

 - **忽略异常并继续执行**：指令运行出错时，忽略异常，继续执行流程。

 - **重试此指令**：指令运行出错时，重试运行指定次数指令，每次重试间隔指定时长。

## 使用示例
无

## 常见错误及处理

无

## 常见问题解答

无

