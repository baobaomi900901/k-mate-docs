---
title: DingTalkExcelReadSheetData
order: 11
---

# DingTalkExcelReadSheetData

## Function Description

:::tip 
DingTalkExcelReadSheetData
:::

![DingTalkExcelReadSheetData](../../../../assets/DingTalkExcelReadSheetData_command.png)

## Configuration Item Description

### General

**Command Input**

- **DingTalkWorkbook**`TDingTalkWorkbook`: The nail object returned by establishing a nail table connection

- **SheetName**`String`: Default to Sheet1 page, it is recommended to fill in the corresponding sheet page

- **ReadRange**`String`: Fill in the reading area according to the reading method, for example, row corresponds to 1, column corresponds to B, and area corresponds to A1: B2

- **ReadtMode**`Integer`: Cells, Rows, Columns, Regions

- **ReadFormat**`Integer`: Value, formula, cell display value


**Command Output**

- **oDataTable**`TDataTable`: 

### Error Handling

- **Print Error Logs**`Boolean`: Whether to print error logs to the "Logs" panel when the command fails. Default is checked. 

- **Handling Method**`Integer`:

    - **Terminate Process**: If the command fails, terminate the process.

    - **Ignore Exception and Continue Execution**: If the command fails, ignore the exception and continue the process.

    - **Retry This Command**: If the command fails, retry the command a specified number of times with a specified interval between retries.

## Usage Example

Process logic description:

## Common Errors and Handling

None

## Frequently Asked Questions

None

