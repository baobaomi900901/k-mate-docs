---
title: Set dropdown (web)
---

# Set dropdown (web)

## Function Description

:::tip 
Set the selected item in a web dropdown. Only effective for <select> tags on the webpage.
:::

## Configuration Item Description

### General

**Command Input**

- **Matching mode`Integer`**: The matching mode for the selected content.

- **Selected value`string`**: Enter the option content or the option position.

- **Selection type`Integer`**: Set the basis for selection.

- **Operation target`TTarget`**: Select the web element to be operated on.

- **Webpage object`TBrowser`**: Enter a webpage object that has been obtained or created through the 'open webpage' function.


**Command Output**

No output for the current command

### Advanced

- **Wait for element existence (ms)`Integer`**: Timeout for waiting for the target dropdown to exist.

- **Delay time (ms)`Integer`**: Time to continue waiting after the command is executed.


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

