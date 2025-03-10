---
title: Catch
order: 2
---

# Catch

## Function Description

:::tip 
Execute when the try fails
:::

![Catch](../../../assets/Catch_command.png)

## Configuration Item Description

### General

**Command Input**

No input for the current command


**Command Output**

- **Error Information**`string`: Enter a name to store the error information in a variable. The error message will be saved to this variable if the command fails


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

