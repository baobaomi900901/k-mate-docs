---
title: Get First Available Row on Column
order: 5
---

# Get First Available Row on Column

## Function Description

:::tip 
Get the first available row on the specified column
:::

![Get First Available Row on Column](../../../../assets/Get%20First%20Available%20Row%20on%20Column_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or create new Excel' / 'Get currently active Excel object'

- **Column Name**`string`: Enter the column name (supports A or 1), -N represents the nth to last column

- **Sheet Name**`string`: If empty, it defaults to the currently active sheet


**Command Output**

- **Save Row Number To**`Integer`: Specify a variable to save the first available row number on the column

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

