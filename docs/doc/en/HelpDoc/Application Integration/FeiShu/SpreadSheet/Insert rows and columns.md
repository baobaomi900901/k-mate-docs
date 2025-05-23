---
title: Insert rows and columns
order: 7
---

# Insert rows and columns

## Function Description

:::tip 
Insert rows or columns into the specified position of the spreadsheet
:::

![Insert rows and columns](../../../../assets/Insert%20rows%20and%20columns_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: Name of worksheet to insert rows and columns

- **Insertion method**`Integer`: Select the method to insert

- **Starting position**`Integer`: Insert the starting position of the row and column, count from 0

- **Insert quantity**`Integer`: The number of rows and columns to be inserted


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

