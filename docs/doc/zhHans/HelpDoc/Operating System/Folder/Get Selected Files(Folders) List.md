---
title: 获取选中文件(夹)列表
order: 2
---

# 获取选中文件(夹)列表

## 功能说明

:::tip 功能描述
获取当前激活文件资源管理器（若激活桌面则目标为桌面）中选择的文件、文件夹列表
:::

## 配置项说明

### 常规

**指令输入**

- **获取类型**`Integer`: 选择要获取的选中类型，支持获取选中的文件、文件夹或所有选中项


**指令输出**

- **保存文件(夹)列表至**`TList<String>`: 输入一个名字，用来保存文件(夹)列表

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

