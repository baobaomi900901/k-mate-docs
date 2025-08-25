---
title: 数据表入数据库
order: 5
---

# 关闭数据库

## 功能说明

:::tip 功能描述
将数据表格数据存入数据库
:::

![数据表入数据库](<assets/Data Table To Database/image.png>)

## 指令输入

- **数据库连接对象**`TDatabase`: 请输入或选择一个数据库连接对象

- **数据表对象**`TDatabase`: 请输入或选择一个数据表格对象

- **对应数据库表名**`String`: 请输入或选择一个你要存入的表名

- **Oracle数据库模式**`TDatabase`: 如果是Oracle数据库需指定模式创建表格

- **Oracle数据库表空间**`TDatabase`: 如果是Oracle数据库创建表格时可以指定表空间

## 使用示例

![alt text](<assets/Data Table To Database/image-1.png>)

**流程逻辑描述：** 使用【连接数据库】指令连接数据库 --> 使用【数据表入数据库】将数据表格内容存入数据库