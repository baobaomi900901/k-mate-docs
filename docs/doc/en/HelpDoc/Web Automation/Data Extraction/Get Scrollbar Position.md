---
title: Get Scrollbar Position
---

# Get Scrollbar Position

## Function Description

:::tip 
Get the current position or bottom position (i.e., scroll length) of the scrollbar in a web page or element
:::

## Configuration Item Description

### General

**Command Input**

- **Position**`Integer`: Current scrollbar position relative to the top, bottom position is the maximum scroll length of the scrollbar

- **Scrollbar**`Integer`: Actual operation scrollbar direction

- **No Element Scrollbar, Auto Upward Search**`Boolean`: No Element Scrollbar, Auto Upward Search

- **Operation Target**`TTarget`: Select the web element to be operated on

- **Element Scrollbar**`Boolean`: Get the scrollbar position of the specified element, otherwise the scrollbar of the entire web page

- **Web Page Object**`TBrowser`: Input a web page object that has been obtained or created through the 'Open Web Page' function


**Command Output**

- **Save Scrollbar Position To**`Integer`: Save the obtained scrollbar position

### Advanced

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout period for waiting for the target scrollbar to exist


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

