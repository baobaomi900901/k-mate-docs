---
title: FTP File Download
order: 5
---

# FTP File Download

## Function Description

:::tip 
Download one or more files from the specified path of the FTP remote server to a local path
:::

![FTP File Download](../../../assets/FTP%20File%20Download_command.png)

## Configuration Item Description

### General

**Command Input**

- **FTP Connection Object**`TFTP`: The FTP object from which files need to be downloaded

- **Remote File**`string`: The file or list of files to be downloaded, separated by '|' for multiple files

- **Local Path**`string`: The local path where the remote files will be downloaded

- **Download Mode**`Integer`: How to handle existing files in the local folder when downloading the remote files


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

