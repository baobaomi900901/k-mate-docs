---
title: 等待窗口(win)
order: 5
---

# 等待窗口(win)

## 功能说明

:::tip 功能描述
等待窗口状态发生变化
:::

## 配置项说明

### 常规

**指令输入**

- **超时时间(毫秒)**`Integer`: 请输入最长等待时间

- **设置超时时间**`Boolean`: 是否设置超时时间

- **等待状态**`Integer`: 选择需要等待的窗口状态

- **窗口类型**`string`: 输入窗口类型

- **添加窗口类型**`Boolean`: 添加窗口类型

- **窗口标题**`string`: 输入窗口标题

- **操作目标**`TTarget`: 选择窗口元素

- **获取窗口方式**`Integer`: 选择获取窗口方式


**指令输出**

- **waitResult**`Boolean`: 

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

