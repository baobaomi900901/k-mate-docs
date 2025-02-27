---
title: 飞书群通知
order: 2
---

# 飞书群通知

## 功能说明

:::tip 功能描述
发送内容至飞书群
:::

## 配置项说明

### 常规

**指令输入**

- **图片路径**`string`: 最大不能超过10M，支持JPG，PNG格式

- **消息卡片内容**`string`: 消息卡片是飞书独有的消息格式，可以通过飞书官方提供的飞书消息卡片搭建工具进行编辑消息卡片

- **富文本内容**`string`: 支持使用飞书原格式内容，参考飞书消息说明，若需要通过输入电话号码或者邮箱进行@操作，要求可以根据该电话号码和邮箱获取到对应的user_id

- **文本内容**`string`: 文本内容

- **app_secret**`string`: 获取tenant_access_token，在富文本消息和消息卡片中使用

- **app_id**`string`: 获取tenant_access_token，在富文本消息和消息卡片中使用

- **消息格式类型**`Integer`: 消息类型及数据格式

- **签名校验**`string`: 机器人安全设置中的签名校验，如果没设置签名校验则不需要输入

- **机器人地址**`string`: 机器人的网络地址，即WebHook，需要自行申请


**指令输出**

当前指令无输出

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

