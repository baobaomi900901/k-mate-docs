---
title: Drag Element (Web)
order: 1
---

# Drag Element (Web)

## Function Description

:::tip 
Drag an element to a specified position in the web page
:::

![Drag Element (Web)](../../../assets/Drag Element (Web)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Input a web page object obtained or created by the 'Open Web Page' function

- **Drag Method**`Integer`: Drag Method

- **X Coordinate**`Integer`: The x-coordinate where the mouse moves to the target position

- **Y Coordinate**`Integer`: The y-coordinate where the mouse moves to the target position

- **Target Element**`TTarget`: The web element to be dragged


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Delay Time (Milliseconds)**`Integer`: Time to continue waiting after the instruction is executed

- **Mouse Button Down Location**`Integer`: Supports pressing the mouse at the center of the drag element, a random position (within the rectangle of the element), or a custom position

- **Movement Speed**`Integer`: Speed of moving the mouse

- **Mouse Button Release Location**`Integer`: Supports releasing the mouse at the center of the target element, a random position (within the rectangle of the element), or a custom position

- **Custom**`Integer`: Custom position

- **Horizontal Translation**`Integer`: Enter a positive number to move right, a negative number to move left

- **Vertical Translation**`Integer`: Enter a positive number to move down, a negative number to move up

- **Wait for Element (Milliseconds)**`Integer`: Timeout for waiting for the element to exist


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

