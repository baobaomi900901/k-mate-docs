---
title: FTP Delete Folder
---

# FTP Delete Folder

## Function Description

:::tip 
Delete a folder on the remote server
:::

## Configuration Item Description

### General

**Command Input**

- **Remote Folder**`string`: The name of the folder to be deleted

- **FTP Connection Object**`TFTP`: The FTP object from which the folder will be deleted


**Command Output**

No output for the current command


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

