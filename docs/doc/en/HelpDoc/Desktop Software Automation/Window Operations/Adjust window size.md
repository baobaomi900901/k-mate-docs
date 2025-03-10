---
title: Adjust window size
order: 7
---

# Adjust window size

## Function Description

:::tip 
Adjust the window size
:::

![Adjust window size](../../../assets/Adjust%20window%20size_command.png)

## Configuration Item Description

### General

**Command Input**

- **Method to get window**`Integer`: Select the method to get the window

- **Window object**`TWinObj`: Enter a captured window object

- **Operation target**`TTarget`: Select the window element

- **Window title**`string`: Enter the window title

- **Add window type**`Boolean`: Add window type

- **Window class name**`string`: Enter the window class name

- **Match using wildcard**`Boolean`: Match using wildcard

- **Window handle**`Integer`: Enter a window handle

- **Width**`Integer`: Window width

- **Height**`Integer`: Window height


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

