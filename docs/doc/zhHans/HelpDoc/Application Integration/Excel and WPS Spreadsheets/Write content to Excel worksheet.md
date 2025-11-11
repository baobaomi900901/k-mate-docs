---
title: 写入数据至Excel工作表
order: 8
---

# 写入数据至Excel工作表
- 适用系统: windows / 信创

## 功能说明

:::tip 功能描述
在Excel工作表中写入数据，支持追加、插入或者覆盖
:::

![写入数据至Excel工作表](../../../assets/写入数据至Excel工作表_command.png)

## 指令输入

- **Excel对象**`TWorkbookApplication`: 
    - 输入一个通过函数'打开或新建Excel'/'获取当前激活的Excel对象'存储的Excel对象

- **写入范围**`Integer`: 
    - 指定写入范围

- **单元行号**`Integer`: 
    - 指定行号,从1开始，-n表示倒数第n行

- **单元列名**`string`: 
    - 指定列名(支持A或1)，-n表示倒数第n列

- **起始列名**`string`: 
    - 指定列名(支持A或1)，-n表示倒数第n列

- **行号**`Integer`: 
    - 指定行号,从1开始，-n表示倒数第n行

- **起始行号**`Integer`: 
    - 指定行号,从1开始，-n表示倒数第n行

- **写入方式**`Integer`: 
    - 指定写入方式

- **列名**`string`: 
    - 指定列名(支持A或1)，-n表示倒数第n列

- **写入数据**`TDataTable`: 
    - 区域为范围时，写入数据为数据表类型，请传入一个数据表类型的变量

- **Sheet页名称**`string`: 
    - 为空则默认为当前激活的Sheet页


## 高级

- **执行前的延迟(毫秒)**`Integer`: 
    - 指令执行前的等待时间

## 使用示例
![alt text](<assets/Write content to Excel worksheet/image-1.png>)

![alt text](<assets/Write content to Excel worksheet/image.png>)

此流程执行逻辑：执行【打开/新建Excel】指令打开已有的Excel表格并保存表格对象 --> 使用【写入内容至Excel工作表】 --> 执行【关闭Excel】指令关闭并保存


