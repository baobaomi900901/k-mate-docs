---
title: Output Data Row
---

# Output Data Row

## Function Description

:::tip 
Output a data row
:::

## Configuration Item Description

### General

**Command Input**

- **Data Row**`TDataRow`: The data row object to be output. If this property is set, the 'Row Index' property is ignored.

- **Row Index**`Integer`: Row Index

- **Data Table**`TDataTable`: The data table object from which the row will be output.


**Command Output**

- **Row Data**`string`: Row data


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

