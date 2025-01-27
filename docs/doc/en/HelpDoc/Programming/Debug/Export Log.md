---
title: Export Log
---

# Export Log

## Function Description

:::tip 
Export log content to a file
:::

## Configuration Item Description

### General

**Command Input**

- **File Name**`string`: Specify the file name

- **Folder Path**`string`: Specify the folder path


**Command Output**

- **File Path**`string`: Specify a variable name, this variable will be used to store the location of the exported file


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

