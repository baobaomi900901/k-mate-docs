---
title: Read Excel Content
order: 7
---

# Read Excel Content

## Function Description

:::tip 
Read content from an Excel file, supports reading within a rectangular area range.
:::

![Read Excel Content](../../../assets/Read%20Excel%20Content_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Object**`TWorkbookApplication`: Input an Excel object obtained through the function 'Open or New Excel'/'Get Currently Active Excel Object'.

- **Read Method**`Integer`: The method of reading an Excel file.

- **Cell Row Number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row

- **Cell Column Name**`string`: Enter the column name (supports A or 1), -N represents the nth to last column

- **Row Number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row

- **Column Name**`string`: Enter the column name (supports A or 1), -N represents the nth to last column

- **Starting Row Number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row

- **Starting Column Name**`string`: Enter the column name (supports A or 1), -N represents the nth to last column

- **Ending Row Number**`Integer`: Enter the line number, starting from 1, -N represents the nth to last row, Note: Fill in 0 to default to the last row of the worksheet usage scope

- **Ending Column Name**`string`: Enter the column name (supports A or 1), -N represents the nth to last column, Note: Fill in * to default to the last column of the worksheet usage scope

- **Sheet Page Name**`string`: If empty, it defaults to the currently active Sheet page.

- **Output By Type**`Boolean`: After selecting, the output is a string when reading as a cell, a list when reading as a row or column, and a data table when reading as a range

- **Preview in Data Table**`Boolean`: Preview in Data Table


**Command Output**

- **Save Excel Data Object To**`TDataTable`: Save area data content.

### Advanced

- **Clear Space Before and After Cell**`Boolean`: If checked, automatically clears spaces before and after the read content.

- **Add Headers**`Boolean`: After checking, the first row read will be set as the column header, which cannot be duplicated

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

