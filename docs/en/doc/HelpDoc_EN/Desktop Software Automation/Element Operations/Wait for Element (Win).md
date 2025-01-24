---
title: Wait for Element (Win)
---

# Wait for Element (Win)

## Function Description

:::tip 
Wait for an element in the window to appear or disappear before proceeding with the next steps
:::

## Configuration Item Description

### General

**Command Input**

- **Timeout (ms)`Integer`**: Set the maximum wait time

- **Set Timeout`Boolean`**: The process will automatically continue after the timeout

- **Wait State`Integer`**: Select the wait state

- **Target Element`TTarget`**: Select the window element to operate on

- **Window Object`TWinObj`**: Enter a captured window object


**Command Output**

- **Wait Result`Boolean`**: Return success if True, otherwise wait for timeout


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

