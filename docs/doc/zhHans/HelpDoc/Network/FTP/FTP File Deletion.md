---
title: 删除FTP文件
order: 9
---

# 删除FTP文件

## 功能说明

:::tip 功能描述
删除远程FTP服务器路径的一个或多个文件
:::

![删除FTP文件](../../../assets/删除FTP文件_command.png)

## 配置项说明

### 常规

**指令输入**

- **FTP连接对象**`TFTP`: 请输入需要删除文件的FTP对象

- **删除的文件名称**`string`: 请输入需要删除的远程文件名称,多个文件可用|分割


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

