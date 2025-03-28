---
title: Open folder
order: 2
---

# Open folder

## Function Description

:::tip 
Open the folder. If it's a file path, the file will be selected after the folder is opened
:::

![Open folder](../../../assets/Open%20folder_command.png)

## Configuration Item Description

### General

**Command Input**

- **File (folder) path**`string`: Path of the folder to open


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

