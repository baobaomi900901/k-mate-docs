---
title: IF window contains
order: 7
---

# IF window contains

## Function Description

:::tip 
Check if the specified element is contained within the specified window
:::

![IF window contains](../../assets/IF window contains_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window object**`TWinObj`: Select a window object

- **Check if the specified window contains**`Integer`: Check if the specified window contains a particular element

- **Target**`TTarget`: Select the desktop software element to operate on


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

