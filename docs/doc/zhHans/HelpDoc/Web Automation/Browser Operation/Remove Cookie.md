---
title: 移除Cookie
order: 6
---

# 移除Cookie

## 功能说明

:::tip 功能描述
移除通过Cookie url、Cookie name指定的Cookie
:::

![移除Cookie](../../../assets/移除Cookie_command.png)

## 配置项说明

### 常规

**指令输入**

- **Url设置方式**`Integer`: Cookie Url设置值来源，可选择手动输入，如果选择网页对象，则自动使用网页Url指定

- **网页对象**`TBrowser`: 输入一个获取到的或者通过'打开网页'函数创建的网页对象

- **浏览器类型**`Integer`: 设置指定类型浏览器Cookie

- **Cookie Url**`string`: Cookie Url，将被移除的Cookie Url

- **移除方式**`Integer`: 

- **Cookie Name**`string`: 将被移除的Cookie名称


**指令输出**

当前指令无输出

### 高级

- **执行前延迟(毫秒)**`Integer`: 指令执行前等待的时间

### 错误处理

- **打印错误日志**`Boolean`：当指令运行出错时，打印错误日志到【日志】面板。默认勾选。

- **处理方式**`Integer`：

 - **终止流程**：指令运行出错时，终止流程。

 - **忽略异常并继续执行**：指令运行出错时，忽略异常，继续执行流程。

 - **重试此指令**：指令运行出错时，重试运行指定次数指令，每次重试间隔指定时长。

## 使用示例

**流程逻辑描述：** 

## 常见错误及处理

无

## 常见问题解答

无

