---
title: Wait for file
order: 9
---

# Wait for file

## Function Description

:::tip 
Wait for the file to be created or deleted
:::

![Wait for file](../../../assets/Wait for file_command.png)

## Configuration Item Description

### General

**Command Input**

- **File path**`string`: Enter the file path

- **Wait for the file to be**`Integer`: Select the desired file state

- **Set timeout**`Boolean`: Set the timeout duration

- **Timeout duration (milliseconds)**`Integer`: Enter the timeout duration (milliseconds)


**Command Output**

- **Wait result**`Boolean`: If True, wait was successful; otherwise, the wait timed out

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

