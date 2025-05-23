---
title: 从文本中提取内容
order: 1
---

# 从文本中提取内容

## 功能说明

:::tip 功能描述
根据正则表达式从文本中提取指定内容
:::

![从文本中提取内容](../../../assets/从文本中提取内容_command.png)

## 配置项说明

### 常规

**指令输入**

- **文本内容**`string`: 请输入文本字符串或选择一个字符串变量

- **提取方式**`Integer`: 选择提取内容的方式，包括

    - 提取数字：从文本内容中提取数字。其正则表达式为`([\-\+]?\d+(\.\d+)?)`

    - 提取手机号码：从文本内容中提取手机号码。其正则表达式为`(1[3-9]\d{9})`

    - 提取Email地址：从文本内容中提取Email地址。其正则表达式为`([A-Za-z0-9-_.+%]+@[A-Za-z0-9-.]+\.[A-Za-z]{2,4})`
     
    - 提取身份证号：从文本内容中提取身份证号。其正则表达式为`((\d{17}(x|X|\d))|(\d{15}))`

    - 提取自定义内容：根据自定义的正则表达式提取内容

- **正则表达式**`string`: 请输入一段正则表达式

- **只找第一个匹配项**`Boolean`: 若勾选，则仅返回所有匹配项中的第一个；取消勾选则返回所有的匹配项，匹配项之间以`,`分隔

- **忽略字母大小写**`Boolean`: 匹配时是否忽略字母大小写


**指令输出**

- **保存结果至**`string`: 指定一个变量，用来保存提取到的内容

### 错误处理

- **打印错误日志**`Boolean`：当指令运行出错时，打印错误日志到【日志】面板。默认勾选。

- **处理方式**`Integer`：

    - **终止流程**：指令运行出错时，终止流程。

    - **忽略异常并继续执行**：指令运行出错时，忽略异常，继续执行流程。

    - **重试此指令**：指令运行出错时，重试运行指定次数指令，每次重试间隔指定时长。

## 使用示例

![从文本中提取内容](../../../assets/从文本中提取内容_demo.png)

**流程逻辑描述：** 使用【从文本中提取内容】指令提取源文本中的所有数字 --> 使用【文本分割成列表】指令将提取出来的多个数字分割成列表 --> 使用【ForEach列表循环】指令遍历循环列表 --> 循环体内执行【打印日志】指令，依次将数字打印输出

## 常见错误及处理

无

## 常见问题解答

无

