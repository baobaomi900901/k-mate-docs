---
title: Read table data
order: 3
---

# Read table data

## Function Description

:::tip 
Read table data to generate a data table
:::

![Read table data](../../../../assets/Read%20table%20data_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: Name of worksheet to read data

- **Scope**`string`: The worksheet range to read data, such as row corresponding to 1, column corresponding to B, and area corresponding to A1: B2, Output all data in the current table when empty

- **Reading method**`Integer`: The way to read data from a worksheet

- **Read format**`Integer`: Format of the worksheet for reading data

- **Preview in Data Table**`Boolean`: Preview in Data Table


**Command Output**

- **Data Table**`TDataTable`: The data table generated after reading the data

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

