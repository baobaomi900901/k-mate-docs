---
title: 导出为PDF文件格式
order: 5
---

# 导出为PDF文件格式
- 适用系统: windows / 信创

## 功能说明

:::tip 功能描述
将Excel文件导出为PDF文件格式
:::

![导出为PDF文件格式](../../../assets/导出为PDF文件格式_command.png)

## 指令输入

- **Excel对象**`TWorkbookApplication`: 
    - 输入一个通过函数'打开或新建Excel'/'获取当前激活的Excel对象'存储的Excel对象

- **Sheet页名称**`string`: 
    - 填写Sheet页名称，为空则默认为当前激活的Sheet页

- **全部Sheet页**`Boolean`: 
    - 若勾选，则导出所有工作表信息

- **PDF保存到**`string`: 
    - 导出的PDF文件保存的路径

- **如果文件存在则覆盖**`Boolean`: 
    - 如果文件存在则覆盖

<br>

## 高级

- **执行前的延迟(毫秒)**`Integer`: 
    - 指令执行前的等待时间

## 使用示例

![alt text](<assets/Export to PDF/image.png>)

**此流程执行逻辑：** 执行【打开/新建Excel】指令打开已有的Excel表格并保存表格对象 --> 使用【导出为PDF】指令将表格导出为PDF文件至本地 --> 执行【关闭Excel】指令关闭并保存

