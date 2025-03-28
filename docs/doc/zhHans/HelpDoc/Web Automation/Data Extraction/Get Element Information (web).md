---
title: 获取元素信息(web)
order: 2
---

# 获取元素信息(web)

## 功能说明

:::tip 功能描述
获取网页中元素的具体内容，如文本内容、源代码、属性值、元素位置等信息
:::

![获取元素信息(web)](../../../assets/获取元素信息(web)_command.png)

## 配置项说明

### 常规

**指令输入**

- **网页对象**`TBrowser`: 输入一个获取到的或通过'打开网页'函数创建的网页对象

- **目标元素**`TTarget`: 请选择需要操作的目标网页元素

- **操作**`Integer`: 请选择要获取的网页元素信息

- **智能识别并补充网页链接前缀**`Boolean`: 智能识别并补充网页链接的前缀（http://或https://）

- **属性名称**`string`: 网页元素的属性名称

- **相对于**`Integer`: 相对整个屏幕还是相对浏览器窗口


**指令输出**

- **保存元素信息至**`string`: 指定一个变量，用于保存获取到的网页元素信息

### 高级

- **转为DPI为96对应的值**`Boolean`: 是否把边框属性转换成与设备无关的单位（每个单位1/96英寸）

- **执行前的延迟(毫秒)**`Integer`: 指令执行前的等待时间

- **等待目标元素存在(毫秒)**`Integer`: 指定时间内未找到目标元素则执行错误处理逻辑

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

