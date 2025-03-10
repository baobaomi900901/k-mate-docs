---
title: Set Row or Column Visibility
order: 18
---

# Set Row or Column Visibility

## Function Description

:::tip 
Hide or unhide rows and columns in Excel
:::

![Set Row or Column Visibility](../../../../assets/Set%20Row%20or%20Column%20Visibility_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or New Excel'/'Get currently active Excel object'

- **State**`Integer`: Set the hidden attribute of Excel rows and columns

- **Range**`Integer`: Specify the row or column to hide or unhide

- **Row Number**`string`: Enter line number, use 1,2,3 or 1:3 for multiple lines, -N represents the Nth to last row

- **Column Name**`string`: Enter line number, use 1,2,3 or 1:3 for multiple lines, -N represents the Nth to last row

- **Sheet Name**`string`: If empty, defaults to the currently active sheet


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

