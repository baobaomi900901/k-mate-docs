---
title: Clear Excel Content
order: 9
---

# Clear Excel Content

## Function Description

:::tip 
Clear content or format from the Excel file
:::

![Clear Excel Content](../../../../assets/Clear%20Excel%20Content_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or create new Excel' / 'Get currently active Excel object'

- **Clear Content**`Integer`: Choose to clear content/format/all

- **Clear Method**`Integer`: Choose to clear by cell/row/column/range

- **Unit Row Number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row

- **Unit Column Name**`string`: Enter the column name, starting from A or 1, -N represents the nth to last column

- **Row Number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row

- **Column Name**`string`: Enter the column name, starting from A or 1, -N represents the nth to last column

- **Start Row Number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row

- **Start Column Name**`string`: Enter the column name, starting from A or 1, -N represents the nth to last column

- **End Row Number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row

- **End Column Name**`string`: Enter the column name, starting from A or 1, -N represents the nth to last column

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

