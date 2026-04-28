---
title: 创建数据表格
order: 20
---

# 创建数据表格
- 适用系统: windows / 信创

## 功能说明

:::tip 功能描述
创建二维数据表格
:::

![alt text](<assets/Create Data Table/image.png>)

## 配置项说明

### 指令输入

- **创建方式**`Integer`: 
  - 数据表格的创建方式

- **待写入内容**`string`: 
  - 支持二维的列表数据和字典，示例：[["a","b","c"],[1,2,3]]、{"Name":["Grace","Nami","Lucy","Aiden‌"],"Gender":[1,0,0,1]}

- **文件路径**`string`: 
  - 请输入或选择文件路径

- **Sheet页**`string`: 
  - 如果为空则默认为当前激活的Sheet页面

- **在数据表中预览**`Boolean`: 
  - 在数据表中预览

- **打印组件的输出变量值**`Boolean`: 
  - 如果选择此选项，会将组件运行产生的变量数据或变量值输出，并打印到控制台日志中

- **将首行设置为列头**`Boolean`: 
  - 如果选择此选项，会将读取的第一行设置为列头,列头不能重复

### 指令输出

- **数据表格保存至**`TDataTable`: 
  - 指定一个变量，用于保存数据表格

### 使用示例

- [点击下载查看示例](https://files.oss.krpalite.com:56780/%E5%BA%94%E7%94%A8/%E7%A4%BA%E4%BE%8B_%E5%88%9B%E5%BB%BA%E6%95%B0%E6%8D%AE%E8%A1%A8%E6%A0%BC.krpa) 
