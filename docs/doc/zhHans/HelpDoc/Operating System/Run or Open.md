---
title: 运行或打开
---

# 运行或打开

## 功能说明

:::tip 功能描述
运行软件、打开软件、打开文件夹、打开网址、执行系统命令等
:::

## 配置项说明

### 常规

**指令输入**

- **等待时间**`Integer`: 等待最长时间

- **等待超时**`Boolean`: 如果不勾选，表示无限等待

- **指令执行之后**`Integer`: 选择是否继续执行指令，或者等待程序执行结束、文件关闭

- **路径或命令**`string`: 打开一个程序或者文件


**指令输出**

- **保存执行结果至**`string`: 输入一个名称，用于保存执行结果

### 高级

- **窗口风格**`Integer`: 指定新窗口应如何显示

- **以管理员身份运行**`Boolean`: 是否以管理员身份运行

- **工作目录(可选)**`string`: 进程中命令的工作目录

- **参数(可选)**`string`: 程序执行的额外参数

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

