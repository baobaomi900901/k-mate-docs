---
title: Write table data
order: 4
---

# Write table data

## Function Description

:::tip 
Write data to the spreadsheet
:::

![Write table data](../../../../assets/Write%20table%20data_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: The name of the worksheet to be written with data

- **Scope**`string`: The worksheet range to be written with data, such as row corresponding to 1, column corresponding to B, and area corresponding to A1: B2

- **Write data**`string`: Write data to a data table, such as [[1,2,3], [1,1,1]]

- **Writing method**`Integer`: The method of writing data to a worksheet


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

