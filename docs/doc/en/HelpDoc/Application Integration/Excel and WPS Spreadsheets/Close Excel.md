---
title: Close Excel
order: 4
---

# Close Excel

## Function Description

:::tip 
Close Excel
:::

![Close Excel](../../../assets/Close%20Excel_command.png)

## Configuration Item Description

### General

**Command Input**

- **Operation**`Integer`: Operation on Excel

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained by the function 'Open or Create Excel'/'Get current active Excel object'

- **Close Type**`Integer`: Select close type

- **Excel File Path**`string`: Path of the opened Excel file

- **Overwrite if file exists**`Boolean`: Overwrite if file exists

- **Close Process**`Integer`: Select process to close

- **Terminate Excel Process**`Boolean`: Force close the specified Excel process


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

