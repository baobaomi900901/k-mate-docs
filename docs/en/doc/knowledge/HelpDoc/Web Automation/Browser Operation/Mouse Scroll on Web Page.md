---
title: Mouse Scroll on Web Page
---

# Mouse Scroll on Web Page

## Function Description

:::tip 
Scroll the mouse in the specified web page, which can be set to scroll to the top, bottom, or a specific position
:::

## Configuration Item Description

### General

**Command Input**

- **Scroll Effect**`Integer`: Specify the scroll effect of the mouse

- **Vertical Coordinate**`Integer`: The vertical coordinate where the mouse moves to the target position

- **Horizontal Coordinate**`Integer`: The horizontal coordinate where the mouse moves to the target position

- **Scroll Position**`Integer`: Specify the target position for web page scrolling

- **If Element Has No Scrollbar, Search Upwards Automatically**`Boolean`: If the current element has no scrollbar, automatically search upwards for an element with a scrollbar

- **Operation Target**`TTarget`: Select the web element to operate on

- **Scroll on Specified Element**`Boolean`: Scroll on the specified element

- **Web Page Object**`TBrowser`: Enter a web page object that is obtained or created through the 'Open Web Page' function


**Command Output**

No output for the current command

### Advanced

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout in milliseconds to wait for the element to exist


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

