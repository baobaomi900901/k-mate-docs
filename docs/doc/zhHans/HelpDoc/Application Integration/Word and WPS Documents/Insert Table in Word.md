---
title: 插入Word表格
order: 9
---

# 插入Word表格

## 功能说明

:::tip 功能描述
在Word文档中插入表格
:::

## 配置项说明

### 常规

**指令输入**

- **插入表格前换行**`Boolean`: 若勾选,则在插入表格前换行

- **表格是否有边框**`Boolean`: 若勾选,则表格含有边框

- **表格数据**`TDataTable`: 内容的数据格式需要更写入范围对应,写入行、列、区域的内容需要是列表类型

- **Word对象**`TDocumentApplication`: 输入一个通过函数'打开或新建Word'创建的Word对象


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

