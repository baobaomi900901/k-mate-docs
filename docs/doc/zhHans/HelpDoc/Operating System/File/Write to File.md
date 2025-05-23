---
title: 写入文件
order: 7
---

# 写入文件

## 功能说明

:::tip 功能描述
将文本写入已有文件，若不存在则自动创建
:::

![写入文件](../../../assets/写入文件_command.png)

## 配置项说明

### 常规

**指令输入**

- **文件路径**`string`: 请选择要写入的文件路径

- **文件内容**`string`: 请输入要写入的内容

- **写入方式**`Integer`: 当文件存在时的处理方式

- **新行追加写**`Boolean`: 如果勾选此选项，则会换行启新的一行追加写，若否，则直接追加至原内容后

- **文件编码**`Integer`: 选择文件以何种字符集进行编码


**指令输出**

当前指令无输出

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

