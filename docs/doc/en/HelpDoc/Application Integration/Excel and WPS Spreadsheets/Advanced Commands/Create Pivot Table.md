---
title: Create Pivot Table
order: 7
---

# Create Pivot Table

## Function Description

:::tip 
Create a pivot table from the specified range
:::

![Create Pivot Table](../../../../assets/Create Pivot Table_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Instance**`TWorkbookApplication`: Enter an Excel instance obtained through the function 'Open or New Excel'/'Get currently active Excel object'

- **Range**`string`: Specify the location range for creating the pivot table

- **Table Name**`string`: The name of the data pivot table to be created

- **Sheet Name**`string`: The name of the worksheet in the workbook

- **Source Table Name**`string`: The name of the source table from which to create the pivot table

- **Source Range**`string`: The source data range from which you want to create the pivot table


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

