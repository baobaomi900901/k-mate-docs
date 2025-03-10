---
title: Clear Format
order: 4
---

# Clear Format

## Function Description

:::tip 
Clear cell format
:::

![Clear Format](../../../../assets/Clear%20Format_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Instance**`TWorkbookApplication`: Enter an Excel instance obtained through the function 'Open or New Excel'/'Get currently active Excel object'

- **Region Type**`Integer`: Set the formatting region

- **Unit Row Number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row

- **Unit Column Name**`string`: Enter the column name, starting from A or 1, -N represents the nth to last column

- **Starting Row Number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row

- **Starting Column Name**`string`: Enter the column name, starting from A or 1, -N represents the nth to last column

- **Ending Row Number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row

- **Ending Column Name**`string`: Enter the column name, starting from A or 1, -N represents the nth to last column

- **Row Number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row

- **Column Name**`string`: Enter the column name, starting from A or 1, -N represents the nth to last column

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

