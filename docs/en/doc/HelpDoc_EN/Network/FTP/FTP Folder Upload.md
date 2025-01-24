---
title: FTP Folder Upload
---

# FTP Folder Upload

## Function Description

:::tip 
Upload one or more local folders to the FTP remote service path
:::

## Configuration Item Description

### General

**Command Input**

- **Upload Mode**`Integer`: How to handle existing sub-files on the remote server when uploading folders

- **Local Files**`string`: The local folder or list of folders to be uploaded, separated by '|' for multiple folders

- **Remote Path**`string`: The remote path where the local folder will be uploaded

- **FTP Connection Object**`TFTP`: The FTP object to which the folder will be uploaded


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

