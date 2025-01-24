---
title: Element Screenshot (Win)
---

# Element Screenshot (Win)

## Function Description

:::tip 
Take a screenshot of an element in the desktop software and save it to a specified file
:::

## Configuration Item Description

### General

**Command Input**

- **Overwrite file if it exists**`Boolean`: Overwrite file if it exists

- **Custom file name**`string`: Custom file name

- **Use automatic random file name**`Boolean`: Automatically generate a unique file name

- **Save folder**`string`: The folder where the screenshot will be saved

- **Save image to clipboard**`Boolean`: Save image to clipboard

- **Operation target**`TTarget`: Select the window element

- **Window object**`TWinObj`: Enter a captured window object


**Command Output**

- **Screenshot save location**`string`: Specify a variable to save the screenshot location

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

