---
title: 获取筛选所有Cookie
order: 6
---

# 获取筛选所有Cookie

## 功能说明

:::tip 功能描述
从单个Cookie store中获取与给定的信息匹配的所有Cookie集合
:::

![获取筛选所有Cookie](../../../assets/获取筛选所有Cookie_command.png)

## 配置项说明

### 常规

**指令输入**

- **浏览器类型**`Integer`: 在指定类型浏览器中获取Cookie

- **Cookie Url**`string`: 根据给定的Url筛选Cookie，如果为空则忽略Url筛选条件

- **Cookie Name**`string`: 根据给定的Name筛选Cookie，如果为空则忽略Name筛选条件

- **Cookie Domain**`string`: 默认为Url的Domain部分，如果忽略则该Cookie为host-only Cookie

- **Cookie Path**`string`: 默认为Url的Path部分，如果为空则忽略Path筛选条件

- **Cookie PartitionKey**`string`: 根据给定的PartitionKey条件筛选Cookie，如果留空则代表忽略PartitionKey中的筛选条件


**指令输出**

- **保存Cookie列表至**`string`: 保存获取到的Cookie列表

### 高级

- **根据Cookie Secure属性筛选**`Boolean`: 筛选 secure=true 或 secure=fasle 的Cookie

- **仅Secure Cookie**`Boolean`: 设置Cookie是否被标记为HttpOnly，默认值为False

- **根据Cookie 生命周期筛选**`Boolean`: 默认设置会话Cookie，取消勾选则为持久化Cookie

- **仅会话Cookie**`Boolean`: 筛选会话cookie集合

- **执行前的延迟(毫秒)**`Integer`: 指令执行前的等待时间

### 错误处理

- **打印错误日志**`Boolean`：当指令运行出错时，打印错误日志到【日志】面板。默认勾选。

- **处理方式**`Integer`：

    - **终止流程**：指令运行出错时，终止流程。

    - **忽略异常并继续执行**：指令运行出错时，忽略异常，继续执行流程。

    - **重试此指令**：指令运行出错时，重试运行指定次数指令，每次重试间隔指定时长。

## 使用示例

![获取筛选所有Cookie](../../../assets/获取筛选所有Cookie_demo.png)

**流程逻辑描述：** 使用chrome浏览器打开金智维官网 --> 使用【获取筛选所有Cookie】指令根据Cookie Name进行筛选并保存筛选结果--> 执行【打印日志】打印筛选结果

## 常见错误及处理

### 获取所有cookies失败(连接失败(系统找不到指定的文件。))

**可能的错误原因**：缺少会话信息。Cookie 与浏览器会话相关，未打开浏览器就无法提供有效的会话信息，从而导致无法访问或获取 Cookie。

**解决方案**：打开目标浏览器。

## 常见问题解答

无

