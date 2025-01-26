---
title: Get Selected Range
---

# Get Selected Range

## Function Description

:::tip 
Get the start and end row numbers and column names of the currently selected range in the current sheet
:::

## Configuration Item Description

### General

**Command Input**

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or New Excel'/'Get currently active Excel object'


**Command Output**

- **End Column Name Save To**`string`: Specify a variable to save the ending column name of the selected range

- **End Row Number Save To**`Integer`: Specify a variable to save the ending row number of the selected range

- **Start Column Name Save To**`string`: Specify a variable to save the starting column name of the selected range

- **Start Row Number Save To**`Integer`: Specify a variable to save the starting row number of the selected range


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

