---
title: IF File Exists
order: 2
---

# IF File Exists

## Function Description

:::tip 
Check if the file exists
:::

![IF File Exists](../../assets/IF File Exists_command.png)

## Configuration Item Description

### General

**Command Input**

- **File Path**`string`: Enter or select the file path

- **Does the file exist**`Integer`: Select the expected file existence status


**Command Output**

No output for the current command


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

