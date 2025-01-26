---
title: Hover the mouse over an element (win)
---

# Hover the mouse over an element (win)

## Function Description

:::tip 
Hover the mouse over an element in the window
:::

## Configuration Item Description

### General

**Command Input**

- **Operation Target**`TTarget`: Select the window element to operate on

- **Window Object**`TWinObj`: The acquired window object


**Command Output**

No output for the current command

### Advanced

- **Wait for the element to exist (ms)**`Integer`: Timeout for waiting for the element to exist

- **Vertical Translation**`Integer`: Enter a positive number to move down, and a negative number to move up

- **OoffsetX**`Integer`: 

- **Custom**`Integer`: Custom position

- **Position of the target text**`Integer`: Supports clicking at the center of the element (center point of the element's rectangular area), a random position (automatically specifying a point within the element's rectangular range), and a custom position (manually specifying the target point)

- **Delay After Execution (ms)**`Integer`: Time to continue waiting after the command execution is completed

- **Send Window Messages**`Boolean`: Send window messages to hover


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

