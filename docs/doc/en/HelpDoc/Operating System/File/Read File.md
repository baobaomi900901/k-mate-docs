---
title: Read File
---

# Read File

## Function Description

:::tip 
Read the content of the file at the specified path
:::

## Configuration Item Description

### General

**Command Input**

- **File Encoding**`Integer`: Select text encoding

- **Read Method**`Integer`: The format of the file content

- **File Path**`string`: The path of the file to read


**Command Output**

- **Save File Content to**`string`: Enter a name to save the file content


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

