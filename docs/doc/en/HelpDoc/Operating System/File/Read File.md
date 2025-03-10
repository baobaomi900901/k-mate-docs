---
title: Read File
order: 6
---

# Read File

## Function Description

:::tip 
Read the content of the file at the specified path
:::

![Read File](../../../assets/Read%20File_command.png)

## Configuration Item Description

### General

**Command Input**

- **File Path**`string`: The path of the file to read

- **Read Method**`Integer`: The format of the file content

- **File Encoding**`Integer`: Select text encoding


**Command Output**

- **Save File Content to**`string`: Enter a name to save the file content

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

