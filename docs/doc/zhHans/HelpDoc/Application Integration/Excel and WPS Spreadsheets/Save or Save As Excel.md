---
title: 保存或另存为Excel文件
order: 3
---

# 保存或另存为Excel文件
- 适用系统: windows / 信创

## 功能说明

:::tip 功能描述
保存或者另存为Excel文件
:::

![保存或另存为Excel文件](../../../assets/保存或另存为Excel文件_command.png)

## 指令输入

- **Excel对象**`TWorkbookApplication`: 
    - 输入一个通过函数'打开或新建Excel'/'获取当前激活的Excel对象'存储的Excel对象

    <br>

- **保存方式**`Integer`: 
    - 指定保存方式

    <br>

- **Excel文件路径**`string`: 
    - 保存的Excel文件路径

    <br>

- **如果文件存在则覆盖**`Boolean`: 
    - 如果文件存在则覆盖

    <br>

- **保存后关闭**`Boolean`: 
    - 保存后关闭
  
## 高级

- **执行前的延迟(毫秒)**`Integer`: 
    - 指令执行前的等待时间


## 使用示例

![alt text](<assets/Save or Save As Excel/image.png>)

此流程执行逻辑：执行【启动Excel】指令打开已有的Excel表格并保存表格对象 --> 使用【保存/另存Excel】指令将表格另存为到本地 --> 执行【关闭Excel】指令关闭

