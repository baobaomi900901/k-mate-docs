---
title: Get Element Information (web)
---

# Get Element Information (web)

## Function Description

:::tip 
Get the text content, source code, attribute value, and position of elements in the web page
:::

## Configuration Item Description

### General

**Command Input**

- **Relative To**`Integer`: Relative position

- **Attribute Name**`string`: The attribute name of the web element

- **Intelligently Identify and Supplement Address Prefixes (http:// or https://)**`Boolean`: Intelligently Identify and Supplement Address Prefixes

- **Operation**`Integer`: Web Element Information

- **Operation Target**`TTarget`: Select the web element to be operated on

- **Web Page Object**`TBrowser`: Input a web page object that has been obtained or created through the 'Open Web Page' function


**Command Output**

- **Save Element Information To**`string`: Save the obtained web element information

### Advanced

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout period for waiting for the target element to exist

- **Convert to DPI Corresponding to 96**`Boolean`: Whether to convert the border attributes to device-independent units


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

