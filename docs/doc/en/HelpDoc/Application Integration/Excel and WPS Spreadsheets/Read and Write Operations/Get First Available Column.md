---
title: Get First Available Column
order: 6
---

# Get First Available Column

## Function Description

:::tip 
Get the first available column
:::

![Get First Available Column](../../../../assets/Get%20First%20Available%20Column_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or create new Excel' / 'Get currently active Excel object'

- **Sheet Name**`string`: If empty, it defaults to the currently active sheet


**Command Output**

- **Save Column Name To**`string`: Specify a variable to save the first available column name of the sheet

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

