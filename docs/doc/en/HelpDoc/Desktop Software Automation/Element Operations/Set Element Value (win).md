---
title: Set Element Value (win)
order: 6
---

# Set Element Value (win)

## Function Description

:::tip 
Set the value of an element in the window, typically for input and select elements
:::

![Set Element Value (win)](../../../assets/Set%20Element%20Value%20(win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window object**`TWinObj`: Enter a captured window object

- **Operation target**`TTarget`: Select the window element to operate on

- **Element value**`string`: Fill in the value to set for the element


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Wait for element to exist (milliseconds)**`Integer`: Timeout for waiting for the target element to exist

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

