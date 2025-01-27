---
title: Compress file(s) or folder(s)
---

# Compress file(s) or folder(s)

## Function Description

:::tip 
Used to compress files/folders
:::

## Configuration Item Description

### General

**Command Input**

- **Save compressed file to**`string`: Enter the save path for the compressed file (including file extension), supporting common compression formats such as zip, rar, 7z, etc.

- **Compression method**`Integer`: Set the compression level

- **Password**`string`: Enter a password; leave blank if no password is set

- **File(s)/folder to compress**`string`: Enter or select the path of the file(s)/folder to compress, separate multiple paths with '|'


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

