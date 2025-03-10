---
title: ID Card Recognition
order: 4
---

# ID Card Recognition

## Function Description

:::tip 
Call the AI interface for ID card recognition
:::

![ID Card Recognition](../../../assets/ID%20Card%20Recognition_command.png)

## Configuration Item Description

### General

**Command Input**

- **Recognition Method**`Integer`: Select recognition method

- **Image Path**`string`: Enter the image address to select

- **Recognition Object Type**`Integer`: Front of the ID card, Back of the ID card, Front and Back of the ID card

- **Front and Back**`Integer`: Front: The side of the ID card with the photo; Back: The side of the ID card with the national emblem


**Command Output**

- **Result**`string`: Specify a variable to store the recognition result

- **Response Header Information**`String`: Specify a variable to store the response header information

- **Response Body Information**`String`: Specify a variable to store the response body information

- **Error Information**`String`: Specify a variable to store the error information

### Advanced

- **Proxy Parameter**`string`: When our program cannot directly connect to the target network but the other party has installed a proxy server, format is Address:Port

- **Response Header Type**`array of string`: When the server and client create a long connection, necessary settings need to be made to the HTTP response header's connection. Default is ['Connection']

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

