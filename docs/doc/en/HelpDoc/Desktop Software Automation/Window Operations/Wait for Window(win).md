---
title: Wait for Window(win)
---

# Wait for Window(win)

## Function Description

:::tip 
Wait for the window state to change
:::

## Configuration Item Description

### General

**Command Input**

- **Timeout (ms)**`Integer`: Please enter the maximum waiting time

- **Set timeout**`Boolean`: Whether to set a timeout

- **Wait state**`Integer`: Choose the window state to wait for

- **Window type**`string`: Enter the window type

- **Add window type**`Boolean`: Add window type

- **Window title**`string`: Enter the window title

- **Operation target**`TTarget`: Select a window element

- **Method to get the window**`Integer`: Choose the method to get the window


**Command Output**

- **waitResult**`Boolean`: 


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

