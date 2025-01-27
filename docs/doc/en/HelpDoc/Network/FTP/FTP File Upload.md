---
title: FTP File Upload
---

# FTP File Upload

## Function Description

:::tip 
Upload one or more local files to the FTP remote service path
:::

## Configuration Item Description

### General

**Command Input**

- **Upload Mode**`Integer`: How to handle existing files on the remote server when uploading the files

- **Local File**`string`: The local file or list of files to be uploaded, separated by '|' for multiple files

- **Remote Path**`string`: The remote path where the local files will be uploaded

- **FTP Connection Object**`TFTP`: The FTP object to which the files will be uploaded


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

