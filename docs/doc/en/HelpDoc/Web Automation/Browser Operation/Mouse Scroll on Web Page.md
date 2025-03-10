---
title: Mouse Scroll on Web Page
order: 7
---

# Mouse Scroll on Web Page

## Function Description

:::tip 
Scroll the mouse in the specified web page, which can be set to scroll to the top, bottom, or a specific position
:::

![Mouse Scroll on Web Page](../../../assets/Mouse%20Scroll%20on%20Web%20Page_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Enter a web page object that is obtained or created through the 'Open Web Page' function

- **Scroll on Specified Element**`Boolean`: Scroll on the specified element

- **Operation Target**`TTarget`: Select the web element to operate on

- **If Element Has No Scrollbar, Search Upwards Automatically**`Boolean`: If the current element has no scrollbar, automatically search upwards for an element with a scrollbar

- **Scroll Position**`Integer`: Specify the target position for web page scrolling

- **Horizontal Coordinate**`Integer`: The horizontal coordinate where the mouse moves to the target position

- **Vertical Coordinate**`Integer`: The vertical coordinate where the mouse moves to the target position

- **Scroll Effect**`Integer`: Specify the scroll effect of the mouse


**Command Output**

No output for the current command

### Advanced

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout in milliseconds to wait for the element to exist

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution

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

