---
title: Set Column Width
---

# Set Column Width

## Function Description

:::tip 
Set column width
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet Name**`string`: Worksheet name

- **Column Width**`Integer`: Enter the column width

- **Mode**`Integer`: Choose the method to set the column width

- **Column Name**`string`: Column name. Starting from A

- **Excel Instance**`TWorkbookApplication`: Enter an Excel instance obtained through the function 'Open or New Excel'/'Get currently active Excel object'


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

