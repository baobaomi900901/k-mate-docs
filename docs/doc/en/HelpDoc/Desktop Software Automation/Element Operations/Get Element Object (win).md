---
title: Get Element Object (win)
order: 7
---

# Get Element Object (win)

## Function Description

:::tip 
Get the specific data item of an element in the window, which can be used for content extraction and value setting automation operations
:::

![Get Element Object (win)](../../../assets/Get%20Element%20Object%20(win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window object**`TWinObj`: Enter a captured window object

- **Operation target**`TTarget`: Select the window element to operate on

- **Associated parent element**`Boolean`: Whether to associate with the parent element

- **Parent element**`TTarget`: Search for the target element within the specified parent element


**Command Output**

- **Save element object to**`TUiElement`: This variable is used to save the obtained element object

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

