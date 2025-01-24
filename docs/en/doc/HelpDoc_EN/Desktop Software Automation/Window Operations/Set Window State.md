---
title: Set Window State
---

# Set Window State

## Function Description

:::tip 
Perform operations to restore, maximize, or minimize a window
:::

## Configuration Item Description

### General

**Command Input**

- **Window State to Set**`Integer`: Set the window state

- **Window Handle**`Integer`: Enter a window handle

- **Match by Wildcard**`Boolean`: Match by wildcard

- **Window Class Name**`string`: Enter window class name

- **Add Window Type**`Boolean`: Add window type

- **Window Title**`string`: Enter window title

- **Operation Target**`TTarget`: Select window element

- **Window Object**`TWinObj`: The window object obtained

- **Method of Getting Window**`Integer`: Select the method to get the window


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

