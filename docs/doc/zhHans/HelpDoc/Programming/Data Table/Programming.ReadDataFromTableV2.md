---
title: ReadDataFromTableV2
order: 3
---

# ReadDataFromTableV2
- 适用系统: windows / 信创

## 功能说明

:::tip 功能描述

:::

![ReadDataFromTableV2](../../../assets/ReadDataFromTableV2_command.png)

## 配置项说明

### 常规

**指令输入**

- **DataTable**`TDataTable`: 

- **ReadWay**`Integer`: 

- **ReadRegion**`Integer`: 

- **CellRowName**`string`: 

- **CellColName**`string`: 

- **CellRowNum**`Integer`: 

- **CellColNum**`Integer`: 

- **RowName**`string`: 

- **ColName**`string`: 

- **RowNum**`Integer`: 

- **ColNum**`Integer`: 

- **AreaMode**`Integer`: 

- **AreaBeginRowName**`string`: 

- **AreaEndRowName**`string`: 

- **AreaBeginColName**`string`: 

- **AreaEndColName**`string`: 

- **RowNameExp**`string`: 

- **ColNameExp**`string`: 

- **AreaBeginRowNum**`Integer`: 

- **AreaEndRowNum**`Integer`: 

- **AreaBeginColNum**`Integer`: 

- **AreaEndColNum**`Integer`: 

- **RowNumExp**`string`: 

- **ColNumExp**`string`: 

- **IsListRes**`Boolean`: 

- **IsPreview**`Boolean`: 

- **IsPrintRes**`Boolean`: 


**指令输出**

- **ReadResult**`TDataTable`: 

- **ReadList**`TList<String>`: 

### 错误处理

- **打印错误日志**`Boolean`：当指令运行出错时，打印错误日志到【日志】面板。默认勾选。

- **处理方式**`Integer`：

 - **终止流程**：指令运行出错时，终止流程。

 - **忽略异常并继续执行**：指令运行出错时，忽略异常，继续执行流程。

 - **重试此指令**：指令运行出错时，重试运行指定次数指令，每次重试间隔指定时长。

## 使用示例
无

## 常见错误及处理

无

## 常见问题解答

无

