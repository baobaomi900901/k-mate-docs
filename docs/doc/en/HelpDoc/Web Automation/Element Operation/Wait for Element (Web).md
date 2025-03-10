---
title: Wait for Element (Web)
order: 2
---

# Wait for Element (Web)

## Function Description

:::tip 
Wait for the specified element on the web page to appear or disappear before proceeding with the next steps
:::

![Wait for Element (Web)](../../../assets/Wait for Element (Web)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Enter a web page object obtained or created by the 'Open Web Page' function

- **Target Element**`TTarget`: Select the web element you want to operate on

- **Wait State**`Integer`: Select the wait state

- **Set Timeout**`Boolean`: Set the wait timeout period; the process will continue automatically if it times out

- **Timeout (Milliseconds)**`Integer`: Set the maximum wait time


**Command Output**

- **Wait Result**`Boolean`: If true, the wait was successful; otherwise, it timed out

### Advanced

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution


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

