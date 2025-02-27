---
title: Set element value (web)
---

# Set element value (web)

## Function Description

:::tip 
Set the value of an element on the webpage, typically for input and select elements.
:::

## Configuration Item Description

### General

**Command Input**

- **Element value**`string`: Enter the value to be set for the element.

- **Operation target**`TTarget`: Select the web element to be operated on.

- **Webpage object**`TBrowser`: Enter a webpage object that has been obtained or created through the 'open webpage' function.


**Command Output**

No output for the current command

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

