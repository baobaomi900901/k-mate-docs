---
title: Write to File
---

# Write to File

## Function Description

:::tip 
Write text content to an existing file, if the file does not exist, it will be automatically created
:::

## Configuration Item Description

### General

**Command Input**

- **File Encoding`Integer`**: Select text encoding

- **New Line Append`Boolean`**: Whether to add a new line before appending, if no, append directly after the existing content

- **Write Method`Integer`**: How to handle the file if it already exists

- **File Content`string`**: The content to be written

- **File Path`string`**: The path of the file to write to


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

