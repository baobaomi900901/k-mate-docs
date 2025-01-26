---
title: Wait for Load Completion (SAP)
---

# Wait for Load Completion (SAP)

## Function Description

:::tip 
Wait for the SAP to load completely
:::

## Configuration Item Description

### General

**Command Input**

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout for waiting for the target element to exist


**Command Output**

- **Wait Result**`Boolean`: Specify a variable to save whether the SAP has loaded within the specified time


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

