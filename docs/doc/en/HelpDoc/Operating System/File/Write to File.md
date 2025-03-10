---
title: Write to File
order: 7
---

# Write to File

## Function Description

:::tip 
Write text content to an existing file, if the file does not exist, it will be automatically created
:::

![Write to File](../../../assets/Write%20to%20File_command.png)

## Configuration Item Description

### General

**Command Input**

- **File Path**`string`: The path of the file to write to

- **File Content**`string`: The content to be written

- **Write Method**`Integer`: How to handle the file if it already exists

- **New Line Append**`Boolean`: Whether to add a new line before appending, if no, append directly after the existing content

- **File Encoding**`Integer`: Select text encoding


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

