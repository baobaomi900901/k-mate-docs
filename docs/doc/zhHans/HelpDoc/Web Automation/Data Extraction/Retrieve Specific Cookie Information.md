---
title: 获取指定Cookie信息
order: 7
---

# 获取指定Cookie信息

## 功能说明

:::tip 功能描述
用于根据规则获取指定的Cookie信息，如果指定的URL存在多个相同 Name 的 Cookie ，则返回 Path 最长的 Cookie ，如果Path长度相同，则返回创建时间最早的 Cookie
:::

![获取指定Cookie信息](../../../assets/获取指定Cookie信息_command.png)

## 配置项说明

### 常规

**指令输入**

- **Url设置方式**`Integer`: Cookie URL 的值来源。

    - 根据网页对象：自动使用指定网页Url进行筛选

    - 根据输入的Url：选择浏览器类型并手动输入 Cookie URL

- **网页对象**`TBrowser`: 输入一个获取到的或通过'打开网页'函数创建的网页对象

- **浏览器类型**`Integer`: 在指定类型的浏览器中获取Cookie

- **Cookie Url**`string`: 根据给定的Url筛选Cookie，如果为空则代表忽略Url筛选条件

- **Cookie Name**`string`: 根据给定的Name筛选Cookie，如果为空则代表忽略Name筛选条件


**指令输出**

- **保存Cookie至**`string`: 指定一个变量，用于保存获取到的Cookie

### 高级

- **执行前的延迟(毫秒)**`Integer`: 指令执行前的等待时间

### 错误处理

- **打印错误日志**`Boolean`：当指令运行出错时，打印错误日志到【日志】面板。默认勾选。

- **处理方式**`Integer`：

    - **终止流程**：指令运行出错时，终止流程。

    - **忽略异常并继续执行**：指令运行出错时，忽略异常，继续执行流程。

    - **重试此指令**：指令运行出错时，重试运行指定次数指令，每次重试间隔指定时长。

## 使用示例

![获取指定Cookie信息](../../../assets/获取指定Cookie信息_demo.png)

**流程逻辑描述：** 使用【打开浏览器】指令打开金智维官网 --> 使用【获取指定Cookie信息】指令根据Cookie Name进行筛选并保存筛选结果--> 执行【打印日志】打印Cookie信息

## 常见错误及处理

无

## 常见问题解答

无

