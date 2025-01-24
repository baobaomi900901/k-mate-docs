---
title: Get Web Page Information
---

# Get Web Page Information

## Function Description

:::tip 
Get web page text content, URL, source code, title, etc.
:::

## Configuration Item Description

### General

**Command Input**

- **Operation`Integer`**: The web information to be obtained

- **Web Page Object`TBrowser`**: Input a web page object that has been obtained or created through the 'Open Web Page' function


**Command Output**

- **WebRst`string`**: 


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

