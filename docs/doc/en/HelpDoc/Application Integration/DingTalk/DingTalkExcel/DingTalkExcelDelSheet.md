---
title: DingTalkExcelDelSheet
order: 3
---

# DingTalkExcelDelSheet

## Function Description

:::tip 
DingTalkExcelDelSheet
:::

![DingTalkExcelDelSheet](../../../../assets/DingTalkExcelDelSheet_command.png)

## Configuration Item Description

### General

**Command Input**

- **DingTalkWorkbook**`TDingTalkWorkbook`: The nail object returned by establishing a nail table connection

- **SheetName**`String`: The name of the sheet to be deleted


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

