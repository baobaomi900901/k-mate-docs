---
title: Move Folder
order: 8
---

# Move Folder

## Function Description

:::tip 
Move the source folder to the target folder
:::

![Move Folder](../../../assets/Move%20Folder_command.png)

## Configuration Item Description

### General

**Command Input**

- **Source Folder Path**`string`: Enter or select the path of the folder to be moved

- **Target Folder**`string`: Enter the target folder path


**Command Output**

- **Moved Folder Path**`string`: Enter a name to save the path of the moved folder

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

