---
title: Text Review (Baidu)
---

# Text Review (Baidu)

## Function Description

:::tip 
Call Baidu AI for text review
:::

## Configuration Item Description

### General

**Command Input**

- **Text Content**`string`: Enter the text content for review


**Command Output**

- **Result**`string`: Review result

### Advanced

- **Proxy Parameters**`string`: Proxy server, format as Address:Port


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

