---
title: Wait for file
---

# Wait for file

## Function Description

:::tip 
Wait for the file to be created or deleted
:::

## Configuration Item Description

### General

**Command Input**

- **Timeout duration (milliseconds)**`Integer`: Enter the timeout duration (milliseconds)

- **Set timeout**`Boolean`: Set the timeout duration

- **Wait for the file to be**`Integer`: Select the desired file state

- **File path**`string`: Enter the file path


**Command Output**

- **Wait result**`Boolean`: If True, wait was successful; otherwise, the wait timed out


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

