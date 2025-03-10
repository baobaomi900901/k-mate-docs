---
title: Extract file(s) or folder(s)
order: 2
---

# Extract file(s) or folder(s)

## Function Description

:::tip 
Used to extract files/folders
:::

![Extract file(s) or folder(s)](../../../assets/Extract file(s) or folder(s)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Compressed file path**`string`: Enter or select the path of the file to extract

- **Password**`string`: Enter the password; leave blank if there is no password

- **Decompressed folder path**`string`: Please enter the path for the extracted folder

- **Create folder with the same name**`Boolean`: Extract to a folder with the same name as the compressed file


**Command Output**

- **Save folder path to**`string`: Specify a variable name to store the folder path

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

