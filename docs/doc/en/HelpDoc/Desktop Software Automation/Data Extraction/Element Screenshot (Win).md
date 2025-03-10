---
title: Element Screenshot (Win)
order: 1
---

# Element Screenshot (Win)

## Function Description

:::tip 
Take a screenshot of an element in the desktop software and save it to a specified file
:::

![Element Screenshot (Win)](../../../assets/Element%20Screenshot%20(Win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window object**`TWinObj`: Enter a captured window object

- **Operation target**`TTarget`: Select the window element

- **Save image to clipboard**`Boolean`: Save image to clipboard

- **Save folder**`string`: The folder where the screenshot will be saved

- **Use automatic random file name**`Boolean`: Automatically generate a unique file name

- **Custom file name**`string`: Custom file name


**Command Output**

- **Screenshot save location**`string`: Specify a variable to save the screenshot location

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

