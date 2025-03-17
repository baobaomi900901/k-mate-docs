---
title: 设置Cookie
order: 5
---

# 设置Cookie

## 功能说明

:::tip 功能描述
根据指定的 Cookie 数据设置 Cookie，如果存在相同的 Cookie，则覆盖
:::

![设置Cookie](../../../assets/设置Cookie_command.png)

## 配置项说明

### 常规

**指令输入**

- **Url设置方式**`Integer`: 设置Cookie的Url，可选择手动输入，也可选择网页对象。如果使用网页对象，则自动使用该网页对象的 Url

- **网页对象**`TBrowser`: 输入一个获取到的或通过'打开网页'函数创建的网页对象

- **浏览器类型**`Integer`: 设置指定类型浏览器Cookie

- **Cookie Url**`string`: Cookie Url 是与 Cookie 相关联的 Url，该值会影响创建 Cookie 的默认 Domain 和 Path

- **Cookie Name**`string`: CookieName，若忽略则为空

- **Cookie Value**`string`: CookieValue，若忽略则为空

- **Cookie Domain**`string`: Url 的 Domain 部分，如果忽略，则该 Cookie 为 host-only Cookie

- **Cookie Path**`string`: Cookie Path 默认为 Url 的 path 部分，若忽略，则为空

- **HttpOnly**`Boolean`: 设置 Cookie 是否标记为 HttpOnly，默认值为 False

- **Secure**`Boolean`: 设置 Cookie 是否被标记为 Secure，默认值为False

- **设置为会话 Cookie**`Boolean`: 默认情况下，设置为会话 Cookie，取消勾选则设置为持久化 Cookie

- **Cookie 有效时间(秒)**`Integer`: 持久化 Cookie 需要设置有效期（即 Cookie 生效到失效的时间间隔，单位为秒），默认有效期为 100 秒


**指令输出**

当前指令无输出

### 高级

- **执行前的延迟(毫秒)**`Integer`: 指令执行前的等待时间

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

