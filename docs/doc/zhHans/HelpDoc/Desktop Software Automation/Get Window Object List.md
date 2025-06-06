---
title: 获取窗口对象列表
order: 2
---

# 获取窗口对象列表

## 功能说明

:::tip 功能描述
获取当前所有满足条件的窗口对象，并保存到列表中
:::

![获取窗口对象列表](../../assets/获取窗口对象列表_command.png)

## 配置项说明

### 常规

**指令输入**

- **窗口标题包含**`string`: 输入窗口标题应该包含的字符

- **启用通配符匹配**`Boolean`: 决定是否启用通配符匹配，这将决定常见通配符是被视为普通字符还是通配符


**指令输出**

- **保存窗口列表对象至**`TList<TUiElement>`: 保存的窗口对象列表

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

