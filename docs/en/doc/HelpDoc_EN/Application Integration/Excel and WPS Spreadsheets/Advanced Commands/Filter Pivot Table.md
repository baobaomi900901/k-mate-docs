---
title: Filter Pivot Table
---

# Filter Pivot Table

## Function Description

:::tip 
Filter the pivot table
:::

## Configuration Item Description

### General

**Command Input**

- **Filter Value**`Array of string`: Enter the filter value list

- **Selection Type**`Integer`: You can choose between All Selection and Partial Selection

- **Filter Name**`string`: Enter the filter field name

- **Pivot Table Name or Index**`string`: If there is only one pivot table in a sheet, you can enter 1

- **Sheet Name**`string`: The name of the Sheet where the pivot table is located

- **Excel Instance**`TWorkbookApplication`: Enter an Excel instance obtained through the function 'Open or New Excel'/'Get currently active Excel object'


**Command Output**

No output for the current command


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

