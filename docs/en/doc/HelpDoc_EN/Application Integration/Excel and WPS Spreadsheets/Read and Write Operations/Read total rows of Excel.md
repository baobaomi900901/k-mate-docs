---
title: Read total rows of Excel
---

# Read total rows of Excel

## Function Description

:::tip 
Read total rows of Excel
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet name`string`**: If empty, it defaults to the currently active sheet

- **Excel object`TWorkbookApplication`**: Enter an Excel object obtained through the function 'Open or create new Excel' / 'Get currently active Excel object'


**Command Output**

- **Save total rows to`Integer`**: Save total rows


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

