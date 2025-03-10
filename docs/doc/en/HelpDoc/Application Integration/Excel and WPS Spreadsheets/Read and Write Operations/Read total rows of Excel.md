---
title: Read total rows of Excel
order: 1
---

# Read total rows of Excel

## Function Description

:::tip 
Read total rows of Excel
:::

![Read total rows of Excel](../../../../assets/Read%20total%20rows%20of%20Excel_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or create new Excel' / 'Get currently active Excel object'

- **Sheet name**`string`: If empty, it defaults to the currently active sheet


**Command Output**

- **Save total rows to**`Integer`: Save total rows

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

