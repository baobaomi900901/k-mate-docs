---
title: Cycle Similar Elements (win)
---

# Cycle Similar Elements (win)

## Function Description

:::tip 
Sequentially cycle through each item in the similar elements list of the desktop software window for automation operations.
:::

## Configuration Item Description

### General

**Command Input**

- **Output Loop Item Position`Boolean`**: Whether to output the position of the loop item.

- **Attribute Name`string`**: Element attribute name.

- **Element Operation`Integer`**: Operate on element information.

- **Operation Target`TTarget`**: Select the window element that needs to be operated on.

- **Window Object`TWinObj`**: Enter a captured window object.


**Command Output**

- **Save Current Loop Position To`Integer`**: Save the count of obtained similar elements.

- **Save Current Loop Item To`TUiElement`**: Specify a variable name to store current loop item information.

### Advanced

- **Wait for Element to Exist (ms)`Integer`**: Timeout time for waiting for the target associated element to exist.

- **Loop End Position`Integer`**: Loop end position, -1 is the last item.

- **Loop Start Position`Integer`**: Loop start position, 0 is the first item.


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

