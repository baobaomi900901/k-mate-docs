---
title: Fill input field (web)
order: 5
---

# Fill input field (web)

## Function Description

:::tip 
Enter content in the web input field
:::

![Fill input field (web)](../../assets/Fill%20input%20field%20(web)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Webpage object**`TBrowser`: Input a webpage object obtained or created through the 'Open Webpage' function

- **Operation target**`TTarget`: The web element to be operated on

- **Input text**`string`: The text to be entered

- **Append input**`Boolean`: If checked, the input will be appended to the existing content; otherwise, the content will be cleared and re-entered


**Command Output**

No output for the current command

### Advanced

- **Input method**`Integer`: Method of input

- **Key press delay (ms)**`Integer`: The interval time between two key presses

- **Focus timeout (ms)**`Integer`: Focus timeout period

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Delay after execution (ms)**`Integer`: Time to continue waiting after the command is executed

- **Click element before input**`Boolean`: Click the element before the input action

- **Mouse click position**`Integer`: Supported click positions for the element

- **Custom position**`Integer`: Custom position settings

- **Horizontal translation**`Integer`: Enter a positive number to move right, a negative number to move left

- **Vertical translation**`Integer`: Enter a positive number to move down, a negative number to move up

- **Wait for element existence (ms)**`Integer`: Timeout for waiting for the target input field to exist

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

