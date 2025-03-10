---
title: FTP File Rename
order: 10
---

# FTP File Rename

## Function Description

:::tip 
Rename a file on the remote server
:::

![FTP File Rename](../../../assets/FTP%20File%20Rename_command.png)

## Configuration Item Description

### General

**Command Input**

- **FTP Connection Object**`TFTP`: The FTP object from which the file will be renamed

- **Remote File**`string`: The name of the remote file to be renamed

- **New Name**`string`: The new name for the remote file


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

