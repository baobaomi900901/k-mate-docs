---
title: IF Folder Exists
order: 3
---

# IF Folder Exists

## Function Description

:::tip 
Check if folder exists
:::

![IF Folder Exists](../../assets/IF%20Folder%20Exists_command.png)

## Configuration Item Description

### General

**Command Input**

- **Folder Path**`string`: Enter or select folder path

- **Folder existence**`Integer`: Select whether the expected folder exists


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

