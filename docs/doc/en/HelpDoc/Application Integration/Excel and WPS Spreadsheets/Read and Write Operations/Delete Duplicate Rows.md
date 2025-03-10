---
title: Delete Duplicate Rows
order: 11
---

# Delete Duplicate Rows

## Function Description

:::tip 
Implement the function of deleting duplicate rows in Excel
:::

![Delete Duplicate Rows](../../../../assets/Delete%20Duplicate%20Rows_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or New Excel'/'Get currently active Excel object'

- **Column Name with Duplicate Values**`string`: Enter the column name (supports A or 1), use A,B,C or A:C for multiple columns, if not filled in, it means all columns

- **Starting Row Number**`Integer`: Optional, defaults to the first line, -N represents the Nth to last row

- **Sheet Name**`string`: If empty, it defaults to the currently active sheet

- **Data Contains Header**`Boolean`: When checked, the first row is a header and does not participate in the duplicate calculation


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

