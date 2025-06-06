---
title: Set Column Width
order: 6
---

# Set Column Width

## Function Description

:::tip 
Set column width
:::

![Set Column Width](../../../../assets/Set%20Column%20Width_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Instance**`TWorkbookApplication`: Enter an Excel instance obtained through the function 'Open or New Excel'/'Get currently active Excel object'

- **Column Name**`string`: Enter the column name (supports A or 1), use A,B,C or A:C for multiple columns

- **Mode**`Integer`: Choose the method to set the column width

- **Column Width**`Integer`: Enter the column width

- **Sheet Name**`string`: Worksheet name


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

