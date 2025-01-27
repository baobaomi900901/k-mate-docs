---
title: Switch Input Method
---

# Switch Input Method

## Function Description

:::tip 
Switch the system input method, requires administrator privileges
:::

## Configuration Item Description

### General

**Command Input**

- **Switch to**`string`: Input method name, usually one of the names returned by the 'Get Input Method List' function


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

