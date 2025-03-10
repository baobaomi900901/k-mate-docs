---
title: Set Row Height
order: 5
---

# Set Row Height

## Function Description

:::tip 
Set row height
:::

![Set Row Height](../../../../assets/Set Row Height_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Instance**`TWorkbookApplication`: Enter an Excel instance obtained through the function 'Open or New Excel'/'Get currently active Excel object'

- **Row Number**`string`: Enter line number, use 1,2,3 or 1:3 for multiple lines

- **Mode**`Integer`: Choose the method to set the row height

- **Row Height**`Integer`: Enter the row height

- **Sheet Name**`string`: Worksheet name


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution


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

