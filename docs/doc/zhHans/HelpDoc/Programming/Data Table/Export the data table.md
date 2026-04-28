---
title: 导出数据表格
order: 21
---

# 导出数据表格
- 适用系统: windows / 信创

## 功能说明

:::tip 功能描述
用于将数据表格写入到Excel、CSV文件
:::

![alt text](<assets/Export Data Row/image.png>)

## 配置项说明

### 指令输入

  - **数据表格对象**`TDataTable`: 要导出的数据表格对象。

  - **文件格式**`Integer`: 要导出数据表格的格式 可选择excel或csv文件

  - **导出方式**`TDataRow`: 选择新建或写入的方式导出

  - **文件路径**`String`：选择一个文件保存路径

  - **打印组件的输出变量值**`Boolean`：若勾选此选项，会将组件运行产生的变量数据或变量值输出，并打印到控制台输出日志中

  - **是否写入表头**`Boolean`：若勾选此选项，会将数据表格中的表头一并写入

### 指令输出

  - **写入后路径**`string`: 输出导出数据表格的保存路径


## 使用示例

  - [点击下载查看示例](https://files.oss.krpalite.com:56780/%E5%BA%94%E7%94%A8/%E7%A4%BA%E4%BE%8B_%E5%AF%BC%E5%87%BA%E6%95%B0%E6%8D%AE%E8%A1%A8%E6%A0%BC.krpa) 

