---
title: 设置Cookie
---

# 设置Cookie

## 功能说明

:::tip 功能描述
根据指定的Cookie数据设置Cookie， 若存在等效Cookie则覆盖
:::

## 配置项说明

### 常规

**指令输入**

- **Cookie 有效期(秒)`Integer`**: 持久化Cookie需要设置有效期(Cookie生效到失效的时间间隔，单位为秒)，默认100秒

- **设置为会话 Cookie`Boolean`**: 默认设置会话Cookie，取消勾选则设置持久化Cookie

- **标记为 Secure`Boolean`**: 设置Cookie是否被标记为Secure，默认False

- **标记为 HttpOnly`Boolean`**: 设置Cookie是否被标记为HttpOnly，默认False

- **Cookie Path`string`**: CookiePath默认为Url的path部分，忽略则空

- **Cookie Domain`string`**: CookieDomain，默认为Url的Domain部分，忽略则该Cookie为host-only Cookie

- **Cookie Value`string`**: CookieValue忽略则空

- **Cookie Name`string`**: CookieName忽略则空

- **Cookie Url`string`**: Cookie Url，与 Cookie设置相关联的Url，该值影响创建Cookie的默认Domain和Path

- **浏览器类型`Integer`**: 设置指定类型浏览器Cookie

- **网页对象`TBrowser`**: 输入一个获取到的或者通过'打开网页'函数创建的网页对象

- **Url设置方式`Integer`**: Cookie Url设置值来源，可选择手动输入，如果选择网页对象，则自动使用网页Url指定


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

