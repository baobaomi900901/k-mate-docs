---
title: DingTalkExcelAppendRowData
order: 13
---

# DingTalkExcelAppendRowData

## Function Description

:::tip 
DingTalkExcelAppendRowData
:::

![DingTalkExcelAppendRowData](../../../../assets/DingTalkExcelAppendRowData_command.png)

## Configuration Item Description

### General

**Command Input**

- **DingTalkWorkbook**`TDingTalkWorkbook`: The nail object returned by establishing a nail table connection

- **SheetName**`String`: Default to Sheet1 page, it is recommended to fill in the corresponding sheet page

- **AppendData**`String`: Add data content to the table

- **ColumnName**`String`: The column name where data begins to be written


**Command Output**

No output for the current command

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

