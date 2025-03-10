---
title: Captcha Recognition
order: 1
---

# Captcha Recognition

## Function Description

:::tip 
Call the Kingsware AI interface for captcha recognition
:::

![Captcha Recognition](../../../assets/Captcha%20Recognition_command.png)

## Configuration Item Description

### General

**Command Input**

- **Recognition Method**`Integer`: Choose the recognition method

- **Image Path**`string`: Enter the image path to select

- **Label Type**`String`: Enter the correct label type

- **Label**`String`: Objects in the 9-grid

- **Slider Image File**`string`: Enter the path of the slider image file to select

- **Type**`Integer`: Obtain the type

- **Captcha Type**`Integer`: Enter the appropriate captcha type


**Command Output**

- **Response Header Information**`String`: Specify a variable to store the response header information.

- **Response Body Information**`String`: Specify a variable to store the response body information.

- **Error Information**`String`: Specify a variable to store the error information.

### Advanced

- **Response Header Type**`array of string`: When the server and client establish a long connection, it is necessary to set the HTTP response header 'Connection'. The default is ['Connection'].

- **Proxy parameter**`string`: When our program cannot directly connect to the target network but the other party has installed a proxy server, format: address:port

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

