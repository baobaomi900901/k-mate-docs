---
title: Hover over element (web)
---

# Hover over element (web)

## Function Description

:::tip 
Hover over an element on the web page
:::

## Configuration Item Description

### General

**Command Input**

- **Operation target**`TTarget`: The webpage element to be operated on

- **Webpage object**`TBrowser`: Enter a webpage object that has been obtained or created with the 'Open Webpage' function


**Command Output**

No output for the current command

### Advanced

- **Wait for element to exist (ms)**`Integer`: Timeout for waiting for the target element to exist

- **Vertical translation**`Integer`: Enter a positive number to move down, a negative number to move up

- **Horizontal translation**`Integer`: Enter a positive number to move right, a negative number to move left

- **Custom**`Integer`: Custom position

- **Position of the target text**`Integer`: Supported positions for clicking elements

- **Delay after execution (ms)**`Integer`: Time to continue waiting after the command execution is completed

- **Send window messages**`Boolean`: Directly simulate hovering through the operating system's messaging mechanism, bypassing the browser's event system. Execution is faster, but may not trigger all interactive logic within the webpage.

- **Simulate manual hover**`Boolean`: Simulate user hover behavior, trigger the browser's event mechanism to ensure consistency with real operations. Suitable for scenarios requiring simulation of user interaction.


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

