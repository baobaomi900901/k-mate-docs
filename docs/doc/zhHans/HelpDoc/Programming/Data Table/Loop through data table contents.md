---
title: 循环数据表格内容
order: 22
---

# 循环数据表格内容
- 适用系统: windows / 信创

## 功能说明

:::tip 功能描述
循环数据表格中的内容
:::

![alt text](<assets/Loop through data table contents/image.png>)

## 配置项说明

### 指令输入

- **数据表**`TDataTable`: 
  - 需要进行循环的数据表格对象。

- **循环方式**`Integer`: 
  - 循环数据表格的方式

- **起始行号**`Integer`: 
  - 起始行号

- **结束行号**`Integer`: 
  - 结束行号

- **起始列名**`string`: 
  - 起始列名

- **结束列名**`string`: 
  - 结束列名

- **起始单元格行号**`Integer`: 
  - 起始单元格行号

- **起始单元格列名**`string`: 
  - 起始单元格列名

- **末尾单元格行号**`Integer`: 
  - 末尾单元格行号

- **末尾单元格列名**`string`: 
  - 末尾单元格列名

### 指令输出

- **当前循环项保存到**`TList<string>`: 
  - 指定一个变量，用于保存当前循环项的列表

- **当前行号保存到**`Integer`: 
  - 指定一个变量，用于保存当前循环项的行号

- **当前列名保存到**`string`: 
  - 指定一个变量，用于保存当前循环项的列名

### 使用示例

- [点击下载查看示例](https://files.oss.krpalite.com:56780/%E5%BA%94%E7%94%A8/%E7%A4%BA%E4%BE%8B_%E5%BE%AA%E7%8E%AF%E6%95%B0%E6%8D%AE%E8%A1%A8%E6%A0%BC%E5%86%85%E5%AE%B9.krpa) 
