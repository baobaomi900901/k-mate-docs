---
title: Click Element (web)
---

# Click Element (web)

## Function Description

:::tip 
Click on a button, link or any other element in the web page
:::

## Configuration Item Description

### General

**Command Input**

- **Operation Target**`TTarget`: The web element to be operated on

- **Webpage Object**`TBrowser`: Enter a webpage object that has been obtained or created by the 'Open Webpage' function


**Command Output**

No output for the current command

### Advanced

- **Wait for Element to Exist (ms)**`Integer`: Timeout for waiting for the target element to exist

- **Vertical Translation**`Integer`: Enter a positive number to move down, a negative number to move up

- **Horizontal Translation**`Integer`: Enter a positive number to move right, a negative number to move left

- **Custom**`Integer`: Custom position

- **Target Text Position**`Integer`: Supports clicking at the center position of the element (center point of the element's rectangular area), random position (automatically specify a point within the rectangular range of the element), and custom position (manually specify the target point).

- **Delay After Execution (ms)**`Integer`: Time to continue waiting after the command execution is completed

- **Keyboard Modifier Keys**`Integer`: Keyboard function keys that need to be pressed

- **Mouse Button**`Integer`: Trigger the clicked mouse button

- **Click Method**`Integer`: Single-click or double-click

- **Show Mouse Movement Trail**`Boolean`: Whether to show the mouse movement trail or not

- **Send Window Messages**`Boolean`: Directly simulate clicks through the operating system's messaging mechanism, bypassing the browser's event system, which is faster but may not trigger all interactive logic within the webpage.

- **Simulate Human Click**`Boolean`: Simulate user click behavior, trigger the browser's event mechanism, and ensure consistency with real operations. Suitable for scenarios requiring simulation of user interaction.


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

