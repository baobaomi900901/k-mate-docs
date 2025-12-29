---
title: 表格文字识别(百度)
order: 8
---

# 数组排序
- 适用系统: windows

## 功能说明

:::tip 功能描述
通过百度API接口，识别图片或文件表格文字内容
:::

![alt text](<assets/Table Text Recognition(baidu)/image.png>)

## 指令输入

  **文件类型**`Integer`: 
  - 选择一个要是别的文件类型
  
  **图片文件**`String`:
  - 输入或选择文件路径

  **输出Excel文件**:
  - 输出一个excel文件的base64字符串
  
  **输出单元格文字位置信息**:
  - 输出单元格内文字的外接四边形四角点坐标，若文字折行，则分行分别输出

## 高级

  **输出格式**`Integer`: 
  - 可选择输出为数据表格或json字符串
  
## 指令输出

  **结果**`String`: 
  - 识别结果数据表格对象或json
