---
title: Delete Excel Column
---

# Delete Excel Column

## Function Description

:::tip 
Delete column
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet Name`string`**: If empty, it defaults to the currently active sheet

- **Column Name`string`**: Column name. Starts from A

- **Excel Object`TWorkbookApplication`**: Enter an Excel object obtained through the function 'Open or New Excel'/'Get currently active Excel object'


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

