---
title: Close software window
---

# Close software window

## Function Description

:::tip 
This action will close the specified window
:::

## Configuration Item Description

### General

**Command Input**

- **Window handle**`Integer`: Enter a window handle

- **Match using wildcard**`Boolean`: Match using wildcard

- **Window class name**`string`: Enter the window class name

- **Add window type**`Boolean`: Add window type

- **Window title**`string`: Enter the window title

- **Operation target**`TTarget`: Select the window element

- **Window object**`TWinObj`: Enter a captured window object

- **Method to get window**`Integer`: Select the method to get the window


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

