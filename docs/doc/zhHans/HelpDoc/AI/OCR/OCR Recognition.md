---
title: OCR识别
order: 7
---

# OCR识别

## 功能说明

:::tip 功能描述
OCR识别
:::

![OCR识别](../../../assets/OCR识别_command.png)

## 配置项说明

### 常规

**指令输入**

- **识别方法**`Integer`: 选择识别方法

- **图片路径**`string`: 输入要选择的图片地址

- **应用名称**`string`: 应用名称

- **识别类型**`Integer`: 识别类型

- **区域**`Integer`: 区域

- **签名方法**`Integer`: 接口请求使用的签名方法

- **正反面**`Integer`: 卡证的正面或反面


**指令输出**

- **结果**`string`: 指定一个变量，用来保存识别结果

### 高级

- **代理参数**`string`: 当我们的程序不能直接连到目标网络但对方安装了代理服务器，格式为 地址:端口

- **执行前的延迟(毫秒)**`Integer`: 指令执行前的等待时间

- **超时时间(毫秒)**`Integer`: 最长等待时间(毫秒)

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

