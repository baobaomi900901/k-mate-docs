---
title: Read the total number of rows or columns
order: 11
---

# Read the total number of rows or columns

## Function Description

:::tip 
Read the total number of rows or columns of a specified sheet in a spreadsheet
:::

![Read the total number of rows or columns](../../../../assets/Read%20the%20total%20number%20of%20rows%20or%20columns_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: The name of the sheet to be read

- **Read type**`Integer`: Read type, you can choose to read rows or columns


**Command Output**

- **Total number of reads**`Integer`: The total number of rows or columns on the sheet to be read

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

