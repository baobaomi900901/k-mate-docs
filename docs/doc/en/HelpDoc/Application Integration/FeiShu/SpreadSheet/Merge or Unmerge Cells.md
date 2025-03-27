---
title: Merge or Unmerge Cells
order: 15
---

# Merge or Unmerge Cells

## Function Description

:::tip 
Merge or undo merging cells within the specified range of the spreadsheet
:::

![Merge or Unmerge Cells](../../../../assets/Merge%20or%20Unmerge%20Cells_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: Sheet name for merging cells

- **Scope**`string`: To merge the range of cell formats

- **Merge method**`Integer`: The merging method can be selected as [merge, cancel merge]


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

