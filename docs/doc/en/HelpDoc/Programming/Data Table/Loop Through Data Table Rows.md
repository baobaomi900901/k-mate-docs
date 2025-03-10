---
title: Loop Through Data Table Rows
order: 20
---

# Loop Through Data Table Rows

## Function Description

:::tip 
Loop through each row in the data table.
:::

![Loop Through Data Table Rows](../../../assets/Loop Through Data Table Rows_command.png)

## Configuration Item Description

### General

**Command Input**

- **Data Table**`TDataTable`: The data table object to be looped through.


**Command Output**

- **Row Object**`TDataRow`: The output row object.

- **Index**`Integer`: The output row index.


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

