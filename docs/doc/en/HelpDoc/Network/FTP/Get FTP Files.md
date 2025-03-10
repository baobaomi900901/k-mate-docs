---
title: Get FTP Files
order: 3
---

# Get FTP Files

## Function Description

:::tip 
Retrieve all files and subdirectories from the current path of the FTP server
:::

![Get FTP Files](../../../assets/Get FTP Files_command.png)

## Configuration Item Description

### General

**Command Input**

- **FTP Connection Object**`TFTP`: The FTP connection object from which the folder information needs to be retrieved


**Command Output**

- **Save returned files to**`TList<String>`: Specify a variable name that will store the returned files and subfolder data

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution


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

