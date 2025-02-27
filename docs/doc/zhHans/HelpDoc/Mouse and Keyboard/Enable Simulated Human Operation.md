---
title: 开启模拟真人操作
order: 12
---

# 开启模拟真人操作

## 功能说明

:::tip 功能描述
一次对多个鼠标操作指令用模拟真人的操作习惯运行（从开始到结束区间内的操作）
:::

## 配置项说明

### 常规

**指令输入**

- **最大停顿时间(毫秒)**`Integer`: 执行完成最长等待时间

- **最小停顿时间(毫秒)**`Integer`: 执行完成最短等待时间

- **仿真操作停顿**`Boolean`: 模拟真人在操作之前随机停顿

- **仿真点击元素**`Boolean`: 模拟真人在随机位置点击元素

- **仿真移动鼠标**`Boolean`: 模拟真人按随机路线和速度移动鼠标


**指令输出**

当前指令无输出

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

