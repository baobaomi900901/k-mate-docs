---
title: Get the first available row or column
order: 13
---

# Get the first available row or column

## Function Description

:::tip 
Retrieve the first available row or column in the spreadsheet
:::

![Get the first available row or column](../../../../assets/Get%20the%20first%20available%20row%20or%20column_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: The name of the sheet to be obtained

- **Reading method**`Integer`: The reading method can choose to read rows or columns


**Command Output**

- **Available rows and columns**`string`: The position of the first available row and column

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

