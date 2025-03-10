---
title: Paste Excel content
order: 3
---

# Paste Excel content

## Function Description

:::tip 
Paste Excel content
:::

![Paste Excel content](../../../../assets/Paste%20Excel%20content_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or create new Excel' / 'Get currently active Excel object'

- **Unit row number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row

- **Unit column name**`string`: Enter the column name (supports A or 1), -N represents the nth to last column

- **Selective paste**`Integer`: Selective paste

- **Selective paste operation**`Integer`: Selective paste operation

- **Skip empty cells**`Boolean`: Whether to skip empty cells

- **Transpose**`Boolean`: Whether to transpose

- **Sheet name**`string`: If empty, it defaults to the currently active sheet


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

