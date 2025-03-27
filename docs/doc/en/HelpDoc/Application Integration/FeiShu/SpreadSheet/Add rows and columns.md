---
title: Add rows and columns
order: 6
---

# Add rows and columns

## Function Description

:::tip 
Add rows or columns to the spreadsheet
:::

![Add rows and columns](../../../../assets/Add%20rows%20and%20columns_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: Name of worksheet to add rows and columns

- **Add method**`Integer`: Select the method to add

- **Add quantity**`Integer`: The number of rows and columns to be added


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

