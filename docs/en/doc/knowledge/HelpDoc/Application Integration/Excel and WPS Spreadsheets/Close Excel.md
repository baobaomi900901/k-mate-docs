---
title: Close Excel
---

# Close Excel

## Function Description

:::tip 
Close Excel
:::

## Configuration Item Description

### General

**Command Input**

- **Terminate Excel Process**`Boolean`: Force close the specified Excel process

- **Close Process**`Integer`: Select process to close

- **Overwrite if file exists**`Boolean`: Overwrite if file exists

- **Excel File Path**`string`: Path of the opened Excel file

- **Close Type**`Integer`: Select close type

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained by the function 'Open or Create Excel'/'Get current active Excel object'

- **Operation**`Integer`: Operation on Excel


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

