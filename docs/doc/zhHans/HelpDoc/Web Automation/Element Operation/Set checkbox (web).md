---
title: 勾选复选框(web)
order: 5
---

# 勾选复选框(web)

## 功能说明

:::tip 功能描述
勾选或取消勾选网页中的复选框。仅适用于`type="checkbox"`的`<input>`标签
:::

![勾选复选框(web)](../../../assets/勾选复选框(web)_command.png)

## 配置项说明

### 常规

**指令输入**

- **网页对象**`TBrowser`: 输入一个获取到的或通过'打开网页'函数创建的网页对象

- **目标元素**`TTarget`: 请选择需要操作的目标网页元素。可以从「元素库」中选择一个已捕获的元素，或使用「捕获新元素」功能来获取网页中的新元素作为操作目标

- **操作**`Integer`: 请选择需要对复选框进行何种操作。包括勾选、取消勾选、反选


**指令输出**

当前指令无输出

### 高级

- **延迟时间(毫秒)**`Integer`: 指令执行完成后的继续等待时间

- **执行前的延迟(毫秒)**`Integer`: 指令执行前的等待时间

- **等待目标元素存在(毫秒)**`Integer`: 指定时间内找不到目标复选框则执行错误处理逻辑

### 错误处理

- **打印错误日志**`Boolean`：当指令运行出错时，打印错误日志到【日志】面板。默认勾选。

- **处理方式**`Integer`：

 - **终止流程**：指令运行出错时，终止流程。

 - **忽略异常并继续执行**：指令运行出错时，忽略异常，继续执行流程。

 - **重试此指令**：指令运行出错时，重试运行指定次数指令，每次重试间隔指定时长。

## 使用示例

![勾选复选框(web)](../../../assets/勾选复选框(web)_demo.png)


## 常见错误及处理

无

## 常见问题解答

无

