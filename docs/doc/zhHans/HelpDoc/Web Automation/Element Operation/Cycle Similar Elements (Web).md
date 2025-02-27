---
title: 循环相似元素(web)
order: 11
---

# 循环相似元素(web)

## 功能说明

:::tip 功能描述
依次循环网页中相似元素列表中每一项进行自动化操作
:::

## 配置项说明

### 常规

**指令输入**

- **输出循环项的位置**`Boolean`: 是否输出循环项的位置

- **属性名称**`string`: 网页元素的属性名称

- **智能识别并补充地址前缀（http://或https://）**`Boolean`: 智能识别并补充地址前缀

- **元素操作**`Integer`: 获取的元素信息

- **操作目标**`TTarget`: 选择需要操作的网页元素

- **网页对象**`TBrowser`: 输入一个获取到的或者通过'打开网页'函数创建的网页对象


**指令输出**

- **保存当前循环位置至**`Integer`: 指定一个变量名称，用于存储当前循环项的位置

- **保存当前循环元素信息至**`string`: 指定一个变量名称，用于存储当前循环的元素信息

- **保存当前循环元素至**`TUiElement`: 指定一个变量名称，用于存储当前循环的元素对象

### 高级

- **等待元素存在(毫秒)**`Integer`: 等待目标关联元素存在的超时时间

- **循环结束位置**`Integer`: 循环结束位置，-1为倒数第一项

- **循环开始位置**`Integer`: 循环开始位置，0为第一项

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

