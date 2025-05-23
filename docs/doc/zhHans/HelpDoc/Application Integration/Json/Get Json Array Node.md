---
title: 获取Json数组节点
order: 8
---

# 获取Json数组节点

## 功能说明

:::tip 功能描述
从Json数组中获取节点
:::

![获取Json数组节点](../../../assets/获取Json数组节点_command.png)

## 配置项说明

### 常规

**指令输入**

- **Json对象**`TJson`: 指定Json对象

- **节点下标**`Integer`: 指定节点下标


**指令输出**

- **节点对象**`TJson`: 返回节点对象

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

