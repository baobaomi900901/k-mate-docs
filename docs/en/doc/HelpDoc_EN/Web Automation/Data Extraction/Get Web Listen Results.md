---
title: Get Web Listen Results
---

# Get Web Listen Results

## Function Description

:::tip 
Get the results of web listening.
:::

## Configuration Item Description

### General

**Command Input**

- **ResType`Integer`**: 

- **Web Page Object`TBrowser`**: Enter a web page object that has been obtained or created using the 'Open Web Page' function.


**Command Output**

- **Save Web Listen Results List`string`**: Save the list of web listen results obtained.


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

