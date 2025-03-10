---
title: Output Data Table
order: 22
---

# Output Data Table

## Function Description

:::tip 
Write the data table to a string in CSV format.
:::

![Output Data Table](../../../assets/Output Data Table_command.png)

## Configuration Item Description

### General

**Command Input**

- **Data Table**`TDataTable`: The data table object to be written to the string.


**Command Output**

- **Text**`string`: The data table output as a string.


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

