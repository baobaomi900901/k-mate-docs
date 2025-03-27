---
title: Filter Data Table
order: 15
---

# Filter Data Table

## Function Description

:::tip 
Filter the data table by specifying criteria in 'Filter'. Retain or delete rows/columns based on specified logical conditions.
:::

![Filter Data Table](../../../assets/Filter%20Data%20Table_command.png)

## Configuration Item Description

### General

**Command Input**

- **Data Table**`TDataTable`: The data table to be filtered.

- **Filter**`String`: Set filtering criteria, which can be achieved by combining or setting multiple criteria.

- **Duplicate**`Boolean`: When data is duplicated, data deduplication

- **Optimization Mode**`Boolean`: Optimize and switch between retain and remove filter modes

- **Preview in Data Table**`Boolean`: Preview in Data Table

- **IsPrintRes**`Boolean`: 


**Command Output**

- **Output Data Table**`TDataTable`: The variable of the generated filtered data table.

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

