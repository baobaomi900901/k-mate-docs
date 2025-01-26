---
title: Drag Element (Web)
---

# Drag Element (Web)

## Function Description

:::tip 
Drag an element to a specified position in the web page
:::

## Configuration Item Description

### General

**Command Input**

- **Target Element**`TTarget`: The web element to be dragged

- **Y Coordinate**`Integer`: The y-coordinate where the mouse moves to the target position

- **X Coordinate**`Integer`: The x-coordinate where the mouse moves to the target position

- **Drag Method**`Integer`: Drag Method

- **Web Page Object**`TBrowser`: Input a web page object obtained or created by the 'Open Web Page' function


**Command Output**

No output for the current command

### Advanced

- **Wait for Element (Milliseconds)**`Integer`: Timeout for waiting for the element to exist

- **Vertical Translation**`Integer`: Enter a positive number to move down, a negative number to move up

- **RcOoffsetX**`Integer`: 

- **Custom**`Integer`: Custom position

- **Mouse Button Release Location**`Integer`: Supports releasing the mouse at the center of the target element, a random position (within the rectangle of the element), or a custom position

- **Movement Speed**`Integer`: Speed of moving the mouse

- **OoffsetX**`Integer`: 

- **Mouse Button Down Location**`Integer`: Supports pressing the mouse at the center of the drag element, a random position (within the rectangle of the element), or a custom position

- **Delay Time (Milliseconds)**`Integer`: Time to continue waiting after the instruction is executed


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

