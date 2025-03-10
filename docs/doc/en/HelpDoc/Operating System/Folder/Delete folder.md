---
title: Delete folder
order: 5
---

# Delete folder

## Function Description

:::tip 
Delete the folder, including all subfolders and files within it
:::

![Delete folder](../../../assets/Delete folder_command.png)

## Configuration Item Description

### General

**Command Input**

- **Folder path**`string`: Path of the folder to be deleted


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

