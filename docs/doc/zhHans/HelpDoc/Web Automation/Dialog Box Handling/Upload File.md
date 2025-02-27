---
title: 上传文件
order: 1
---

# 上传文件

## 功能说明

:::tip 功能描述
自动完成点击上传按钮、在文件选择对话框中输入待上传文件等系列操作
:::

## 配置项说明

### 常规

**指令输入**

- **上传文件路径**`string`: 上传文件的完整路径

- **操作目标**`TTarget`: 选择需要操作的网页元素

- **网页对象**`TBrowser`: 输入一个获取到的或者通过'打开网页'函数创建的网页对象


**指令输出**

当前指令无输出

### 高级

- **焦点超时时间(毫秒)**`Integer`: 焦点超时时间

- **等待对话框出现(毫秒)**`Integer`: 设置最长等待时间

- **按键输入间隔(毫秒)**`Integer`: 两次按键的间隔时间

- **强制加载美式键盘**`Boolean`: 切换英文输入法

- **输入方式**`Integer`: 自动化接口输入: 调用文件名输入框自身实现的自动化接口输入剪切板输入: 将输入路径和文件名添加到剪切板,通过Ctr+V的方式将内容填写到上传对话框的文件名输入框中,避免输入法问题模拟人工输入: 如果使用模拟人工输入则通过模拟人工的方式触发输入事件

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

