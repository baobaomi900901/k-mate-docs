---
title: Wait for Element (Win)
order: 2
---

# Wait for Element (Win)

## Function Description

:::tip 
Wait for an element in the window to appear or disappear before proceeding with the next steps
:::

![Wait for Element (Win)](../../../assets/Wait for Element (Win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: Enter a captured window object

- **Target Element**`TTarget`: Select the window element to operate on

- **Wait State**`Integer`: Select the wait state

- **Set Timeout**`Boolean`: The process will automatically continue after the timeout

- **Timeout (ms)**`Integer`: Set the maximum wait time


**Command Output**

- **Wait Result**`Boolean`: Return success if True, otherwise wait for timeout

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

