---
title: Clear folder
order: 6
---

# Clear folder

## Function Description

:::tip 
Delete all files and subfolders within the folder, but keep the folder itself
:::

![Clear folder](../../../assets/Clear folder_command.png)

## Configuration Item Description

### General

**Command Input**

- **Folder path**`string`: Path of the folder to be cleared


**Command Output**

No output for the current command

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

