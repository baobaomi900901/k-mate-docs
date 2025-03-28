---
title: 文本替换
order: 10
---

# 文本替换

## 功能说明

:::tip 功能描述
使用新的内容替换文本中的指定的旧内容
:::

![文本替换](../../../assets/文本替换_command.png)

## 配置项说明

### 常规

**指令输入**

- **源内容**`string`: 请输入原始文本字符串或者选择一个包含字符串的变量

- **替换方式**`Integer`: 选择内容的提取方式

- **正则表达式**`string`: 选择内容的提取方式

- **被替换内容**`string`: 请输入待替换的内容

- **只替换首个匹配项**`Boolean`: 例如在文本中找到了两个手机号，可以只替换第一个查找到的

- **忽略字母大小写**`Boolean`: 在进行字符串匹配时，是否忽略字母大小写形式

- **替换为**`string`: 请输入替换后的值


**指令输出**

- **存储结果至**`string`: 指定一个变量，用来保存替换后的内容

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

