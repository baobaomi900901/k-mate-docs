---
title: Insert Blank Column
order: 15
---

# Insert Blank Column

## Function Description

:::tip 
Insert a blank column in the Excel table
:::

![Insert Blank Column](../../../../assets/Insert%20Blank%20Column_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or New Excel'/'Get currently active Excel object'

- **Before which column**`string`: Enter the column name, starting from A or 1, -N represents the nth to last column

- **How many columns to insert**`Integer`: How many blank columns to insert

- **Sheet Name**`string`: If empty, it defaults to the currently active sheet


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

