---
title: Wait for Element (Web)
---

# Wait for Element (Web)

## Function Description

:::tip 
Wait for the specified element on the web page to appear or disappear before proceeding with the next steps
:::

## Configuration Item Description

### General

**Command Input**

- **Timeout (Milliseconds)`Integer`**: Set the maximum wait time

- **Set Timeout`Boolean`**: Set the wait timeout period; the process will continue automatically if it times out

- **Wait State`Integer`**: Select the wait state

- **Target Element`TTarget`**: Select the web element you want to operate on

- **Web Page Object`TBrowser`**: Enter a web page object obtained or created by the 'Open Web Page' function


**Command Output**

- **Wait Result`Boolean`**: If true, the wait was successful; otherwise, it timed out


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

