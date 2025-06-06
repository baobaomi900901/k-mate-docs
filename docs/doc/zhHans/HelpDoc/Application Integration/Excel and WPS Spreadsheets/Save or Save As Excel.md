---
title: 保存或另存为Excel文件
order: 3
---

# 保存或另存为Excel文件

## 功能说明

:::tip 功能描述
保存或者另存为Excel文件
:::

![保存或另存为Excel文件](../../../assets/保存或另存为Excel文件_command.png)

## 配置项说明

### 常规

**指令输入**

- **Excel对象**`TWorkbookApplication`: 输入一个通过函数'打开或新建Excel'/'获取当前激活的Excel对象'存储的Excel对象

- **保存方式**`Integer`: 指定保存方式

- **Excel文件路径**`string`: 保存的Excel文件路径

- **如果文件存在则覆盖**`Boolean`: 如果文件存在则覆盖

- **保存后关闭**`Boolean`: 保存后关闭


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

