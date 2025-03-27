---
title: Delete rows and columns
order: 8
---

# Delete rows and columns

## Function Description

:::tip 
Delete rows or columns to the specified location in the spreadsheet
:::

![Delete rows and columns](../../../../assets/Delete%20rows%20and%20columns_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: To delete the worksheet name for rows and columns

- **Method of deletion**`Integer`: Select the method to delete

- **Starting position**`Integer`: Delete the starting position of the row and column, count from 1

- **Delete quantity**`Integer`: The number of rows and columns to be deleted


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

