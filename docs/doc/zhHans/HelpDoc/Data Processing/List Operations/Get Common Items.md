---
title: 获取两个列表中的相同项
order: 16
---

# 获取两个列表中的相同项

## 功能说明

:::tip 功能描述
用于获取两个列表中的相同项，并将结果保存至新的列表
:::

![获取两个列表中的相同项](../../../assets/获取两个列表中的相同项_command.png)

## 配置项说明

### 常规

**指令输入**

- **列表1**`TList<String>`: 选择一个字符串列表变量

- **列表2**`TList<String>`: 选择一个字符串列表变量


**指令输出**

- **保存列表对象至**`TList<String>`: 指定一个变量，用来保存新建的列表

### 错误处理

- **打印错误日志**`Boolean`：当指令运行出错时，打印错误日志到【日志】面板。默认勾选。

- **处理方式**`Integer`：

    - **终止流程**：指令运行出错时，终止流程。

    - **忽略异常并继续执行**：指令运行出错时，忽略异常，继续执行流程。

    - **重试此指令**：指令运行出错时，重试运行指定次数指令，每次重试间隔指定时长。

## 使用示例

![获取两个列表中的相同项](../../../assets/获取两个列表中的相同项_demo.png)

**流程逻辑描述：** 使用【设置变量】指令设置列表变量List1和List2 --> 使用【获取两个列表中的相同项】指令，获取列表对象List1和列表对象List2中相同的项，并将结果保存至新的列表 --> 使用【打印日志】指令将过滤后的结果列表打印输出

## 常见错误及处理

无

## 常见问题解答

无

