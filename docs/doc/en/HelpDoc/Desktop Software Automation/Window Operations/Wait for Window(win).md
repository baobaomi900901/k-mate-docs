---
title: Wait for Window(win)
order: 5
---

# Wait for Window(win)

## Function Description

:::tip 
Wait for the window state to change
:::

![Wait for Window(win)](../../../assets/Wait for Window(win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Method to get the window**`Integer`: Choose the method to get the window

- **Operation target**`TTarget`: Select a window element

- **Window title**`string`: Enter the window title

- **Add window type**`Boolean`: Add window type

- **Window type**`string`: Enter the window type

- **Wait state**`Integer`: Choose the window state to wait for

- **Set timeout**`Boolean`: Whether to set a timeout

- **Timeout (ms)**`Integer`: Please enter the maximum waiting time


**Command Output**

- **waitResult**`Boolean`: 

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

