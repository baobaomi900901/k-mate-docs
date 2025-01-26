---
title: IF Web Page Contains
---

# IF Web Page Contains

## Function Description

:::tip 
Check if the specified text or element appears on the web page
:::

## Configuration Item Description

### General

**Command Input**

- **Text Content**`string`: Select the text content to check

- **Target Element**`TTarget`: Select the web page element to check

- **Check if the web page contains**`Integer`: Specify the type of content you want to check, either element or text

- **Web Page Object**`TBrowser`: Enter a web page object obtained or created by the 'Open Web Page' function


**Command Output**

No output for the current command


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

