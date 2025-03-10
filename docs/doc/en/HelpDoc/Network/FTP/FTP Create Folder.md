---
title: FTP Create Folder
order: 11
---

# FTP Create Folder

## Function Description

:::tip 
Create a new folder on the remote server
:::

![FTP Create Folder](../../../assets/FTP%20Create%20Folder_command.png)

## Configuration Item Description

### General

**Command Input**

- **FTP**`TFTP`: 

- **New Folder**`string`: The name of the new folder to be created


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

