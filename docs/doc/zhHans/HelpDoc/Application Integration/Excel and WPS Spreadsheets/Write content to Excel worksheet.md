---
title: 写入数据至Excel工作表
order: 8
---

# 写入数据至Excel工作表

## 功能说明

:::tip 功能描述
在Excel工作表中写入数据，支持追加、插入或者覆盖
:::

![写入数据至Excel工作表](../../../assets/写入数据至Excel工作表_command.png)

## 配置项说明

### 常规

**指令输入**

- **Excel对象**`TWorkbookApplication`: 输入一个通过函数'打开或新建Excel'/'获取当前激活的Excel对象'存储的Excel对象

- **写入范围**`Integer`: 指定写入范围

- **单元行号**`Integer`: 指定行号,从1开始，-n表示倒数第n行

- **单元列名**`string`: 指定列名(支持A或1)，-n表示倒数第n列

- **起始列名**`string`: 指定列名(支持A或1)，-n表示倒数第n列

- **行号**`Integer`: 指定行号,从1开始，-n表示倒数第n行

- **起始行号**`Integer`: 指定行号,从1开始，-n表示倒数第n行

- **写入方式**`Integer`: 指定写入方式

- **列名**`string`: 指定列名(支持A或1)，-n表示倒数第n列

- **写入数据**`TDataTable`: 区域为范围时，写入数据为数据表类型，请传入一个数据表类型的变量

- **Sheet页名称**`string`: 为空则默认为当前激活的Sheet页


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

