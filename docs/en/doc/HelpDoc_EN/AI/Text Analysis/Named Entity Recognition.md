---
title: Named Entity Recognition
---

# Named Entity Recognition

## Function Description

:::tip 
Call the Kingsware AI interface to extract entities such as organizations, names, and places from sentences, supporting the simultaneous parsing of multiple sentences
:::

## Configuration Item Description

### General

**Command Input**

- **Text`string`**: Enter the text content, which should not exceed 512 characters. The text format must be ["Text1","Text2",...]


**Command Output**

- **Error Information`String`**: Return the error information

- **Response Body Information`String`**: Return the response body information

- **Response Header Information`String`**: Return the response header information

### Advanced

- **Response Header Type`array of string`**: When a long connection is created between the server and the client, necessary settings must be made for the HTTP response header's connection, default is ['Connection']


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

