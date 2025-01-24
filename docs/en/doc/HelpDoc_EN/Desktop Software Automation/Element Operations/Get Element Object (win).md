---
title: Get Element Object (win)
---

# Get Element Object (win)

## Function Description

:::tip 
Get the specific data item of an element in the window, which can be used for content extraction and value setting automation operations
:::

## Configuration Item Description

### General

**Command Input**

- **Parent element**`TTarget`: Search for the target element within the specified parent element

- **Associated parent element**`Boolean`: Whether to associate with the parent element

- **Operation target**`TTarget`: Select the window element to operate on

- **Window object**`TWinObj`: Enter a captured window object


**Command Output**

- **Save element object to**`TUiElement`: This variable is used to save the obtained element object

### Advanced

- **Wait for element to exist (milliseconds)**`Integer`: Timeout for waiting for the target element to exist


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

