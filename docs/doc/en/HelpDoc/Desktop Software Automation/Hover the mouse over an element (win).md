---
title: Hover the mouse over an element (win)
order: 4
---

# Hover the mouse over an element (win)

## Function Description

:::tip 
Hover the mouse over an element in the window
:::

![Hover the mouse over an element (win)](../../assets/Hover the mouse over an element (win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: The acquired window object

- **Operation Target**`TTarget`: Select the window element to operate on


**Command Output**

No output for the current command

### Advanced

- **Send Window Messages**`Boolean`: Send window messages to hover

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Delay After Execution (ms)**`Integer`: Time to continue waiting after the command execution is completed

- **Position of the target text**`Integer`: Supports clicking at the center of the element (center point of the element's rectangular area), a random position (automatically specifying a point within the element's rectangular range), and a custom position (manually specifying the target point)

- **Custom**`Integer`: Custom position

- **Horizontal Translation**`Integer`: Enter a positive number to move right, and a negative number to move left

- **Vertical Translation**`Integer`: Enter a positive number to move down, and a negative number to move up

- **Wait for the element to exist (ms)**`Integer`: Timeout for waiting for the element to exist


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

