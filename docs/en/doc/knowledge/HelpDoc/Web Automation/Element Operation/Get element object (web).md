---
title: Get element object (web)
---

# Get element object (web)

## Function Description

:::tip 
Locate an element on a webpage using capture, CSS, or XPath methods.
:::

## Configuration Item Description

### General

**Command Input**

- **Parent element**`TTarget`: Find the target element within the parent element.

- **Associated parent element**`Boolean`: Whether to associate with the parent element.

- **XPath selector**`string`: Enter the XPath selector.

- **CSS selector**`string`: Enter the CSS selector.

- **Operation target**`TTarget`: Select the web element to be operated on.

- **Locating method**`Integer`: Specify a method to locate an element.

- **Webpage object**`TBrowser`: Enter a webpage object that has been obtained or created through the 'open webpage' function.


**Command Output**

- **Save element object to**`TUiElement`: Specify a variable to save the acquired element object.

### Advanced

- **Wait for element existence (ms)**`Integer`: Timeout for waiting for the target element to exist.


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

