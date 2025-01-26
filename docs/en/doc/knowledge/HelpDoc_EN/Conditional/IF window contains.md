---
title: IF window contains
---

# IF window contains

## Function Description

:::tip 
Check if the specified element is contained within the specified window
:::

## Configuration Item Description

### General

**Command Input**

- **Target**`TTarget`: Select the desktop software element to operate on

- **Check if the specified window contains**`Integer`: Check if the specified window contains a particular element

- **Window object**`TWinObj`: Select a window object


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

