---
title: Write content to Excel worksheet
---

# Write content to Excel worksheet

## Function Description

:::tip 
Write content in the Excel worksheet, supporting appending, inserting, or overwriting
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet name**`string`: If empty, it defaults to the currently active sheet

- **Write content**`TDataTable`: When the region is a range, the write content should be a data table type variable

- **Column name**`string`: Column name starts from A

- **Write method**`Integer`: Select the write method

- **Starting row number**`Integer`: Row number starts from 1

- **Row number**`Integer`: Row number starts from 1

- **Starting column name**`string`: Column name starts from A

- **Unit column name**`string`: Column name starts from A

- **Unit row number**`Integer`: Row number starts from 1

- **Write range**`Integer`: Select the write range

- **Excel object**`TWorkbookApplication`: Enter an Excel object obtained through the 'Open or create new Excel' / 'Get currently active Excel object' function


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

