---
title: Set Element Value (win)
---

# Set Element Value (win)

## Function Description

:::tip 
Set the value of an element in the window, typically for input and select elements
:::

## Configuration Item Description

### General

**Command Input**

- **Element value`string`**: Fill in the value to set for the element

- **Operation target`TTarget`**: Select the window element to operate on

- **Window object`TWinObj`**: Enter a captured window object


**Command Output**

No output for the current command

### Advanced

- **Wait for element to exist (milliseconds)`Integer`**: Timeout for waiting for the target element to exist


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

