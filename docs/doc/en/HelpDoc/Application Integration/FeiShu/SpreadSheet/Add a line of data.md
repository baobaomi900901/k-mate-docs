---
title: Add a line of data
order: 5
---

# Add a line of data

## Function Description

:::tip 
Add a row of data to the available rows of the spreadsheet
:::

![Add a line of data](../../../../assets/Add%20a%20line%20of%20data_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: Name of worksheet to add data

- **Add data**`string`: To add data to the data table

- **Start listing**`string`: Add a row of data to the column name in the available row


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

