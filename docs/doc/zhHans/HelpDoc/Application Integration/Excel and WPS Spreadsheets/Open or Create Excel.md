---
title: 打开或新建Excel
order: 1
---

# 打开或新建Excel
- 适用系统: windows / 信创

## 功能说明

:::tip 功能描述
打开已有的Excel文件，或新建Excel文件，以实现Excel程序的自动化
:::

![打开或新建Excel](../../../assets/打开或新建Excel_command.png)

## 指令输入

- **启动方式**`Integer`: 
    - 选择是否新建Excel文件，或者打开已有Excel文件

    <br>

- **驱动方式**`Integer`: 
    - 自动检测：自动检测设备支持的驱动方式

    - Office：使用Microsoft Office Excel的驱动方式打开文件。适用于安装了Office套件的设备。

    - WPS：使用WPS表格的驱动方式打开文件，适用于安装了WPS办公软件的设备。

    <br>

- **Excel文件路径**`string`: 
    - Excel文件的绝对路径

    <br>

- **是否可视化**`Boolean`: 
    - 此选项不会影响Excel自动化的相关操作，只是用于控制可视化操作是否用户可见。如果是非可视化下操作Excel，保存之后必须要关闭Excel

    <br>

- **文件不存在时自动创建**`Boolean`: 
    - 文件不存在时自动创建文件


## 指令输出

- **存储Excel对象到**`TWorkbookApplication`: 
    - 指定一个变量，用于存储Excel对象。使用此Excel对象可以对Excel进行自动化相关操作

## 高级

- **打开密码**`string`: 
    - 用于打开加密Excel的密码

    <br>

- **编辑密码**`string`: 
    - 用于编辑加密Excel的密码
    
    <br>

- **执行前的延迟(毫秒)**`Integer`: 
    - 指令执行前的等待时间

## 使用示例

![alt text](<assets/Open or Create Excel/image.png>)

**此流程执行逻辑：** 使用【打开/新建Excel】指令新建Excel表格并保存表格对象 --> 执行【写入内容至Excel工作表】指令在表格中写入内容 --> 使用【关闭Excel】指令关闭并保存


