---
title: Get System Folder Path
order: 10
---

# Get System Folder Path

## Function Description

:::tip 
Get the system folder path
:::

![Get System Folder Path](../../../assets/Get%20System%20Folder%20Path_command.png)

## Configuration Item Description

### General

**Command Input**

- **System Folder Name**`Integer`: Select the system folder name


**Command Output**

- **System Folder Path**`string`: Enter a name to save the system folder path

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

