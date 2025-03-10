---
title: Click Element (win)
order: 3
---

# Click Element (win)

## Function Description

:::tip 
Click an element in the window, such as a button, link, or any other element
:::

![Click Element (win)](../../assets/Click%20Element%20(win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: The window object obtained

- **Operation Target**`TTarget`: Select the window element to operate on


**Command Output**

No output for the current command

### Advanced

- **Simulate Human Click**`Boolean`: Simulate a human-initiated click event

- **Send Window Messages**`Boolean`: Send window messages for clicking

- **Show Mouse Movement Trail**`Boolean`: Whether to show the mouse movement trail

- **Click Method**`Integer`: Single-click or double-click

- **Mouse Button**`Integer`: Trigger the click of a mouse button

- **Modifier Keys**`Integer`: Keyboard modifier keys that need to be pressed

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Delay After Execution (ms)**`Integer`: Time to continue waiting after the command execution is completed

- **Target Text Position**`Integer`: Supports clicking the center position of the element (center point of the element's rectangular area), random position (automatically and randomly specifies a point within the rectangular range of the element), custom position (manually specify the target point)

- **Custom**`Integer`: Custom position

- **Horizontal Translation**`Integer`: Enter a positive number to move right, a negative number to move left

- **Vertical Translation**`Integer`: Enter a positive number to move down, a negative number to move up

- **Wait for Element Presence (ms)**`Integer`: Timeout for waiting for the element to be present

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

