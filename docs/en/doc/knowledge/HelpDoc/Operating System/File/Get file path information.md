---
title: Get file path information
---

# Get file path information

## Function Description

:::tip 
Retrieve the root directory, parent directory, file name, base file name, and file extension of the file path
:::

## Configuration Item Description

### General

**Command Input**

- **File path**`string`: The file path to retrieve


**Command Output**

- **File path information**`TList<String>`: Enter a name to save the file path information


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

