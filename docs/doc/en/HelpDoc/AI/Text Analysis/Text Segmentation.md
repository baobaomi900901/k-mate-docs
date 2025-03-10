---
title: Text Segmentation
order: 1
---

# Text Segmentation

## Function Description

:::tip 
Call the Kingsware AI interface to split continuous natural language text into a list of words that have meaningful coherence and completeness
:::

![Text Segmentation](../../../assets/Text%20Segmentation_command.png)

## Configuration Item Description

### General

**Command Input**

- **Text**`string`: Enter the text content


**Command Output**

- **Response header information**`String`: Return response header information

- **Response body information**`String`: Return response body information

- **Error information**`String`: Return error information

### Advanced

- **Response header type**`array of string`: When the server and client create a long connection, necessary settings should be made for the HTTP response header's connection, default is ['Connection']

- **DelayBefore(milliseconds)**`Integer`: The waiting time before instruction execution

- **Timeout (milliseconds)**`Integer`: Maximum wait time (milliseconds)

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

