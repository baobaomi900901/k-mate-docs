---
title: Write Cell
order: 19
---

# Write Cell

## Function Description

:::tip 
Write a value/formula into a cell or range in the spreadsheet. If a value exists, it will be overwritten. The changes are saved immediately.
:::

![Write Cell](../../../../assets/Write Cell_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or create new Excel' / 'Get currently active Excel object'

- **Range**`string`: Cell or range

- **Sheet Name**`string`: Sheet name in the workbook

- **Value**`string`: Enter value/formula


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution


**Command Output**

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

