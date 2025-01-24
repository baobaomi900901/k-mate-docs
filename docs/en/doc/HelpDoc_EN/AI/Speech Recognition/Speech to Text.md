---
title: Speech to Text
---

# Speech to Text

## Function Description

:::tip 
Call the Kingsware AI interface to recognize and output the content of the speech file
:::

## Configuration Item Description

### General

**Command Input**

- **File`string`**: Input or select the address of the speech file


**Command Output**

- **Error Information`String`**: Specify a variable to store the error information

- **Response Body Information`String`**: Specify a variable to store the response body information

- **Response Header Information`String`**: Specify a variable to store the response header information

### Advanced

- **Response Header Type`array of string`**: When a long connection is established between the server and client, necessary settings for the HTTP response header 'connection' are required. Default is ['Connection']


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

