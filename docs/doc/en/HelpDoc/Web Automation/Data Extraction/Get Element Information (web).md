---
title: Get Element Information (web)
order: 2
---

# Get Element Information (web)

## Function Description

:::tip 
Get the text content, source code, attribute value, and position of elements in the web page
:::

![Get Element Information (web)](../../../assets/Get Element Information (web)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Input a web page object that has been obtained or created through the 'Open Web Page' function

- **Operation Target**`TTarget`: Select the web element to be operated on

- **Operation**`Integer`: Web Element Information

- **Intelligently Identify and Supplement Address Prefixes (http:// or https://)**`Boolean`: Intelligently Identify and Supplement Address Prefixes

- **Attribute Name**`string`: The attribute name of the web element

- **Relative To**`Integer`: Relative position


**Command Output**

- **Save Element Information To**`string`: Save the obtained web element information

### Advanced

- **Convert to DPI Corresponding to 96**`Boolean`: Whether to convert the border attributes to device-independent units

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout period for waiting for the target element to exist


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

