---
title: 清空Excel内容
order: 9
---

# 清空Excel内容

## 功能说明

:::tip 功能描述
清空Excel文件内容或格式
:::

![清空Excel内容](../../../../assets/清空Excel内容_command.png)

## 指令输入

- **Excel对象**`TWorkbookApplication`: 
  - 输入一个通过函数'打开或新建Excel'/'获取当前激活的Excel对象'存储的Excel对象

- **清空内容**`Integer`: 
  - 选择清空内容/清空格式/清空全部

- **清空方式**`Integer`: 
  - 选择按单元格/行/列/区域清空

- **单元行号**`Integer`: 
  - 单元格所在行号,从1开始，-n表示倒数第n行

- **单元列名**`string`: 
  - 单元格所在列名,从A或1开始，-n表示倒数第n列

- **行号**`Integer`: 
  - 行号,从1开始，-n表示倒数第n行

- **列名**`string`: 
  - 列名,从A或1开始，-n表示倒数第n列

- **起始行号**`Integer`: 
  - 待清空区域的起始行号,从1开始，-n表示倒数第n行

- **起始列名**`string`: 
  - 待清空区域的起始列名,从A或1开始，-n表示倒数第n列

- **结束行号**`Integer`: 
  - 待清空区域的结束行号,从1开始，-n表示倒数第n行

- **结束列名**`string`: 
  - 待清空区域的结束列名,从A或1开始，-n表示倒数第n列

- **Sheet页名称**`string`: 
  - 为空则默认为当前激活的Sheet页



## 使用示例

![alt text](<assets/Clear Excel Content/image.png>)

此流程执列逻辑： 执列【打开/新建Excel】指令打开已有的Excel表格并保存表格对象 --> 使用【清空Excel内容】指令清空已使用区域的格式 --> 执行【关闭Excel】指令关闭并保存
