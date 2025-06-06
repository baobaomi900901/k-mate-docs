---
title: 解压文件(夹)
order: 2
---

# 解压文件(夹)

## 功能说明

:::tip 功能描述
将压缩包中的内容进行解压
:::

![解压文件(夹)](../../../assets/解压文件(夹)_command.png)

## 配置项说明

### 常规

**指令输入**

- **压缩文件路径**`string`: 输入或选择要解压的文件路径

- **密码**`string`: 输入密码，若无密码则留空

- **解压文件夹路径**`string`: 请输入解压输出文件夹路径

- **创建同名文件夹**`Boolean`: 解压至与压缩文件同名的文件夹中


**指令输出**

- **保存文件夹路径至**`string`: 指定一个变量名称，该变量用于保存文件夹路径

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

