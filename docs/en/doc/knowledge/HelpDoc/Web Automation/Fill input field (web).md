---
title: Fill input field (web)
---

# Fill input field (web)

## Function Description

:::tip 
Enter content in the web input field
:::

## Configuration Item Description

### General

**Command Input**

- **Append input**`Boolean`: If checked, the input will be appended to the existing content; otherwise, the content will be cleared and re-entered

- **Input text**`string`: The text to be entered

- **Operation target**`TTarget`: The web element to be operated on

- **Webpage object**`TBrowser`: Input a webpage object obtained or created through the 'Open Webpage' function


**Command Output**

No output for the current command

### Advanced

- **Wait for element existence (ms)**`Integer`: Timeout for waiting for the target input field to exist

- **Vertical translation**`Integer`: Enter a positive number to move down, a negative number to move up

- **Horizontal translation**`Integer`: Enter a positive number to move right, a negative number to move left

- **Custom position**`Integer`: Custom position settings

- **Mouse click position**`Integer`: Supported click positions for the element

- **Click element before input**`Boolean`: Click the element before the input action

- **Delay after execution (ms)**`Integer`: Time to continue waiting after the command is executed

- **Focus timeout (ms)**`Integer`: Focus timeout period

- **Key press delay (ms)**`Integer`: The interval time between two key presses

- **Force load US keyboard (ENG)**`Boolean`: Switch to English input method

- **Input contains shortcut keys**`Boolean`: The input content contains shortcut keys

- **Input method**`Integer`: Method of input


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

