---
title: Output Data Row
order: 21
---

# Output Data Row

## Function Description

:::tip 
Output a data row
:::

![Output Data Row](../../../assets/Output%20Data%20Row_command.png)

## Configuration Item Description

### General

**Command Input**

- **Data Table**`TDataTable`: The data table object from which the row will be output.

- **Row Index**`Integer`: Row Index

- **Data Row**`TDataRow`: The data row object to be output. If this property is set, the 'Row Index' property is ignored.


**Command Output**

- **Row Data**`string`: Row data

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

