---
title: Set Row or Column Visibility
---

# Set Row or Column Visibility

## Function Description

:::tip 
Hide or unhide rows and columns in Excel
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet Name**`string`: If empty, defaults to the currently active sheet

- **Column Name**`string`: Column name. Starts from A

- **Row Number**`Integer`: Row number. Starts from 1

- **Range**`Integer`: Specify the row or column to hide or unhide

- **State**`Integer`: Set the hidden attribute of Excel rows and columns

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or New Excel'/'Get currently active Excel object'


**Command Output**

No output for the current command


**Command Output**

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

