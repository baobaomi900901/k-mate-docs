---
title: Filter
order: 12
---

# Filter

## Function Description

:::tip 
Filter the worksheet by column.
:::

![Filter](../../../../assets/Filter_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Instance**`TWorkbookApplication`: Input an Excel instance obtained through 'Open or Create Excel'/'Get currently active Excel instance' function

- **Sheet name**`string`: If left blank, it defaults to the currently activated sheet

- **Position of column**`Integer`: The positions of the worksheet columns that need to be filtered, starting from 1

- **Filter options**`string`: Enter in list format, for example [Option 1, Option 2]

- **Text type output**`Boolean`: When encountering an error when a cell is of a complex type (conversion failure), check this option and output it directly as a string value. Default: Value:  The contents of the cell return values of different types (Variant type). Text:  Return the text in the specified object. String type

- **Filter operations**`Integer`: Select the filtering operation to be performed

- **Use Column Header**`Boolean`: After checking, use the first column as the column header after transposition.

- **Preview in Data Table**`Boolean`: Preview in Data Table


**Command Output**

- **DataTable**`TDataTable`: Return the filtered data table

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

